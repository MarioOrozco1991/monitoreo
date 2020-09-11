import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionEjesComponent } from './definicion-ejes.component';

describe('DefinicionEjesComponent', () => {
  let component: DefinicionEjesComponent;
  let fixture: ComponentFixture<DefinicionEjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicionEjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionEjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
