import { TestBed } from '@angular/core/testing';

import { EjesService } from './ejes.service';

describe('EjesService', () => {
  let service: EjesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
