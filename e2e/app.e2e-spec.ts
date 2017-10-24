import { NgTableSortPage } from './app.po';

describe('ng-table-sort App', () => {
  let page: NgTableSortPage;

  beforeEach(() => {
    page = new NgTableSortPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
