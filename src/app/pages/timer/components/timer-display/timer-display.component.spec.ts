import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDisplayComponent } from './timer-display.component';
import { TimerModuleTesting } from '../../timer.module.spec';

describe('TimerDisplayComponent', () => {
  let component: TimerDisplayComponent;
  let fixture: ComponentFixture<TimerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TimerModuleTesting)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
