import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionesMetasPoaComponent } from './programaciones-metas-poa.component';

describe('ListadoProgramacionesComponent', () => {
  let component: ProgramacionesMetasPoaComponent;
  let fixture: ComponentFixture<ProgramacionesMetasPoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionesMetasPoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionesMetasPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
