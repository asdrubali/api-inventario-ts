import Router from 'express';
import { check } from 'express-validator';
import {loginUser, registerUser, revalinToken } from '@controllers/';
import { validarEmail } from '@helpers/';
import { validarCampos, validarJWT } from '@middlewares/';


const router = Router();


router.post('/login', [
    check('email', 'El email no es valido').isEmail(),
    check('password', 'la contraseña es  demaciado corta').isLength( { min: 6 } ),
    validarCampos
] , loginUser);

router.post('/register', [
    check('name', 'Nombre invalido').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('email', 'El email ya existe').custom( validarEmail ),
    check('password', 'la contraseña es  demaciado corta').isLength( { min: 6 } ),
    validarCampos
] , registerUser);

router.get('/reval', validarJWT, revalinToken);

export default router;