import { TestBed } from '@angular/core/testing';

import { SelectPredioService } from './select-predio.service';

describe('SelectPredioService', () => {
  let service: SelectPredioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectPredioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
