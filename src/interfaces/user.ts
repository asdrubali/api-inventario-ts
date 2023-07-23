import { Request } from 'express';
import { Model } from 'sequelize';

export interface UserInstance extends Model {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  id_role?: number;
  is_active?: boolean;
}

export interface UserTok extends Request {
  user: UserInstance;
}
