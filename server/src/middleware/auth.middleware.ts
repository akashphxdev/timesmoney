import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CmsAdminRole } from '../generated/prisma';

export interface AdminRequest extends Request {
  admin?: {
    id: string;
    email: string;
    role: CmsAdminRole;
  };
}

// Auth check
export const isAuthenticated = (req: AdminRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized - No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      email: string;
      role: CmsAdminRole;
    };

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Unauthorized - Invalid token' });
  }
};

// Role check
export const authorizeRoles = (...roles: CmsAdminRole[]) => {
  return (req: AdminRequest, res: Response, next: NextFunction) => {
    if (!req.admin) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    if (!roles.includes(req.admin.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden - Access denied' });
    }

    next();
  };
};