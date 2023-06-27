import { Venta } from "../venta/venta";



export class Cliente {

    id_cliente: number=0;
    nombre:string ='';
    apellido:string='';
    nro_documento:string='';
    email:string='';
    create_at:string='';

  ventas: Array<Venta>=[];
}
