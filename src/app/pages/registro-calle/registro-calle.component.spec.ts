import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCalleComponent } from './registro-calle.component';

describe('RegistroCalleComponent', () => {
  let component: RegistroCalleComponent;
  let fixture: ComponentFixture<RegistroCalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroCalleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroCalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
