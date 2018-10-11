import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';

import { ThemeComponent } from './theme.component';
import { BlinkTextComponent } from '@components/blink-text/blink-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  declarations: [
    ThemeComponent,
    BlinkTextComponent
  ],
  exports: [
    ThemeComponent,
    BlinkTextComponent,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class ThemeModule {
}
