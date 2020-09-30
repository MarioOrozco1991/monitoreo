import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosDeCostoComponent } from './centros-de-costo.component';

describe('CentrosDeCostoComponent', () => {
  let component: CentrosDeCostoComponent;
  let fixture: ComponentFixture<CentrosDeCostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosDeCostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosDeCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
