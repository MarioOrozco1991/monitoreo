import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionesAccionesPomComponent } from './programaciones-acciones-pom.component';

describe('ProgramacionesAccionesPomComponent', () => {
  let component: ProgramacionesAccionesPomComponent;
  let fixture: ComponentFixture<ProgramacionesAccionesPomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionesAccionesPomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionesAccionesPomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
