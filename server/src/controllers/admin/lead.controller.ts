import { Request, Response } from 'express';
import { validateUpdateLead } from '../../validators/admin/lead.validator';
import { getAllLeads, getLeadById, updateLead, deleteLead } from '../../services/admin/lead.service';

export const getAll = async (req: Request, res: Response) => {
  try {
    const { status, categoryId, productId } = req.query;
    const leads = await getAllLeads({
      status: status as string,
      categoryId: categoryId as string,
      productId: productId as string,
    });
    res.json({ success: true, data: leads });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const lead = await getLeadById(req.params.id as string);
    res.json({ success: true, data: lead });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const errors = validateUpdateLead(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });
    const lead = await updateLead(req.params.id as string, req.body);
    res.json({ success: true, message: 'Lead updated', data: lead });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const result = await deleteLead(req.params.id as string);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};