import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMetasComponent } from './programacion-metas.component';

describe('CrearAccionComponent', () => {
  let component: ProgramacionMetasComponent;
  let fixture: ComponentFixture<ProgramacionMetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionMetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
