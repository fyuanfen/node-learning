/**
 * Created by zyy on 2017/1/23.
 */
var http = require("http");
var url = require("url");

function start(route, handler) {
    function onRequest(request, response) {
        // var postData = " "; 处理文本区域内容
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        // request.setEncoding("utf8");
        //
        // request.addListener("data", function(postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '" + postDataChunk + "'.");
        // });
        //
        // request.addListener("end", function() {
        //     route(handler, pathname, response, postData);
        // });
        route(handler, pathname, response, request);

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
