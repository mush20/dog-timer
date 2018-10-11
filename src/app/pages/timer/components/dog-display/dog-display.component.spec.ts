import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDisplayComponent } from './dog-display.component';
import { TimerModuleTesting } from '../../timer.module.spec';

describe('DogDisplayComponent', () => {
  let component: DogDisplayComponent;
  let fixture: ComponentFixture<DogDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TimerModuleTesting)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
