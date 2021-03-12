import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRlamComponent } from './base-rlam.component';

describe('BaseRlamComponent', () => {
  let component: BaseRlamComponent;
  let fixture: ComponentFixture<BaseRlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseRlamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
