import { JsTd3Page } from './app.po';

describe('js-td3 App', function() {
  let page: JsTd3Page;

  beforeEach(() => {
    page = new JsTd3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
