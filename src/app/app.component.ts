import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
