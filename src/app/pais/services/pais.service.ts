import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private _http: HttpClient) { }

  buscarPais(termino: string): Observable<any>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this._http.get(url);
  }
}