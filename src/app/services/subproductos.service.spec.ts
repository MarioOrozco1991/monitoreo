import { TestBed } from '@angular/core/testing';

import { SubproductosService } from './subproductos.service';

describe('SubproductosService', () => {
  let service: SubproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
