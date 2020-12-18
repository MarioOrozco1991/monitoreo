import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProgramacionesComponent } from './ver-programaciones.component';

describe('VerProgramacionesComponent', () => {
  let component: VerProgramacionesComponent;
  let fixture: ComponentFixture<VerProgramacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProgramacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProgramacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
