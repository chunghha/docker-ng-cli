import { DockerNgCliPage } from './app.po';

describe('docker-ng-cli App', () => {
  let page: DockerNgCliPage;

  beforeEach(() => {
    page = new DockerNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
