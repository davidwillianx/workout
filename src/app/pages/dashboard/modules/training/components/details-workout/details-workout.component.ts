import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from 'src/app/pages/dashboard/services/workout.service';
import { Workout } from 'src/app/pages/dashboard/models/workout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-workout',
  templateUrl: './details-workout.component.html',
  styleUrls: ['./details-workout.component.css']
})
export class DetailsWorkoutComponent implements OnInit, OnDestroy {

  private workoutId: number;
  public workout: Workout;

  /**
   * Stores the activated router subscription to unsub inside onDestoy state
   */
  private paramMap$: Subscription;

  constructor(
    private workoutService: WorkoutService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerParamHandler();
    this.loadWorkout();
  }

  ngOnDestroy() {
    this.paramMap$.unsubscribe();
  }

  /**
   * Router obseravle resolver
   */
  private routerParamHandler(): void {
    this.paramMap$ = this.activatedRoute.params
      .subscribe(params => {
        this.workoutId = +params['workoutId'];
      });
  }

  /**
   * Loads server side values and attatch to the public binded variable
   */
  private loadWorkout(): void {
    this.workoutService.loadWorkout(this.workoutId)
      .subscribe((workoutFound: Workout) => {
        this.workout = workoutFound;
      });
  }

}
