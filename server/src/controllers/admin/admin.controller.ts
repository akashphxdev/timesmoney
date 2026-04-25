import { Request, Response } from 'express';
import { AdminRequest } from '../../middleware/auth.middleware';
import {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin
} from '../../services/admin/admin.service';
import {
  validateCreateAdmin,
  validateUpdateAdmin
} from '../../validators/admin/admin.validator';

export const getAll = async (req: AdminRequest, res: Response) => {
  try {
    const admins = await getAllAdmins();
    res.json({ success: true, data: admins });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const admin = await getAdminById(id);
    res.json({ success: true, data: admin });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: AdminRequest, res: Response) => {
  try {
    const errors = validateCreateAdmin(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const admin = await createAdmin(req.body);
    res.status(201).json({ success: true, message: 'Admin created', data: admin });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const errors = validateUpdateAdmin(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const admin = await updateAdmin(id, req.body);
    res.json({ success: true, message: 'Admin updated', data: admin });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await deleteAdmin(id);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};