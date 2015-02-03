import { Router } from 'aurelia-router';

export class App {

  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {

      config.title = 'Cool Title';

      // Todo: gotta figure-out how to catch bad routes
      // config.mapUnknownRoutes(instruction => {
      //     instruction.config.moduleId: './modules/errors'
      // });

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
