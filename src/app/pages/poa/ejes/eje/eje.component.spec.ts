import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeComponent } from './eje.component';

describe('EjeComponent', () => {
  let component: EjeComponent;
  let fixture: ComponentFixture<EjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
