import { Request, Response } from 'express';
import {
  getHomeData,
  createHeroLead,
  updateLeadEmail as updateLeadEmailService,
} from '../../services/public/home.service';
import { validateHeroLead } from '../../validators/public/home.validator';
import { sendWhatsAppMessage, sendLeadEmail } from '../../services/public/notification.service';

// ==================== GET HOME DATA ====================

export const homeData = async (_req: Request, res: Response) => {
  try {
    const data = await getHomeData();
    res.json({ success: true, data });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

// ==================== CREATE HERO LEAD ====================

export const submitHeroLead = async (req: Request, res: Response) => {
  try {
    const errors = validateHeroLead(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const { name, phone, categoryId, subCategoryId, employmentType } = req.body;

    const lead = await createHeroLead({ name, phone, categoryId, subCategoryId, employmentType });

    // ── WhatsApp message Step 1 pe (non-blocking) ──
    sendWhatsAppMessage({
      phone,
      name,
      subCategoryName: lead.subCategoryName ?? lead.categoryName ?? undefined,
    }).catch((err) => console.error('[WhatsApp] Background error:', err));

    res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you soon.',
      data: lead,
    });
  } catch (error: unknown) {
    const err = error as any;
    const statusCode = err.statusCode ?? 500;
    res.status(statusCode).json({ success: false, message: err.message });
  }
};

// ==================== UPDATE LEAD EMAIL ====================

export const updateLeadEmail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        errors: [{ field: 'email', message: 'Valid email is required' }],
      });
    }

    const lead = await updateLeadEmailService({ leadId: String(id), email });

    // ── Email Step 2 pe (non-blocking) ──
    sendLeadEmail({
      email,
      name: lead.name ?? 'Valued Customer',
      subCategoryName: lead.subCategoryName ?? lead.categoryName ?? undefined,
    }).catch((err) => console.error('[Email] Background error:', err));

    res.json({ success: true, data: lead });
  } catch (error: unknown) {
    const err = error as any;
    res.status(err.statusCode ?? 500).json({ success: false, message: err.message });
  }
};