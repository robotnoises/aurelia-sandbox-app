import { HttpClient } from 'aurelia-http-client';

var url = "http://localhost:52857/api/bet/";

export class Foo {
  static inject() { return [HttpClient]; }
  constructor(http) {
    this.http = http;
    this.bets = [];
    this.heading = 'hello world!';
  }

  activate() {
    return this.http.get(url).then(response => {
      if (response.isSuccess) {
        this.bets = response.content.bets;
      } else {
        this.bets = [];
      }
    });
  }
}
