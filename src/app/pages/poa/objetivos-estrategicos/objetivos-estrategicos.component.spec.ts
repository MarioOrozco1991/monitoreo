import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosEstrategicosComponent } from './objetivos-estrategicos.component';

describe('ObjetivosEstrategicosComponent', () => {
  let component: ObjetivosEstrategicosComponent;
  let fixture: ComponentFixture<ObjetivosEstrategicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosEstrategicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosEstrategicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
