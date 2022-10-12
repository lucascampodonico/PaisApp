import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscar(termino:any){
    console.log(termino)
    
  }

}