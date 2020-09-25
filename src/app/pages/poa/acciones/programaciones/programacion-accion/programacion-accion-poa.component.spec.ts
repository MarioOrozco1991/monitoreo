import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionAccionPoaComponent } from './programacion-accion-poa.component';

describe('ProgramacionAccionPoaComponent', () => {
  let component: ProgramacionAccionPoaComponent;
  let fixture: ComponentFixture<ProgramacionAccionPoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionAccionPoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionAccionPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
