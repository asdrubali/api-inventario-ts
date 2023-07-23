import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserInstance } from '@interfaces/';

interface UserRequest extends Request {
  user: UserInstance;
}

export const validarJWT = (req: UserRequest, res: Response, next: NextFunction) => {

  const token = req.header('token');
  

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token',
    });
  }

  try {
    if (!process.env.SECRET_TOKEN) {
      throw new Error('No se ha definido SECRET_TOKEN en las variables de entorno.');
    }

    const payload = verify(token, process.env.SECRET_TOKEN) as UserInstance;

    const user: UserInstance = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      id_role: payload.id_role,
      is_active: payload.is_active,
    } as UserInstance;
    
    req.user = user;
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Error del servidor',
    });
  }

  next();
};
