import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './components/training/training.component';
import { MyWorkoutsComponent } from './components/my-workouts/my-workouts.component';
import { BrowseWorkoutsComponent } from './components/browse-workouts/browse-workouts.component';
import { DetailsWorkoutComponent } from './components/details-workout/details-workout.component';
import { DashComponent } from './components/dash/dash.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NowWorkoutComponent } from './components/now-workout/now-workout.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: UserDetailsComponent },
      {
        path: 'workout',
        component: TrainingComponent,
        children: [
          { path: 'mine', component: MyWorkoutsComponent },
          { path: 'browse', component: BrowseWorkoutsComponent },
          { path: 'details/:workoutId', component: DetailsWorkoutComponent },
          { path: 'now', component: NowWorkoutComponent }
        ]
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
