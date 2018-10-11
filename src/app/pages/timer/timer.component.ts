import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { StartAction, StopAction, ResetAction } from './state/timer.actions';
import { TimerState } from './state/timer.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'tm-timer-component',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TimerComponent implements OnInit {

  @HostBinding('class.timer-component')
  cssClass = true;

  @Select(TimerState.status)
  status$: Observable<boolean>;

  @Select(TimerState.ticking)
  ticking$: Observable<boolean>;

  @Select(TimerState.display)
  display$: Observable<string>;

  @Select(TimerState.message)
  message$: Observable<string>;

  @Select(TimerState.error)
  error$: Observable<string>;

  @Select(TimerState.image)
  image$: Observable<string>;

  constructor(protected _store: Store) {
  }

  ngOnInit() {
  }

  startTimer(time: number): void {
    this._store.dispatch(new StartAction(time));
  }

  stopTimer(): void {
    this._store.dispatch(new StopAction());
  }

  resetTimer(): void {
    this._store.dispatch(new ResetAction());
  }
}
