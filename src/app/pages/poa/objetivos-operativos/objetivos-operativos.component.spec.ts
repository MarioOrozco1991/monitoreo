import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosOperativosComponent } from './objetivos-operativos.component';

describe('ObjetivosOperativosComponent', () => {
  let component: ObjetivosOperativosComponent;
  let fixture: ComponentFixture<ObjetivosOperativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosOperativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosOperativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
