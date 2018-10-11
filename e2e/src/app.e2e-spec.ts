import { AppPage } from './app.po';
import { MockService } from 'protractor-xmlhttprequest-mock';
import { browser } from 'protractor';

describe('Dog Timer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should start timer for 10 seconds', () => {
    expect(page.getDisplayText()).toEqual('00:00');
    page.get10SecondsButton().click();
    expect(page.getDisplayText()).toEqual('00:10');
  });

  it('should start timer for 30 seconds', () => {
    expect(page.getDisplayText()).toEqual('00:00');
    page.get30SecondsButton().click();
    expect(page.getDisplayText()).toEqual('00:30');
  });

  it('should start timer for 60 seconds', () => {
    expect(page.getDisplayText()).toEqual('00:00');
    page.get60SecondsButton().click();
    expect(page.getDisplayText()).toEqual('01:00');
  });

  it('should show correct commands during stop/resume timer', () => {
    page.get60SecondsButton().click();

    expect(page.getTimerStopButton().isEnabled()).toBeTruthy();
    expect(page.getTimerResumeButton().isPresent()).toBeFalsy();
    expect(page.getTimerResetButton().isDisplayed()).toBeTruthy();

    page.getTimerStopButton().click();

    expect(page.getTimerStopButton().isPresent()).toBeFalsy();
    expect(page.getTimerResumeButton().isEnabled()).toBeTruthy();
    expect(page.getTimerResetButton().isEnabled()).toBeTruthy();

    page.getTimerResumeButton().click();

    expect(page.getTimerStopButton().isEnabled()).toBeTruthy();
    expect(page.getTimerResumeButton().isPresent()).toBeFalsy();
    expect(page.getTimerResetButton().isDisplayed()).toBeTruthy();

  });

  it('it should reset the timer', () => {
    page.get60SecondsButton().click();
    page.getTimerStopButton().click();
    page.getTimerResetButton().click();

    expect(page.getDisplayText()).toEqual('00:00');
  });

  it('should show a dog image', () => {
    page.get10SecondsButton().click();

    page.waitForDogImageElement();
    expect(page.getDogImageElement().getAttribute('src')).toBeDefined();
    expect(page.getDogSpinnerElement().isPresent()).toBeFalsy();
  });

  fit('should show the error message', () => {
    expect(page.getErrorMessageElement().isPresent()).toBeFalsy();
    page.get10SecondsButton().click();
    page.mockErrorResponse();
    page.waitForErrorMessageElement();
    expect(page.getErrorMessageElement().isPresent()).toBeTruthy();
  });
});
