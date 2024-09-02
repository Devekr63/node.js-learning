const greeting = require('./response/greeting');
const users = require('./response/users');
const create_user = require('./request/user-data');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        greeting.greet(res);
    }
    if(url === '/users'){
        users.show(res);
    }
    if(url === '/create-user' && method == 'POST'){
        create_user.createUser(req, res);    
    }
}

exports.requestHandler = requestHandler;