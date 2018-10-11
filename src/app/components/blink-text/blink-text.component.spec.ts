import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThemeModule } from '@components/theme/theme.module';

import { BlinkTextComponent } from './blink-text.component';

describe('BlinkTextComponent', () => {
  let component: BlinkTextComponent;
  let fixture: ComponentFixture<BlinkTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ThemeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
