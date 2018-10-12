import { Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { TimerModuleTesting } from '../timer.module.spec';
import { StartAction, StopAction, ResetAction, LoadDogAction, TickAction } from './timer.actions';
import { TimerModel } from '@models/timer.model';
import * as moment from 'moment';
import { TimerStatusEnum } from '@enums/timer-status.enum';
import { DogService } from '@services/dog.service';
import { of } from 'rxjs';
import { DogResponseModel } from '@models/dog-response.model';
import { TimeIntervalEnum } from '@enums/time-interval.enum';

describe('TimerState', () => {
  let store: Store;
  let dogService: DogService;
  const time = TimeIntervalEnum.TEN_SECONDS;
​
  beforeEach(async(() => {
    TestBed.configureTestingModule(TimerModuleTesting).compileComponents();
    store = TestBed.get(Store);
    dogService = TestBed.get(DogService);
  }));
​
  it('it should start the timer', () => {

    const display = moment(time).format('mm:ss');
    const status = TimerStatusEnum.WAIT;

    store.dispatch(new StartAction(time));
    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.display).toBe(display);
      expect(state.status).toBe(status);
      expect(state.image).toBeNull();
      expect(state.ticking).toBeTruthy();
    });
  });

  it('it should stop the timer', () => {

    store.dispatch(new StartAction(time));
    store.dispatch(new StopAction());

    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.ticking).toBeFalsy();
    });
  });

  it('it should tick the timer', () => {

    const tickTime = 9000;
    const display = '00:09';

    store.dispatch(new StartAction(time));
    store.dispatch(new TickAction());

    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.ticking).toBeTruthy();
      expect(state.display).toBe(display);
      expect(state.time).toBe(tickTime);
    });
  });

  it('it should tick until finish timer', () => {

    const tickTime = 0;
    const display = '00:00';

    store.dispatch(new StartAction(time));
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());
    store.dispatch(new TickAction());

    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.display).toBe(display);
      expect(state.time).toBe(tickTime);
    });
  });

  it('it should reset the timer', () => {

    store.dispatch(new StartAction(time));
    store.dispatch(new ResetAction());

    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.status).toBeFalsy(TimerStatusEnum.CHOOSE);
    });
  });

  it('it should load a dog picture', () => {

    const response: DogResponseModel = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/setter-gordon/n02101006_521.jpg'
    };

    store.dispatch(new StartAction(time));
    store.dispatch(new LoadDogAction());

    spyOn(dogService, 'getDog').and.returnValue(of(response));

    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.image).not.toBeUndefined();
    });
  });

  it('it should not load picture when error', () => {

    const response: DogResponseModel = {
      status: 'error'
    };

    store.dispatch(new StartAction(time));
    store.dispatch(new LoadDogAction());

    spyOn(dogService, 'getDog').and.returnValue(of(response));

    store.selectOnce(state => state.Timer).subscribe((state: TimerModel) => {
      expect(state.image).toBeNull();
    });
  });

});
