import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMetasPomComponent } from './programacion-metas-pom.component';

describe('ProgramacionMetasPomComponent', () => {
  let component: ProgramacionMetasPomComponent;
  let fixture: ComponentFixture<ProgramacionMetasPomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionMetasPomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionMetasPomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
