import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes: Cliente[]=[];

  constructor(private clienteService:ClienteService ){};

  ngOnInit(): void {
    //this.clientes = CLIENTES;

    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      }
    );

    
  }

  delete(cliente: Cliente):void{
    this.clienteService.delete(cliente.id_cliente).subscribe(response =>{
      this.clientes = this.clientes.filter(clte => clte !== cliente)
    })
  }

}
