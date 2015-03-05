var fs = require('fs');

var path = process.argv[2];
var ext = process.argv[3];

function callback (err, list) {
    if(err) throw err;
    for (i in list) {
        if (list[i].search('.'+ext+'$') > 0 ) {
            console.log(list[i]);
        }
    }
};

fs.readdir(path, callback);
