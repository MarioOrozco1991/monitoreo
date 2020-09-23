import { TestBed } from '@angular/core/testing';

import { ReprogramacionesService } from './reprogramaciones.service';

describe('ReprogramacionesService', () => {
  let service: ReprogramacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReprogramacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
