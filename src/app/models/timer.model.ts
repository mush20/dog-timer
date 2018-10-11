import { TimerStatusEnum } from '@enums/timer-status.enum';

export interface TimerModel {
  status: TimerStatusEnum;
  time: number;
  ticking: boolean;
  image: string;
  message: string;
  error: string;
  lastTime?: number;
  display: string;
}
