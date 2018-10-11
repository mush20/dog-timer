export class StartAction {
  static readonly type = '[Timer] Start';

  constructor(public payload: number) {
  }
}

export class TickAction {
  static readonly type = '[Timer] Tick';
}

export class StopAction {
  static readonly type = '[Timer] Stop';
}

export class ResetAction {
  static readonly type = '[Timer] Reset';
}

export class LoadDogAction {
  static readonly type = '[Timer] Load Dog';
}

export class LoadDogSuccessAction {
  static readonly type = '[Timer] Load Dog Success';

  constructor(public payload: string) {
  }
}

export class LoadDogFailureAction {
  static readonly type = '[Timer] Load Dog Failure';
}
