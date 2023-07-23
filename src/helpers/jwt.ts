import jwt from 'jsonwebtoken';


export const genererJWT = ( { id, name, email, id_role,  is_active }) => {
    


    return new Promise(( resolve, reject ) =>{
        const payload = { id, name, email, id_role, is_active };

        if (!process.env.SECRET_TOKEN) {
            reject('No se ha definido SECRET_TOKEN en las variables de entorno.');
            return;
          }
          

        jwt.sign( payload, process.env?.SECRET_TOKEN, {
            expiresIn: '2h'
        }, ( err, token ) =>{
            if( err ){
                console.log(err);
                reject('no se genero el token')
            }

            resolve( token );
        } )
    })

}