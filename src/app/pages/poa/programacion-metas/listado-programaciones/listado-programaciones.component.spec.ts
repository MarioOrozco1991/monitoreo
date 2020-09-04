import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProgramacionesComponent } from './listado-programaciones.component';

describe('ListadoProgramacionesComponent', () => {
  let component: ListadoProgramacionesComponent;
  let fixture: ComponentFixture<ListadoProgramacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoProgramacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProgramacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
