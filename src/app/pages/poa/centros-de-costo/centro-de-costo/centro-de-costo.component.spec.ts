import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeCostoComponent } from './centro-de-costo.component';

describe('CentroDeCostoComponent', () => {
  let component: CentroDeCostoComponent;
  let fixture: ComponentFixture<CentroDeCostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroDeCostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroDeCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
