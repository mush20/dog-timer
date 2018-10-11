import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tm-dog-display',
  templateUrl: './dog-display.component.html',
  styleUrls: ['./dog-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DogDisplayComponent {

  @HostBinding('class.dog-display-component')
  cssClass = true;

  @Input() image: string;

  @Output() reset: EventEmitter<void> = new EventEmitter();

}
