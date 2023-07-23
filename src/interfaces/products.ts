import { Model } from "sequelize";

export interface ProductsInterface extends Model {
    id?: number;
    name: string;
    price: number;
    fecha_ingreso: Date;
    fecha_vencimiento: Date;
    id_category: string;
    stock: number;
    status?: string;
    img?: string;
    category?: string;
    is_active?: boolean
  }


  
  
