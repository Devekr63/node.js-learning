function createUser(req, res){
    const users = [];
    req.on('data', chunk => {
        users.push(chunk);
        console.log(users);
    })

    req.on('end', () => {
        const parsedBody = Buffer.concat(users).toString();
        const message = parsedBody.split('=')[1].split('+');
        console.log(message);
        res.status = 302;
        res.setHeader('Location', '/');
        res.end();
    });
}

exports.createUser = createUser;