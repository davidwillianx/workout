import { Component, OnInit, ViewChild, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Workout } from 'src/app/pages/dashboard/models/workout';
import { WorkoutService } from 'src/app/pages/dashboard/services/workout.service';

@Component({
  selector: 'app-browse-workouts',
  templateUrl: './browse-workouts.component.html',
  styleUrls: ['./browse-workouts.component.css']
})
export class BrowseWorkoutsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchWorkout')
  public searchWorkout: ElementRef;

  /**
   * Flag that controls "not found workouts message"
   */
  public hasWorkoutsAvailable = false;

  /**
   * Workouts list binded
   */
  public workouts: Workout[];

  /**
   * View handler
   */
  public workoutsSubject: Subject<Workout[]> = new Subject();

  constructor(
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.handleSearchInput();
    this.handleWorkoutsQueryResult();
    this.loadAllWorkoutsAvailable();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.workoutsSubject.unsubscribe();
  }

  private loadAllWorkoutsAvailable(): void {
    this.workoutService.loadWorkouts()
      .subscribe((workouts: Workout[]) => {
        this.workoutsSubject.next(workouts);
      });
  }

  /**
   * Handle list changes
   */
  private handleWorkoutsQueryResult(): void {
    this.workoutsSubject
      .subscribe((workoutsToRenew: Workout[]) => {
        this.workouts = workoutsToRenew;
        this.hasWorkoutsAvailable = this.workouts.length > 0;
      });
  }

  /**
   * Handle search input changes
   */
  private handleSearchInput(): void {
    fromEvent(this.searchWorkout.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(600),
        distinctUntilChanged(),
        switchMap((inputContent: string) => {
          return this.workoutService.searchWorkouts(inputContent);
        })
      )
      .subscribe(
        (workoutsFound: Workout[]) => {
          this.workoutsSubject.next(workoutsFound);
        }
      );

  }

}
