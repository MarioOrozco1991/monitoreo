import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoInstitucionalComponent } from './resultado-institucional.component';

describe('ResultadoInstitucionalComponent', () => {
  let component: ResultadoInstitucionalComponent;
  let fixture: ComponentFixture<ResultadoInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
