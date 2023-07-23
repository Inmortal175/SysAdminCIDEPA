import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPropietarioComponent } from './registro-propietario.component';

describe('RegistroPropietarioComponent', () => {
  let component: RegistroPropietarioComponent;
  let fixture: ComponentFixture<RegistroPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
