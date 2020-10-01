import { TestBed } from '@angular/core/testing';

import { PoliticasGobiernoService } from './politicas-gobierno.service';

describe('PoliticasGobiernoService', () => {
  let service: PoliticasGobiernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticasGobiernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
