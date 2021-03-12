import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base-rlam',
  templateUrl: './base-rlam.component.html',
  styleUrls: ['./base-rlam.component.css'],
})
export class BaseRlamComponent implements OnInit {
  base: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
