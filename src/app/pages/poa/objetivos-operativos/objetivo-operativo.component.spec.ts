import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoOperativoComponent } from './objetivo-operativo.component';

describe('ObjetivoOperativoComponent', () => {
  let component: ObjetivoOperativoComponent;
  let fixture: ComponentFixture<ObjetivoOperativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoOperativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoOperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
