var mymodule = require('./6.module');

var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function (err, data) {
        if (err) throw err;
        data.forEach(function (line) {
            console.log(line);
            })
        });




