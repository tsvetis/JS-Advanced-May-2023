class Request {
  constructor(m, u, v, msg) {
    this.method = m;
    this.uri = u;
    this.version = v;
    this.message = msg;
    this.response = undefined;
    this.fulfilled = false;
  }
}

const myData = new Request("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);

/* OUTPUT */
// Request {
//     method: 'GET',
//     uri: 'http://google.com',
//     version: 'HTTP/1.1',
//     message: '',
//     response: undefined,
//     fulfilled: false
//    }
