import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosInstitucionalesComponent } from './resultados-institucionales.component';

describe('ResultadosInstitucionalesComponent', () => {
  let component: ResultadosInstitucionalesComponent;
  let fixture: ComponentFixture<ResultadosInstitucionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosInstitucionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
