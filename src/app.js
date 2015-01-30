import { Router } from 'aurelia-router';

export class App {

  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = '';
      config.map([
        { route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome' },
        { route: ['bets'], moduleId: 'foo', nav: true, title: 'Bets' }
      ]);
    });
  }
}
