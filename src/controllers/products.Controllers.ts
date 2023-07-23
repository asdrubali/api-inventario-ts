import { Request, Response } from "express";
import {ProductsInterface} from "@interfaces/";
import { Categories, Products} from "@models/";



export const getProducts = async ( req: Request, res: Response ) =>{
    
    try {
        
        const {count, rows: products} = await Products.findAndCountAll({
            where: {
                is_active: true
            },
            include:[{
                model: Categories
            }]
        });

        if( !products ){
            return res.status(400).json({
                ok: false,
                msg: 'Products no found',
            })
        }

        return res.status(202).json({
            ok: true,
            data:{
                count,
                products
            }
        });


    } catch (error) {
    console.log(error);
    return res.status(500).json({
        ok: false,
        msg: 'Server Error',
    })
    }
}

export const getProduct = async ( req: Request, res: Response ) =>{

    const { id } = req.params;

    try {
        
        const product = await Products.findByPk(id);

        if( !product ){
            return res.status(400).json({
                ok: false,
                msg: 'Product no found',
            })
        }

        return res.status(202).json({
            ok: true,
            product
        });


    } catch (error) {
    console.log(error);
    return res.status(500).json({
        ok: false,
        msg: 'Server Error',
    })
    }
}

export const postProduct = async ( req: Request, res: Response ) =>{

    const body : ProductsInterface = req.body;
    

    try {

        const product = await Products.findOne({
            where: {
                name: body.name
            }
        })

        if (product){
            res.status(400).json({
                ok: false,
                msg: 'el product ya existe' 
            })
        }

        const id_category = await Categories.findOne({
            where:{
                name: body.category
            }
        })
        
        
        const newProduct = await Products.create({
            fecha_ingreso: body.fecha_ingreso ,
            fecha_vencimiento: body.fecha_vencimiento ,
            name: body.name ,
            price: body.price ,
            status: body.status ,
            stock: body.stock,
            id_category:  id_category?.dataValues.id
        });

        return res.status(202).json({
            ok: true,
            // newProduct
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
        })
    }
}

export const putProduct = async ( req: Request, res: Response ) =>{

    const { id } = req.params;
    const { id: _id , ...body } = req.body;

    try {
        const product = await Products.findByPk(id)

        console.log(product);
        

        if( !product ){
            return res.status(404).json({
                ok: false,
                msg: 'El producto no existe',
            });
        }

        product?.update(body)
    
        return res.status(202).json({
            ok: true,
            product: body,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
        })
    }
}

export const deleteProduct = async ( req: Request, res: Response  ) =>{
    
    const { id } = req.params;

    try {
        const product = await Products.findByPk(id)
        

        if( !product ){
            return res.status(404).json({
                ok: false,
                msg: 'El producto no existe',
            });
        }

        if( !product.is_active ){
            return res.status(404).json({
                ok: false,
                msg: 'El producto eliminado anteriormente',
            });
        }

        product.update({ is_active: false })
    
        return res.status(202).json({
            ok: true,
            msg: 'Producto eliminado'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
        })
    }
}
