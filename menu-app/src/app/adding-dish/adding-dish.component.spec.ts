import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDishComponent } from './adding-dish.component';

describe('AddingDishComponent', () => {
  let component: AddingDishComponent;
  let fixture: ComponentFixture<AddingDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
