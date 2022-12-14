import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) {}

  ngOnInit() {}

  buscar(termino: string) {
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (e) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias( termino:string){
    this.hayError = false;
    //TODO: crear sugerencias

  }
}
