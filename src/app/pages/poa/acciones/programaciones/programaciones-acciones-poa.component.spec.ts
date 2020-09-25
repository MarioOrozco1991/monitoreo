import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionesAccionesPoaComponent } from './programaciones-acciones-poa.component';

describe('ProgramacionesAccionesPoaComponent', () => {
  let component: ProgramacionesAccionesPoaComponent;
  let fixture: ComponentFixture<ProgramacionesAccionesPoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionesAccionesPoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionesAccionesPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
