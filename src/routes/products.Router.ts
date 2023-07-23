import Router from 'express';
import { check } from 'express-validator';
import { validarProduct } from '@helpers/';
import { validarCampos, validarJWT } from '@middlewares/';
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from '@controllers/';


const router = Router();


router.get('/', validarJWT, getProducts);

router.get('/:id', [
    check('id', 'id no Valido').isUUID(),
    validarJWT,
    validarCampos
] ,getProduct);

router.post('/', [
    check('name', 'El nombre es requerido').isString(),
    check('name', 'El producto ya existe').custom( validarProduct ),
    check('price', 'El preecio es requerido').isFloat(),
    check('fecha_ingreso', 'La fecha de ingreso es requerido').notEmpty(),
    check('fecha_vencimiento', 'La fecha de ingreso es requerido').notEmpty(),
    check('category', 'La categoria es requerida').notEmpty(),
    validarJWT,
    validarCampos
] ,postProduct);

router.put('/:id', validarJWT,putProduct);

router.delete( '/:id', validarJWT, deleteProduct )

export default router;
