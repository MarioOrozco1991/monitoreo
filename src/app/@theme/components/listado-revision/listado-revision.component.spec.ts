import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRevisionComponent } from './listado-revision.component';

describe('ListadoRevisionComponent', () => {
  let component: ListadoRevisionComponent;
  let fixture: ComponentFixture<ListadoRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
