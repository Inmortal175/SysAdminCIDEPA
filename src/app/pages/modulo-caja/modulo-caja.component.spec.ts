import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCajaComponent } from './modulo-caja.component';

describe('ModuloCajaComponent', () => {
    let component: ModuloCajaComponent;
    let fixture: ComponentFixture<ModuloCajaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModuloCajaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModuloCajaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
