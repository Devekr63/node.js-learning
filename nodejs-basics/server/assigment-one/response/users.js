function showUsers(res){
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write(`<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>`);
    res.write('</html>');
    return res.end();
}

exports.show = showUsers;