var sum =0
for (i in process.argv.slice(2)) {
    sum = sum + Number(process.argv.pop());
}
console.log(sum);
    
