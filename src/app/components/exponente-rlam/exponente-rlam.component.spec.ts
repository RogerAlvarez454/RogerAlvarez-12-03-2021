import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponenteRlamComponent } from './exponente-rlam.component';

describe('ExponenteRlamComponent', () => {
  let component: ExponenteRlamComponent;
  let fixture: ComponentFixture<ExponenteRlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponenteRlamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponenteRlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
