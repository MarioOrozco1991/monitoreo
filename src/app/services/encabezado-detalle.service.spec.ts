import { TestBed } from '@angular/core/testing';

import { EncabezadoDetalleService } from './encabezado-detalle.service';

describe('EncabezadoDetalleService', () => {
  let service: EncabezadoDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncabezadoDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
