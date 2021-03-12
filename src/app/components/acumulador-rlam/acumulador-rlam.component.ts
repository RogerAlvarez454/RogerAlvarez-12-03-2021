import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador-rlam',
  templateUrl: './acumulador-rlam.component.html',
  styleUrls: ['./acumulador-rlam.component.css'],
})
export class AcumuladorRlamComponent implements OnInit {
  @Input() resultado: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
