import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowWorkoutComponent } from './now-workout.component';

describe('NowWorkoutComponent', () => {
  let component: NowWorkoutComponent;
  let fixture: ComponentFixture<NowWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
