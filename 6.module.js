var fs = require('fs');

module.exports = function filteredLS(path, ext, callback) {
    fs.readdir(path, function (err, data) {
        if(err) return callback(err)

        data = data.filter(function(file) {
                return file.search('.'+ext+'$') > 0
            })
        return callback(null, data)
        })
    }
