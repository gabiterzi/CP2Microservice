import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {
  cliente?:Cliente;
    clientForm: FormGroup = new FormGroup({})
    constructor(private route: ActivatedRoute, private clientService:ClienteService, private formBuilder: FormBuilder){
    this.getClientById()
  }

  id?:string;
  getClientById(){
    // ?? '' -> significa se ele for nulo passar o vazio
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.clientService.getById(this.id).subscribe((clienteResponse) => this.cliente = clienteResponse)

    this.clientForm = this.formBuilder.group({
        nome: [this.cliente?.nome],
        telefone: [this.cliente?.telefone],
        id: [this.cliente?.id]
      })
    alert(this.id);
  }

  update():void{
    if(this.clientForm.valid) {
        const clientNovo: Cliente = {
          nome: this.clientForm.value.nome,
          telefone: this.clientForm.value.telefone,
          id : this.clientForm.value.id
        }
        this.clientService.atualizar(clientNovo).subscribe()
        alert('Cliente alterado com sucesso')
  }

}
}
