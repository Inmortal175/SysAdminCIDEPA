import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPredioComponent } from './registro-predio.component';

describe('RegistroPredioComponent', () => {
  let component: RegistroPredioComponent;
  let fixture: ComponentFixture<RegistroPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPredioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
