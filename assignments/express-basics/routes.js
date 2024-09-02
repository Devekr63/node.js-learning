const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Send Message</title></head>')
        res.write(`
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>`)
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];

        //storing the stream of data into a array/ Parssing request body
        req.on('data', chunk => {
            // console.log(chunk);
            body.push(chunk);
            // console.log(body)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(responseBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.text',message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first page</title></head>');
    res.write('<body><h1>Hello from the node.js server.</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     reqHandler: requestHandler,
//     someMessage: "Hello",
// }

exports.handler = requestHandler;