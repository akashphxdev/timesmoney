import { Request, Response } from 'express';
import { createProductLead } from '../../services/public/lead.service';
import { validateProductLead } from '../../validators/public/lead.validator';

// ==================== SUBMIT PRODUCT LEAD ====================

export const submitProductLead = async (req: Request, res: Response) => {
  try {
    const errors = validateProductLead(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const { name, phone, email, productId, customData } = req.body;

    const lead = await createProductLead({ name, phone, email, productId, customData });

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