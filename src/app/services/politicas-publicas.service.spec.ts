import { TestBed } from '@angular/core/testing';

import { PoliticasPublicasService } from './politicas-publicas.service';

describe('PoliticaPublicasService', () => {
  let service: PoliticasPublicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticasPublicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
