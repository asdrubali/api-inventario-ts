import { User, Products } from "@models/";




export const validarEmail = async ( email: string = '' ) =>{
    const emailEx = await User.findOne({ where: { email }});
    if ( emailEx ) {
        throw new Error();
    }
};

export const validarProduct = async ( product: string = '' ) =>{
    const productEx = await Products.findOne({ where: { name: product }});
    if ( productEx ) {
        throw new Error();
    }
};
