import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-potencia-rlam',
  templateUrl: './potencia-rlam.component.html',
  styleUrls: ['./potencia-rlam.component.css'],
})
export class PotenciaRlamComponent implements OnInit {
  @Input() base_numero: number = 0;
  @Input() exponente_numero: number = 0;

  potencia: number = 0;
  constructor() {}

  ngOnInit(): void {}

  calcular() {
    this.potencia = this.potencia_RALM(
      Number(this.base_numero),
      Number(this.exponente_numero)
    );
  }

  multiplicar_RLAM(r: number, b: number) {
    let suma: number = 0;
    let i: number = 0;
    while (i < r) {
      suma += b;
      i++;
    }

    return suma;
  }

  potencia_RALM(base: number, exponente: number) {
    if (exponente === 0) {
      return 1;
    }

    let acumulador = 1;
    let i = 0;
    while (i < exponente) {
      acumulador = this.multiplicar_RLAM(acumulador, base);
      i++;
    }
    return acumulador;
  }
}
