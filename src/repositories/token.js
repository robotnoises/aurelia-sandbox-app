import { HttpClient } from 'aurelia-http-client';

var urls = {
  validate: 'http://localhost:52857/api/token/validate/'
}

export class TokenRepository {

  static inject() { return [HttpClient]; }

  constructor(http) {
    this.http = http;
  }

  validate(token)
  {
    return this.http.post(urls.validate + token).then(response => {
      return response.content.IsValid;
    });
  }
}
