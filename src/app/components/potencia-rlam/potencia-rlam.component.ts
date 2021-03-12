import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-potencia-rlam',
  templateUrl: './potencia-rlam.component.html',
  styleUrls: ['./potencia-rlam.component.css'],
})
export class PotenciaRlamComponent implements OnInit {
  @Input() base_numero: number = 0;
  @Input() exponente_numero: number = 0;

  constructor() {}

  ngOnInit(): void {}

  calcular() {
    console.log(this.base_numero);
    console.log(this.exponente_numero);
  }
}
