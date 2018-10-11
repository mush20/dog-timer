import { TimerModule } from './timer.module';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { TimerDisplayComponent } from './components/timer-display/timer-display.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer.component';
import { ThemeModule } from '@components/theme/theme.module';
import { TimerCommandsComponent } from './components/timer-commands/timer-commands.component';
import { TimerState } from './state/timer.state';
import { DogDisplayComponent } from './components/dog-display/dog-display.component';
import { NgxsModule } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const TimerModuleTesting = {
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: TimerComponent}]),
    NgxsModule.forRoot([TimerState]),
    ThemeModule,
    HttpClientTestingModule
  ],
  declarations: [
    TimerComponent,
    TimerDisplayComponent,
    DogDisplayComponent,
    TimerCommandsComponent,
    ErrorDisplayComponent
  ]
};

describe('TimerModule', () => {
  let timerModule: TimerModule;

  beforeEach(() => {
    timerModule = new TimerModule();
  });

  it('should create an instance', () => {
    expect(timerModule).toBeTruthy();
  });
});
