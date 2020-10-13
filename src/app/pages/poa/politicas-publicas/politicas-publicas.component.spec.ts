import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasPublicasComponent } from './politicas-publicas.component';

describe('PoliticasPublicasComponent', () => {
  let component: PoliticasPublicasComponent;
  let fixture: ComponentFixture<PoliticasPublicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasPublicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
