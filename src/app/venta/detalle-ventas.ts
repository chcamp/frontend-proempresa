import { Producto } from "./producto";

export class DetalleVentas {

    id_detalle:number=0;
    cantidad:number=0;
    precio: number=0;
    sub_total:number=0;

    producto :Producto= new Producto;

    public calcularSubTotal():number{

        this.sub_total = this.cantidad* this.precio;
        return this.sub_total;
    }

}
