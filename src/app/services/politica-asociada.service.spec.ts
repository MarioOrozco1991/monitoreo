import { TestBed } from '@angular/core/testing';

import { PoliticaAsociadaService } from './politica-asociada.service';

describe('PoliticaAsociadaService', () => {
  let service: PoliticaAsociadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticaAsociadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
