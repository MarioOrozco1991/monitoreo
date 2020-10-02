import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasAsociadasComponent } from './politicas-asociadas.component';

describe('PoliticasAsociadasComponent', () => {
  let component: PoliticasAsociadasComponent;
  let fixture: ComponentFixture<PoliticasAsociadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasAsociadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasAsociadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
