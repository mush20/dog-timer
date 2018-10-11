import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tm-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ErrorDisplayComponent {

  @Input() error: string;

  @Output() reset: EventEmitter<void> = new EventEmitter();
}
