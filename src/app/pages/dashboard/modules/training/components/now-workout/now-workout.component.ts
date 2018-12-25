import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/pages/dashboard/models/workout';
import { WorkoutService } from 'src/app/pages/dashboard/services/workout.service';

@Component({
  selector: 'app-now-workout',
  templateUrl: './now-workout.component.html',
  styleUrls: ['./now-workout.component.css']
})
export class NowWorkoutComponent implements OnInit {

  public workout: Workout;

  constructor(
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.loadStoragedWorkout();
  }

  /**
   * Button start set event handler
   */
  public startSet(): void { }

  /**
   * Loads workout selected from storage service
   */
  private loadStoragedWorkout(): void {
    this.workoutService.getStoreWorkout()
      .subscribe(
        (workout: Workout) => {
          this.workout = workout;
        }
      );
  }

}
