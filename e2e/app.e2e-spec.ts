import { AnjokefinalPage } from './app.po';

describe('anjokefinal App', function() {
  let page: AnjokefinalPage;

  beforeEach(() => {
    page = new AnjokefinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
