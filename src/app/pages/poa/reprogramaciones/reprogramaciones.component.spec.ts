import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprogramacionesComponent } from './reprogramaciones.component';

describe('ReprogramacionesComponent', () => {
  let component: ReprogramacionesComponent;
  let fixture: ComponentFixture<ReprogramacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprogramacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprogramacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
