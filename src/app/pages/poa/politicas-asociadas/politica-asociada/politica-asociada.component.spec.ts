import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaAsociadaComponent } from './politica-asociada.component';

describe('PoliticaAsociadaComponent', () => {
  let component: PoliticaAsociadaComponent;
  let fixture: ComponentFixture<PoliticaAsociadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaAsociadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaAsociadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
