function greet(res){
    res.write('<html>');
    res.write('<head><title>Welcome!</title></head>');
    res.write(`<body><h1>Hello friend you are welcome to my assignment.</h1>
        <form action="/create-user" method="POST">
            <input type="text" name="user">
            <button type="submit">Submit</button>
        </form>
        </body>`);
    res.write('</html>');
    return res.end();
}

exports.greet = greet;