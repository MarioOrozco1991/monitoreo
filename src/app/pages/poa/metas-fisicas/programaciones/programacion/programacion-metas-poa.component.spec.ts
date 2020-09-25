import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMetasPoaComponent } from './programacion-metas-poa.component';

describe('AccionComponent', () => {
  let component: ProgramacionMetasPoaComponent;
  let fixture: ComponentFixture<ProgramacionMetasPoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionMetasPoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionMetasPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
