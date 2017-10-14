var http = require('http');

var nicePort = 7000;
var nastyPort = 7500;

function handleNiceRequest(request, response){
    response.end("You're actually quite good at this.");
}

function handleNastyRequest(request, response){
    response.end("Man, you suck at this.");
}

var niceServer = http.createServer(handleNiceRequest);

var nastyServer = http.createServer(handleNastyRequest);

niceServer.listen(nicePort, function(){
    console.log("Nice Server is listening...");
});

nastyServer.listen(nastyPort, function(){
    console.log("Nasty Server is listening...ass...");
});