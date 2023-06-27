import { Component } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { DetalleVentas } from './detalle-ventas';
import { ClienteService } from '../clientes/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

Router

@Component({
  selector: 'app-venta',
  templateUrl: './venta.html',
  styleUrls: ['./venta.component.css']
})





export class Venta {

  ngOnInit(): void {
    this.traerCliente();

    
    
  }

  constructor(private clienteService: ClienteService,
    private router: Router, private activatedRoute: ActivatedRoute){
  
  }

  id_venta:number=0;
  fecha:string='';
  serie:string='';
  numero:string='';
  total:number=0;  

  cliente: Cliente = new Cliente;
  detalleVentas: Array<DetalleVentas>=[];

  traerCliente():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente)=> this.cliente = cliente);
      }

      console.log('este es el cliente por id: ' + this.cliente);
      
    })
  }
  


}
