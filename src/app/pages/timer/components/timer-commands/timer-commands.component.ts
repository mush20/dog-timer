import { Component, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TimeIntervalEnum } from '@enums/time-interval.enum';

@Component({
  selector: 'tm-timer-commands',
  templateUrl: './timer-commands.component.html',
  styleUrls: ['./timer-commands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TimerCommandsComponent {

  @Output() start: EventEmitter<number> = new EventEmitter();

  start10secs(): void {
    this.start.next(TimeIntervalEnum.TEN_SECONDS);
  }

  start30secs(): void {
    this.start.next(TimeIntervalEnum.THIRTY_SECONDS);
  }

  start60secs(): void {
    this.start.next(TimeIntervalEnum.ONE_MINUTE);
  }

}
