import { TestBed } from '@angular/core/testing';

import { ObjetivosOperativosService } from './objetivos-operativos.service';

describe('ObjetivosOperativosService', () => {
  let service: ObjetivosOperativosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetivosOperativosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
