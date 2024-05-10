import { Injectable } from '@angular/core';
import { Fornecedor } from '../interfaces/Fornecedor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private fornecedorUrl = "http://localhost:3000/fornecedores"
  constructor(private http:HttpClient) {

  }

  fornecedor:Fornecedor[] = [
    {id:"1234", nome:"Gabriela Terzi", endereco:"Rua xxx 000", telefone:"00000000"},
    {id:"5678", nome:"Gabriel Mota", endereco:"Rua yyy 111", telefone:"1111111"}

  ];

  
  httpHeader = {
    headers:{
      "Content-Type":"Application/json"
    }
  }

   atualizar(fornecedor:Fornecedor){
    return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
  }
   
  listar():Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.fornecedorUrl) as Observable<Fornecedor[]>
  }

  remover(id:string){
    return this.http.delete(`${this.fornecedorUrl}/${id}`)
  }

  adicionar(fornecedor:Fornecedor){
    return this.http.post(this.fornecedorUrl, fornecedor, this.httpHeader)
  }

  getById(id:string):Observable<Fornecedor>{
    return this.http.get(`${this.fornecedorUrl}/${id}`) as Observable<Fornecedor>
  }

}
