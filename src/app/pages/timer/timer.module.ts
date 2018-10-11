import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { ThemeModule } from '@components/theme/theme.module';

import { TimerComponent } from './timer.component';
import { TimerDisplayComponent } from './components/timer-display/timer-display.component';
import { TimerState } from './state/timer.state';
import { DogDisplayComponent } from './components/dog-display/dog-display.component';
import { TimerCommandsComponent } from './components/timer-commands/timer-commands.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: TimerComponent}]),
    NgxsModule.forFeature([TimerState]),
    ThemeModule
  ],
  declarations: [
    TimerComponent,
    TimerDisplayComponent,
    DogDisplayComponent,
    TimerCommandsComponent,
    ErrorDisplayComponent
  ],
  entryComponents: [
    DogDisplayComponent
  ]
})
export class TimerModule {
}
