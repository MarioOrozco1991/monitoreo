import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasGobiernoComponent } from './politicas-gobierno.component';

describe('PoliticasGobiernoComponent', () => {
  let component: PoliticasGobiernoComponent;
  let fixture: ComponentFixture<PoliticasGobiernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasGobiernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
