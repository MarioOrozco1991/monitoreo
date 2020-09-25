import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionAccionPomComponent } from './programacion-accion-pom.component';

describe('ProgramacionAccionPomComponent', () => {
  let component: ProgramacionAccionPomComponent;
  let fixture: ComponentFixture<ProgramacionAccionPomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionAccionPomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionAccionPomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
