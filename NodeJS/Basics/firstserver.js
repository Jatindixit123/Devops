let http = require("http");

const PORT = 1234;

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    // response.end("<h1>My first example of NodeJS...</h1>");
    response.write('<html>');
    response.write("<head><title>My first server</title></head>");
    response.write("<body><h1>My First web page using Node</h1>");
    response.write("</body></html>");
    response.end();
});

server.listen(PORT, 
    () => console.log(`Server running at ${PORT}`)
);