import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../pages/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private _http: HttpClient) { }

  buscarPais(termino: string): Observable<Country>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this._http.get<Country>(url);
  }
}