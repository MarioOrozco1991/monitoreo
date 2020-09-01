import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprogramacionMetasComponent } from './reprogramacion-metas.component';

describe('CrearAccionComponent', () => {
  let component: ReprogramacionMetasComponent;
  let fixture: ComponentFixture<ReprogramacionMetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprogramacionMetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprogramacionMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
