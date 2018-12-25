import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


import { WorkoutService } from 'src/app/pages/dashboard/services/workout.service';
import { Workout } from 'src/app/pages/dashboard/models/workout';


@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.css']
})
export class MyWorkoutsComponent implements OnInit, OnDestroy {

  public workouts: Workout[];

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadWokouts();
  }

  ngOnDestroy() {
  }


  /**
   * Get the workout selected and set at start event
   */
  public startWorkout(workoutToStart: Workout): void {
    this.workoutService.setStoreWorkout(workoutToStart).subscribe(
      (didStorage) => { if (didStorage) {
          this.router.navigate(['/dashboard/training/workout/now']);
        }
      },
      error => console.log(error)
    );
  }


  /**
   * Load workouts after init
   */
  private loadWokouts(): void {
    this.workoutService.loadWorkouts()
      .subscribe((workoutsFound: Workout[]) => {
        this.workouts = workoutsFound;
      });
  }


}
