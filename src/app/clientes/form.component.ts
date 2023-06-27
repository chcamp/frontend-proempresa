import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public titulo: string = 'Crear Cliente';

  constructor(private clienteService: ClienteService,
          private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.traerCliente();
    
  }

  public create(): void{

    this.clienteService.createCliente(this.cliente).subscribe(

      response => this.router.navigate(['/clientes'])
    );
    
    console.log('clicado!!');
    console.log(this.cliente);
    
  }

  traerCliente():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente)=> this.cliente = cliente);
      }
    })
  }

  public update():void{
    this.clienteService.updateCliente(this.cliente).subscribe( cliente => {
      this.router.navigate(['/clientes'])
    })
  }



}
