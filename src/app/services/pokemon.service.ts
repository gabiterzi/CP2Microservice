import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://demo1290477.mockable.io/pockemon';

  constructor(private http: HttpClient) {}
  
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
