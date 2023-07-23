import { Request, Response } from "express"
import bcryptjs from 'bcryptjs';
import {Role, User} from "@models/";
import { UserTok } from "@interfaces/";
import { genererJWT } from "@helpers/";



export const loginUser = async ( req: Request, res: Response ) => {

    const { email, password  } = req.body

    try {

        const user = await User.findOne({
            where: { email },
            include: [{
                model: Role
            }] 
        })

        if (!user) {
            return res.status(404).json({
              ok: false,
              msg: 'User not found',
            });
          }

        if (!user.password) {
            return res.status(400).json({
              ok: false,
              msg: 'No se encontro el password',
            });
          }

        const isMatch = bcryptjs.compareSync(password, user.password );

        if (!isMatch) {
            return res.status(401).json({
              ok: false,
              msg: 'Incorrect password',
            });
          }

          const tokenData = { 
            id: user.id, 
            name: user.name, 
            email: user.email, 
            id_role: user.id_role, 
            is_active: user.is_active 
        }

        const token = await genererJWT( {...tokenData} )

     
        return res.status(202).json({
            ok: true,
            msg: 'LoginUser',
            user,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
        })
        
    }
}

export const registerUser = async ( req: Request, res: Response ) => {
    
    const body = req.body;

    try {

        // encriptando pasas
        const salt = bcryptjs.genSaltSync(10);
        body.password = bcryptjs.hashSync( body.password, salt );

        const user = await User.create({
            name: body.name,
            email: body.email,
            password: body.password,
            id_role: body.id_role
        });

        const token = await genererJWT( { id: user.id, name: user.name, email: user.email, id_role: user.id_role,  is_active: user.is_active } )
     
        return res.status(202).json({
            ok: true,
            msg: 'Usuario registrado correctamente',
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
        })
        
    }
}

export const revalinToken = async ( req: UserTok , res: Response ) => {
    
    const { password, ...user } = req.user
    
    console.log(user);
    
    const token = await genererJWT( { id: user.id, name: user.name, email: user.email, id_role: user.id_role,  is_active: user.is_active } )

    return res.status(200).json({
        ok: true,
        token,
        user:{ id: user.id, name: user.name, email: user.email, id_role: user.id_role,  is_active: user.is_active }
    })
}