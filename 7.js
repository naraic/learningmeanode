var http = require('http')

function handleResp(data) {
    //console.log('STATUS ' + data.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(data.headers));
    data.setEncoding('utf8');
    data.on('data', console.log);
    data.on('error', console.error);
    }

http.get(process.argv[2], handleResp)
