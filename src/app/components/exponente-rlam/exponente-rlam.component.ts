import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exponente-rlam',
  templateUrl: './exponente-rlam.component.html',
  styleUrls: ['./exponente-rlam.component.css'],
})
export class ExponenteRlamComponent implements OnInit {
  @Input() base_numero: number = 0;
  exponente: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
