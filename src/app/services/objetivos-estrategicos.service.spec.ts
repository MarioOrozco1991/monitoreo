import { TestBed } from '@angular/core/testing';

import { ObjetivosEstrategicosService } from './objetivos-estrategicos.service';

describe('ObjetivosEstrategicosService', () => {
  let service: ObjetivosEstrategicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetivosEstrategicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
