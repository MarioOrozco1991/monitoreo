import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaPublicaComponent } from './politica-publica.component';

describe('PoliticaPublicaComponent', () => {
  let component: PoliticaPublicaComponent;
  let fixture: ComponentFixture<PoliticaPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
