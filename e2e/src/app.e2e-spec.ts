import { browser, by, element, logging, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display address overview card', async () => {
    await page.navigateTo();
    const cardTitle = await element(by.css('.addr-overview .mat-card-title')).getText();
    expect(cardTitle).toEqual('Mein Standort');
  });

  it('should display address edit card', async () => {
    await page.navigateTo();
    const until = protractor.ExpectedConditions;
    const button = element(by.css('.bp-add-addr'));
    await browser.wait(until.elementToBeClickable(button), 5000);
    button.click();
    const cardTitleElement = element(by.css('.addr-edit .mat-card-title'));
    await browser.wait(until.presenceOf(cardTitleElement), 5000);
    expect(await cardTitleElement.getText()).toContain('Neuen Standort hinzufügen');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
