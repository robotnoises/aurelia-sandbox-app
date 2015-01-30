var token = {
  validate: function (token) { return 'token/validate/' + token }
}

Object.freeze(token);

export class Urls {

  get baseApi() {
    return "http://localhost:52857/api/";
  }
  
  get token() {
    return token;
  }
}
