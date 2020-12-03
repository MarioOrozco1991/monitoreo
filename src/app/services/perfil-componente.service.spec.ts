import { TestBed } from '@angular/core/testing';

import { PerfilComponenteService } from './perfil-componente.service';

describe('PerfilComponenteService', () => {
  let service: PerfilComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
