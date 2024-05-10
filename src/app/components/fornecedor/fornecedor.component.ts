import { Component } from '@angular/core';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent {

  fornecedor:Fornecedor[] = [];
  fornecedorForm: FormGroup = new FormGroup({})

  constructor(private FornecedorService:FornecedorService, private FormBuilder:FormBuilder){
    this.fornecedorForm = this.FormBuilder.group({
        nome: ['', Validators.required],
        endereco: ['', Validators.required],
        telefone: ['', Validators.required]
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
    if(this.fornecedorForm.valid) {
       const fornecedorNovo:Fornecedor= {
         id: this.generateRandomString(6),
         nome: this.fornecedorForm.value.nome,
         endereco: this.fornecedorForm.value.endereco,
         telefone: this.fornecedorForm.value.telefone,
       }
       this.fornecedorForm.reset()
       this.fornecedor.push(fornecedorNovo)
       this.FornecedorService.adicionar(fornecedorNovo).subscribe()
       alert('Cadastrado com sucesso!')
    }
 }


  listar():void{
    this.FornecedorService.listar().subscribe((listFornecedor) => (this.fornecedor = listFornecedor))
  }

   remover(id:string):void{
  this.fornecedor = this.fornecedor.filter((c) => c.id !== id)
  this.FornecedorService.remover(id).subscribe()
  alert('Fornecedor removido com sucesso!')
 }

  ngOnInit():void{
    this.listar();
  }

}
