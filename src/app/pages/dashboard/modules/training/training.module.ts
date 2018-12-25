import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './components/training/training.component';
import { TrainingRoutingModule } from './training-routing.module';
import {
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MyWorkoutsComponent } from './components/my-workouts/my-workouts.component';
import { BrowseWorkoutsComponent } from './components/browse-workouts/browse-workouts.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { DetailsWorkoutComponent } from './components/details-workout/details-workout.component';
import { DashComponent } from './components/dash/dash.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NowWorkoutComponent } from './components/now-workout/now-workout.component';

@NgModule({
  declarations: [
    TrainingComponent,
    MyWorkoutsComponent,
    BrowseWorkoutsComponent,
    DetailsWorkoutComponent,
    DashComponent,
    UserDetailsComponent,
    NowWorkoutComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,

    PipeModule,

    TrainingRoutingModule
  ]
})
export class TrainingModule { }
