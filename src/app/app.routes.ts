import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { IbgeListComponent } from './components/ibge-list/ibge-list.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { FornecedoresEditComponent } from './components/fornecedor-edit/fornecedor-edit.component';

export const routes: Routes = [
  // se a path for vazia ele vai pra home
  // { path: '', component: HomeComponent},
  { path: '', component: FornecedorComponent},
  // quando colocarmos http://localhost:4200/nova-rota irá para o componente rota
  { path: 'nova-rota', component: RotaComponent},
  { path: 'cliente/:id', component: ClientDetailComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'pokemon', component: PokemonListComponent},
  { path: 'estados', component: IbgeListComponent},  
  { path: 'fornecedor/:id', component: FornecedoresEditComponent},
  // o ** significa que qualquer outra coisa além de vazio e nova-rota irá para esse
  // Esse tem sempre que estar por último
  { path: '**', component: HomeComponent}

];
