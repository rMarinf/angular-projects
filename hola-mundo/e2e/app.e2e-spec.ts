import { HolaMundoPage } from './app.po';

describe('hola-mundo App', () => {
  let page: HolaMundoPage;

  beforeEach(() => {
    page = new HolaMundoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
