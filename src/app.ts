import moduleAlias from 'module-alias'
import path from 'path'
import dotenv from 'dotenv';
dotenv.config();
moduleAlias.addAliases({
    '@helpers': path.join(__dirname, '/helpers'),
    '@middlewares': path.join(__dirname, '/middlewares'),
    '@controllers': path.join(__dirname, '/controllers'),
    '@routes': path.join(__dirname, '/routes'),
    '@interfaces': path.join(__dirname, '/interfaces'),
    '@models': path.join(__dirname, '/models')
  })
  import {Server} from "@models/";
  



const app = new Server();


app.listen();



