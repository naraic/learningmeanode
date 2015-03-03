function callback (err, data) {
    if(err) throw err; 
    console.log(data.split('\n').length-1);
};

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', callback);
