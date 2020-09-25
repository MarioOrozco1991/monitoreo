import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionesMetasPomComponent } from './programaciones-metas-pom.component';

describe('ProgramacionesMetasPomComponent', () => {
  let component: ProgramacionesMetasPomComponent;
  let fixture: ComponentFixture<ProgramacionesMetasPomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionesMetasPomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionesMetasPomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
