import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWorkoutComponent } from './details-workout.component';

describe('DetailsWorkoutComponent', () => {
  let component: DetailsWorkoutComponent;
  let fixture: ComponentFixture<DetailsWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
