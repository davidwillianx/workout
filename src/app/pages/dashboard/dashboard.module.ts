import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
  declarations: [
    NavBarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,

    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
