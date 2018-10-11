import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'tm-blink-text',
  templateUrl: './blink-text.component.html',
  styleUrls: ['./blink-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('blinkAnimator', [
      state('true', style({opacity: 1})),
      state('false', style({opacity: 0})),
      transition('* <=> *', animate('.5s'))
    ])
  ]
})
export class BlinkTextComponent implements OnInit {

  blinkAnimator = true;

  ngOnInit() {
    this.toggle();
  }

  toggle(): void {
    this.blinkAnimator = !this.blinkAnimator;
  }

  doneEvent(): void {
    this.toggle();
  }
}
