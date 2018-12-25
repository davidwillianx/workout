import { NgModule } from '@angular/core';
import { SafeBackgroundPipe } from './safe-background/safe-background.pipe';

@NgModule({
  declarations: [
    SafeBackgroundPipe
  ],
  exports: [
    SafeBackgroundPipe
  ]
})
export class PipeModule {
}
