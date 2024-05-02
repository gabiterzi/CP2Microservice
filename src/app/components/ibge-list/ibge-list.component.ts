import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IbgeService } from '../../services/ibge.service';

@Component({
  selector: 'app-ibge-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ibge-list.component.html',
  styleUrl: './ibge-list.component.css'
})
export class IbgeListComponent {
  estados: any[] = [];

    constructor(private ibgeService: IbgeService) { }

  ngOnInit(): void {
    this.getEstados();
  }

  getEstados(): void {
    this.ibgeService.getEstados().subscribe(estados => this.estados = estados);
  }
}
