let http = require("http");
const fs = require("fs");
const path = require("path");

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
        response.write("<form action='/fileUpload' method='POST' enctype='multipart/form-data'>");
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
        const boundary = request.headers['content-type'].split(";")[1].split("=")[1]

        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
            // console.log(body);
        });

        // console.log(boundary);

        request.on("end", () => {
            // console.log(boundary);
            const parts = body.split(`--${boundary}`);
            const fileParts = parts.find((part) => part.includes('Content-Disposition: form-data; name="file"'));

            // Extract file content
            // console.log(fileParts);
            const fileInfo = fileParts.split("\r\n");
            const fileName = fileInfo[1];
            const fileContentIndex = fileInfo.findIndex((line) => line ==='') + 1;
            const fileContent = fileInfo.slice(fileContentIndex).join("\r\n").trim();
            // console.log(fileContent);
            const saveData = path.join(__dirname, 'uploads', 'uploaded_data.txt');
            fs.writeFileSync(saveData, fileContent, 'binary', (err) => {
                if(err) {
                    console.log("Error while writing file...");
                    response.writeHead(500, {'content-type':'text/plain'});
                    return response.end("Failed to upload..");
                }
                response.writeHead(200, {'content-type':'text/plain'});
                response.end("File Uploaded Successfully...");
            })
        })

        // request.on("end", () => {
        //     try {
        //         const parsedBody = Buffer.concat(body).toString();
        //         const data = parsedBody.split("=")[1];
        //         fs.writeFileSync("uploaded_data.txt", data);
        //     } catch(err){
        //         console.error("Cannot write file, getting error",err.message);
        //     }
            
        // })

        // response.write('<html>');
        // response.write("<head><title>My first server</title></head>");
        // response.write("<body><h1>File Upload Example</h1>");
        // response.write(`<h2>Welcome</h2>`);
        // response.write("</body></html>");
        // response.end();
        
        
    }
    
    
});

server.listen(PORT, 
    () => console.log(`Server running at ${PORT}`)
);