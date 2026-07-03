const fs = require("fs");

const readStream = fs.createReadStream('./docs/hugefile.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/Copyhuge.txt')
const writeStreamu = fs.createWriteStream('./docs/Copyhuge111.txt')
// readStream.on('data',(buffer)=>{
//     console.log('\nNew Buffer\n')
//     console.log(buffer);
// })

readStream.on('data',(buffer)=>{
    writeStream.write('\nHello bruhhhhh\n');
    writeStream.write(buffer);
    console.log(buffer)
})

// or 

readStream.pipe(writeStreamu);    