//const http = require('http');
//const server = http.createServer((req, res) => {
//  if(req.url === '/'){
//    res.write('hello man art');
//    res.end();
//  }
//});
//
//server.listen(3000);
//console.log('server 3000...');
//const API = http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3b1ceba16bf4976a7316ae5db42cf48f;
//
const API ='/api'

fetch(API)
  .then((response => {
    return response.json();
  }))
  .catch(error => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
});
