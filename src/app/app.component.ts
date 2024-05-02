import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarefasComponent } from "./components/tarefas/tarefas.component";
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet ,ClienteComponent, TarefasComponent, NavbarComponent ]
})
export class AppComponent {
  title = 'new-app';
}
