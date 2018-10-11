import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDisplayComponent } from './error-display.component';
import { TimerModuleTesting } from '../../timer.module.spec';

describe('ErrorDisplayComponent', () => {
  let component: ErrorDisplayComponent;
  let fixture: ComponentFixture<ErrorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TimerModuleTesting)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
