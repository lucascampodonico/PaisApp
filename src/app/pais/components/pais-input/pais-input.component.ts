import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(500),
    tap(console.log))
    .subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar(termino: string) {
    this.onEnter.emit(termino);
  }
  teclaPresionada(event: any) {
    this.debouncer.next(event.target.value);
  }
}
