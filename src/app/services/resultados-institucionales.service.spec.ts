import { TestBed } from '@angular/core/testing';

import { ResultadosInstitucionalesService } from './resultados-institucionales.service';

describe('ResultadosInstitucionalesService', () => {
  let service: ResultadosInstitucionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosInstitucionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
