import { TestBed } from '@angular/core/testing';

import { ClasePuestoService } from './clase-puesto.service';

describe('ClasePuestoService', () => {
  let service: ClasePuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasePuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
