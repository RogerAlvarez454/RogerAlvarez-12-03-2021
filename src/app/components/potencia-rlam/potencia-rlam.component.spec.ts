import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotenciaRlamComponent } from './potencia-rlam.component';

describe('PotenciaRlamComponent', () => {
  let component: PotenciaRlamComponent;
  let fixture: ComponentFixture<PotenciaRlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotenciaRlamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotenciaRlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
