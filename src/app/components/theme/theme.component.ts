import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'tm-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ThemeComponent {

  @HostBinding('class.theme-component')
  cssClass = true;

}
