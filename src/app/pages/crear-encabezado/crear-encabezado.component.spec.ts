import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEncabezadoComponent } from './crear-encabezado.component';

describe('CrearEncabezadoComponent', () => {
  let component: CrearEncabezadoComponent;
  let fixture: ComponentFixture<CrearEncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
