import { TestBed } from '@angular/core/testing';

import { CentrosDeCostoService } from './centros-de-costo.service';

describe('CentrosDeCostoService', () => {
  let service: CentrosDeCostoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosDeCostoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
