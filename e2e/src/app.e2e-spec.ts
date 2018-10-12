import { AppPage } from './app.po';

describe('Dog Timer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should start timer for 10 seconds', () => {
    page.get10SecondsButton().click();
    expect(page.getTimerDisplayElement().getText()).toEqual('00:10');
  });

  it('should start timer for 30 seconds', () => {

    page.get30SecondsButton().click();
    expect(page.getTimerDisplayElement().getText()).toEqual('00:30');
  });

  it('should start timer for 60 seconds', () => {
    page.get60SecondsButton().click();
    expect(page.getTimerDisplayElement().getText()).toEqual('01:00');
  });

  it('should show correct commands during stop/resume timer', () => {
    page.get60SecondsButton().click();

    expect(page.getTimerStopButton().isEnabled()).toBeTruthy();
    expect(page.getTimerResumeButton().isPresent()).toBeFalsy();
    expect(page.getTimerResetButton().isEnabled()).toBeFalsy();

    page.getTimerStopButton().click();

    expect(page.getTimerStopButton().isPresent()).toBeFalsy();
    expect(page.getTimerResumeButton().isEnabled()).toBeTruthy();
    expect(page.getTimerResetButton().isEnabled()).toBeTruthy();

    page.getTimerResumeButton().click();

    expect(page.getTimerStopButton().isEnabled()).toBeTruthy();
    expect(page.getTimerResumeButton().isPresent()).toBeFalsy();
    expect(page.getTimerResetButton().isEnabled()).toBeFalsy();

  });

  it('it should reset the timer', () => {
    page.get60SecondsButton().click();
    page.getTimerStopButton().click();
    page.getTimerResetButton().click();

    expect(page.getTimerDisplayElement().getText()).toEqual('00:00');
  });

  it('should show a dog image', () => {
    page.get10SecondsButton().click();

    page.waitForDogImageElement();
    expect(page.getDogImageElement().getAttribute('src')).toBeDefined();
    expect(page.getDogSpinnerElement().isPresent()).toBeFalsy();
  });

  it('should show the error message', () => {
    expect(page.getErrorMessageElement().isPresent()).toBeFalsy();
    page.get10SecondsButton().click();
    page.mockErrorResponse();
    page.waitForErrorMessageElement();
    expect(page.getErrorMessageElement().isPresent()).toBeTruthy();
  });
});
