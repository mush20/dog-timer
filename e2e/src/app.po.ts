import { browser, by, element, protractor } from 'protractor';
import { MockService, SimpleResponseMock } from 'protractor-xmlhttprequest-mock';

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(true);
    return browser.get('/');
  }

  getDisplayText() {
    return element(by.id('timer-display')).getText();
  }

  // Buttons
  get10SecondsButton() {
    return element(by.id('start10Seconds'));
  }

  get30SecondsButton() {
    return element(by.id('start30Seconds'));
  }

  get60SecondsButton() {
    return element(by.id('start60Seconds'));
  }

  getTimerResumeButton() {
    return element(by.id('timer-resume-button'));
  }

  getTimerStopButton() {
    return element(by.id('timer-stop-button'));
  }

  getTimerResetButton() {
    return element(by.id('timer-reset-button'));
  }

  getDogSpinnerElement() {
    return element(by.id('timer-dog-spinner'));
  }

  getDogImageElement() {
    return element(by.id('timer-dog-image'));
  }

  getErrorMessageElement() {
    return element(by.id('timer-error-display'));
  }

  waitForDogImageElement() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(this.getDogImageElement()));
  }

  waitForErrorMessageElement() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(this.getErrorMessageElement()));
  }

  mockErrorResponse() {

    const response: SimpleResponseMock = {
      status: 200, data: 'error'
    };
    MockService.setup(browser);
    MockService.addMock('dog', {
      path: 'https://dog.ceo/api/breeds/image/random',
      response
    });
  }

}
