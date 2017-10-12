import { GestionDesContactsPage } from './app.po';

describe('gestion-des-contacts App', () => {
  let page: GestionDesContactsPage;

  beforeEach(() => {
    page = new GestionDesContactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
