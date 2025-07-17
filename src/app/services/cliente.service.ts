import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 
  private readonly apiUrl = 'http://localhost:5214/api/clientes'; 

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
  
  getCliente(id: number): Observable<Cliente>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  getPedidosDoCliente(clienteId: number): Observable<Pedido[]>{
     const url = `${this.apiUrl}/${clienteId}/pedidos`;
     return this.http.get<Pedido[]>(url);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  updateCliente(id: number, cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, cliente);
  }
  
   deleteCliente(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}