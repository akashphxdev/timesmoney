import { Request, Response } from 'express';
import { loginAdmin } from '../../services/admin/auth.service';
import { validateLogin } from '../../validators/admin/auth.validator';

export const login = async (req: Request, res: Response) => {
  try {
    const errors = validateLogin(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const { email, password } = req.body;
    const data = await loginAdmin(email, password);

    res.json({ success: true, message: 'Login successful', data });
  } catch (error: any) {
    res.status(401).json({ success: false, message: error.message });
  }
};