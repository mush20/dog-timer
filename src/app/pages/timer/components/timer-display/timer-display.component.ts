import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tm-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TimerDisplayComponent {

  @HostBinding('class.timer-display-component')
  cssClass = true;

  @Input() ticking: boolean;
  @Input() display: string;
  @Input() message: string;

  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() stop: EventEmitter<void> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();

}
