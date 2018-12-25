import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './pages/access/access.component';
import { AccessRoutingModule } from './access-routing.module';

@NgModule({
  declarations: [AccessComponent],
  imports: [
    AccessRoutingModule
  ],
  bootstrap: [AccessComponent]
})
export class AccessModule { }
