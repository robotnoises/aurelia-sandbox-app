import { Router } from 'aurelia-router';

export class App {

  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Cool Title';
      config.map([
        {
          route: ['', 'welcome'],
          moduleId: './modules/welcome',
          nav: true,
          title: 'Welcome'
        },
        {
          route: ['t/:token'],
          moduleId: './modules/tempPage',
          nav: false
        }
      ]);
    });
  }
}
