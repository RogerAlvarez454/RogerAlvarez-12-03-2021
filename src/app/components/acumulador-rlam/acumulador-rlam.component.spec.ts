import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladorRlamComponent } from './acumulador-rlam.component';

describe('AcumuladorRlamComponent', () => {
  let component: AcumuladorRlamComponent;
  let fixture: ComponentFixture<AcumuladorRlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcumuladorRlamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumuladorRlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
