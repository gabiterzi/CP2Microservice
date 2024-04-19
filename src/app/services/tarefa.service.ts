import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefas:Tarefa[] = [
    {id:"1234", titulo:"revisar", descricao:"revisar escopo de projeto", datadevencimento:"20/04/2024"},
    {id:"5678", titulo:"documentação", descricao:"fazer documentação do projeto projeto", datadevencimento:"31/04/2024"}

  ];

  listar():Tarefa[]{
    return this.tarefas;
  }

  remover(id:string){
    const tarefa = this.tarefas.find(c => c.id == id);

    if(tarefa){
       const index = this.tarefas.indexOf(tarefa);
       this.tarefas.splice(index,1);
    }
  }

  adicionar(cliente:Tarefa){
    this.tarefas.push(cliente);
  }


}
