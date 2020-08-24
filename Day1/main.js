var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    // main.js가 위치하는 디렉토리 출력됨.
    // /index.html이 전달됨.
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));
    //response.end('egoing : '+url);

});
app.listen(3000);
