import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/conection';
import { productRouter, authRouter } from '@routes/';
// import { authRouter, productRouter } from '../routes';

class Server {

    private app : Application;
    private port : string;
    private apiPaths = {
        products: '/api/products',
        auth: '/api/auth'
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3002'

        this.dbConnection();
        this.middelares();
        this.routes();
    }

    routes() {
        this.app.use( this.apiPaths.products, productRouter );
        this.app.use( this.apiPaths.auth, authRouter );
    }

    middelares() {

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );


    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('servidor activo en el puerto --> ' + this.port );
        } )
    }

    async dbConnection(){
        try {
            
            await db.authenticate();
            console.log('bd Online');
            
            
        } catch (error) {
            console.log(error);
            
            throw new Error( 'error al conectar DB' );
        }
    }
}

export default Server;