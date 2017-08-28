import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingDishComponent } from './editing-dish.component';

describe('EditingDishComponent', () => {
  let component: EditingDishComponent;
  let fixture: ComponentFixture<EditingDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
