import { State, Selector, Action, StateContext } from '@ngxs/store';
import { interval } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { TimerModel } from '@models/timer.model';
import { DogService } from '@services/dog.service';
import { DogResponseModel } from '@models/dog-response.model';
import { TimerStatusEnum } from '@enums/timer-status.enum';
import {
  StartAction,
  TickAction,
  StopAction,
  ResetAction,
  LoadDogAction,
  LoadDogFailureAction,
  LoadDogSuccessAction
} from './timer.actions';
import * as moment from 'moment';
import { TimeIntervalEnum } from '@enums/time-interval.enum';

const name = 'Timer';

const defaults: TimerModel = {
  status: TimerStatusEnum.CHOOSE,
  time: TimeIntervalEnum.ZERO,
  ticking: false,
  image: null,
  message: 'Good things happen for those who wait!',
  error: null,
  display: '00:00'
};

@State<TimerModel>({
  name,
  defaults
})
export class TimerState {

  errorMessage = 'Oops, something went wrong trying to get you a dog.';
  audio = new Audio('/assets/audio/dog-bark.wav');

  constructor(protected dogService: DogService) {
  }

  @Selector()
  static status(state: TimerModel): TimerStatusEnum {
    return state.status;
  }

  @Selector()
  static ticking(state: TimerModel): boolean {
    return state.ticking;
  }

  @Selector()
  static display(state: TimerModel): string {
    return state.display;
  }

  @Selector()
  static message(state: TimerModel): string {
    return state.message;
  }

  @Selector()
  static error(state: TimerModel): string {
    return state.error;
  }

  @Selector()
  static image(state: TimerModel): string {
    return state.image;
  }

  @Action(StartAction)
  startAction(ctx: StateContext<TimerModel>, {payload}: StartAction) {
    const state = ctx.getState();
    const time = payload === 0 ? state.time : payload;
    const status = TimerStatusEnum.WAIT;
    const ticking = true;
    const message = this.renderTimerMessage(time);
    const display = moment(time).format('mm:ss');

    ctx.patchState({time, status, display, ticking, message});
    return this.dispatchTickAction(ctx);
  }

  @Action(TickAction)
  tickAction(ctx: StateContext<TimerModel>) {
    const state = ctx.getState();

    if (state.ticking) {
      const time = state.time - TimeIntervalEnum.ONE_SECOND;
      const display = moment(time).format('mm:ss');
      const message = this.renderTimerMessage(time);
      if (time > 0) {
        ctx.patchState({time, display, message});
        return this.dispatchTickAction(ctx);
      } else {
        ctx.patchState({time, display});
        return ctx.dispatch(new StopAction());
      }
    }
  }

  @Action(StopAction)
  stopAction(ctx: StateContext<TimerModel>) {

    const state = ctx.getState();
    const ticking = false;

    if (state.time === 0) {
      return ctx.dispatch(new LoadDogAction());
    }

    return ctx.patchState({ticking});
  }

  @Action(ResetAction)
  resetAction(ctx: StateContext<TimerModel>) {
    const status = TimerStatusEnum.CHOOSE;
    const ticking = false;
    const display = moment(TimeIntervalEnum.ZERO).format('mm:ss');
    return ctx.patchState({status, ticking, display});
  }

  @Action(LoadDogAction)
  loadDogAction(ctx: StateContext<TimerModel>) {
    return this.dogService.getDog()
      .pipe(
        map((data: DogResponseModel) => {
          if (data.status === 'success') {
            ctx.dispatch(new LoadDogSuccessAction(data.message));
          } else {
            ctx.dispatch(new LoadDogFailureAction());
          }
        }),
        catchError(() => ctx.dispatch(new LoadDogFailureAction()))
      );
  }

  @Action(LoadDogSuccessAction)
  loadDogSuccessAction(ctx: StateContext<TimerModel>, {payload}: LoadDogSuccessAction) {
    const status = TimerStatusEnum.DOG;
    ctx.patchState({status});
    const img = new Image();
    img.onload = () => {
      ctx.patchState({image: img.src});
      this.audio.play();
    };
    img.onerror = () => {
      ctx.dispatch(new LoadDogFailureAction());
    };
    img.src = payload;
  }

  @Action(LoadDogFailureAction)
  loadDogFailureAction(ctx: StateContext<TimerModel>) {
    const status = TimerStatusEnum.ERROR;
    ctx.patchState({image: null, status, error: this.errorMessage});
  }

  protected dispatchTickAction(ctx: StateContext<TimerModel>) {
    return interval(TimeIntervalEnum.ONE_SECOND)
      .pipe(
        take(1),
        map(() => ctx.dispatch(new TickAction()))
      );
  }

  protected renderTimerMessage(time: number): string {

    if (time > 50000) {
      return `Good things happen for those who wait!`;
    } else if (time > 40000) {
      return `Keep calm and wait for your dog!`;
    } else if (time > 30000) {
      return `It won't be long now!`;
    } else if (time > 20000) {
      return `Very soon you will get a dog!`;
    } else if (time > 10000) {
      return `it's almost here!`;
    } else {
      return `Very very soon!`;
    }
  }
}
