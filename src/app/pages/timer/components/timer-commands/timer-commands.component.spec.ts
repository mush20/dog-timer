import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCommandsComponent } from './timer-commands.component';
import { TimerModuleTesting } from '../../timer.module.spec';

describe('TimerCommandsComponent', () => {
  let component: TimerCommandsComponent;
  let fixture: ComponentFixture<TimerCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TimerModuleTesting)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
