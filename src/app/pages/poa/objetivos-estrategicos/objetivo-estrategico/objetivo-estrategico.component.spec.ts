import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoEstrategicoComponent } from './objetivo-estrategico.component';

describe('ObjetivoEstrategicoComponent', () => {
  let component: ObjetivoEstrategicoComponent;
  let fixture: ComponentFixture<ObjetivoEstrategicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoEstrategicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
