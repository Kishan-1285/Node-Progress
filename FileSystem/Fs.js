const fs = require('fs');  //runs the file


// checks if the document exits 
console.log(fs.existsSync('./document'))   // it is a synchronous function

// checks if the document does not exits if not then the statement will be executed
if( !fs.existsSync('./document')){                                                

fs.mkdir('./documents',(err)=>{   // mkdir -- used to create files or folder
    if(err){
        console.log(err.message);
    }else{
        console.log("file Created")
    }
})
}

fs.writeFile('./documents/file.txt','Hello bruhhh',(err)=>{   // used to write values to the desired location
     if(err){
        console.log(err.message);
    }else{
        console.log('file Written');
    }
});
