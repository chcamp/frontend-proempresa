import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private endPoint: string = 'http://localhost:8182/rest/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient:HttpClient ) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.httpClient.get<Cliente[]>(this.endPoint).pipe(
      map( (response) => response as Cliente[] )
    );
  }

  createCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.endPoint, cliente, {headers: this.httpHeaders});
  }

  getCliente(id:number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.endPoint}/${id}`);
  }

  updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.endPoint}/${cliente.id_cliente}`, cliente,{headers: this.httpHeaders} );
  }

  delete(id:number):Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.endPoint}/${id}`, {headers: this.httpHeaders});
  }


}
