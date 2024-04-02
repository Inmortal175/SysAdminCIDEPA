import { TestBed } from '@angular/core/testing';

import { DeudasAllService } from './deudas-all.service';

describe('DeudasAllService', () => {
  let service: DeudasAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeudasAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
