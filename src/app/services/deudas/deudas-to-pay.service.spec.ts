import { TestBed } from '@angular/core/testing';

import { DeudasToPayService } from './deudas-to-pay.service';

describe('DeudasToPayService', () => {
    let service: DeudasToPayService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DeudasToPayService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
