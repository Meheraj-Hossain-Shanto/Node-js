//import file : const variable name =require('./filename'); and another file into  module.exports=variable name
console.log("hello wld")
console.log(process.argv)
// const received = require('./sent');
const received = require('./Export-details');
console.log(received.getName());
console.log(received.getAge());

const fs = require('fs');
fs.writeFile('output.txt', `Name: ${received.getName()} \nAge: ${received.getAge()}`, (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);    
});

const os = require('os');
console.log('Operating System Info:');
console.log(`Type: ${os.type()}`);
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());

console.log(__dirname);
console.log(__filename);

