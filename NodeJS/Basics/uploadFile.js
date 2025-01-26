let http = require("http");
const fs = require("fs");

const PORT = 1234;

const server = http.createServer(function(request, response) {
    const url = request.url;
    const method = request.method;
    response.writeHead(200, {'content-type': 'text/html'});
    // response.end("<h1>My first example of NodeJS...</h1>");
    if(url === "/") {
        response.write('<html>');
        response.write("<head><title>My first server</title></head>");
        response.write("<body><h1>File Upload Example</h1>");
        response.write("<form action='/fileUpload' method='POST'>");
        response.write("<input type='text' placeholder='Enter name' name='username'/>");
        response.write("<br>");
        response.write("<input type='file' name='file'/>");
        response.write("<button type='submit'>Submit</button>");
        response.write("</form>");
        response.write("</body></html>");
        response.end();
    }

    if(url === "/message") {
        response.write('<html>');
        response.write("<head><title>My first server</title></head>");
        response.write("<body><h1>This is message page</h1>");
        response.write("</body></html>");
        response.end();
    }

    if(url === "/fileUpload" && method === 'POST') {
        const body = [];
        let parsedBody;
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        request.on('end', () => {
            parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync("user_info.txt", parsedBody);
        });
        response.write('<html>');
        response.write("<head><title>My first server</title></head>");
        response.write("<body><h1>File Upload Example</h1>");
        response.write(`<h2>Welcome ${parsedBody}</h2>`);
        response.write("</body></html>");
        response.end();
        
        
    }
    
    
});

server.listen(PORT, 
    () => console.log(`Server running at ${PORT}`)
);