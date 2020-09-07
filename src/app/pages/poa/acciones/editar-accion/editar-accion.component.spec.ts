import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAccionComponent } from './editar-accion.component';

describe('EditarAccionComponent', () => {
  let component: EditarAccionComponent;
  let fixture: ComponentFixture<EditarAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
