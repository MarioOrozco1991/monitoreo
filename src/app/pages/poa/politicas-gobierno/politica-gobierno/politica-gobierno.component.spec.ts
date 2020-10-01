import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaGobiernoComponent } from './politica-gobierno.component';

describe('PoliticaGobiernoComponent', () => {
  let component: PoliticaGobiernoComponent;
  let fixture: ComponentFixture<PoliticaGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
