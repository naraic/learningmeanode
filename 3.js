var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
//var s = buffer.toString();

sum = 0;
for (i in buffer) {
    if (String.fromCharCode(buffer[i]) == '\n') {
        sum=sum+1;
    }
}
console.log(sum)
        


