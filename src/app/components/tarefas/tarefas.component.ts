import { ClienteService } from './../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  tarefa:Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({})

  constructor(private TarefaService:TarefaService, private FormBuilder:  FormBuilder){
    this.tarefaForm = this.FormBuilder.group({
        titulo: ['', Validators.required],
        descricao: ['', Validators.required],
        datadevencimento: ['', Validators.required]
    })
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir(){
    if(this.tarefaForm.valid) {
       const tarefaNova:  Tarefa= {
         id: this.generateRandomString(6),
         titulo: this.tarefaForm.value.titulo,
         descricao: this.tarefaForm.value.descricao,
         datadevencimento: this.tarefaForm.value.datadevencimento,

       }
       this.tarefaForm.reset()
       this.TarefaService.adicionar(tarefaNova)
       alert('Cadastrado com sucesso!')
    }
 }


 listar():void{
  this.tarefa = this.TarefaService.listar();
}

remover(id:string):void{
this.TarefaService.remover(id);
alert('Removido com sucesso')
}

ngOnInit():void{
this.listar();
}


}
