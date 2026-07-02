const fs = require('fs');  // --require will runs the file   
// -- here fs is a build in function used to interact with files and directories


// checks if the document exits 
console.log(fs.existsSync('./document'))   // it is a synchronous function

// checks if the document does not exits if not then the statement will be executed
if (!fs.existsSync('./document')) {

    fs.mkdir('./documents', (err) => {   // mkdir is used to create a folder (directory)
        if (err) {
            console.log(err.message);
        } else {
            console.log("file Created")
        }


        fs.writeFile('./documents/file.txt', 'Hello bruhhh ahhh', (err) => {   // used to write values to the desired location
            if (err) {
                console.log(err);
            } else {
                console.log('file Written');
            }



            // read a file 

            fs.readFile("./documents/file.txt", "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log("file is read")
                    console.log(data);
                }


                // append to a file

                fs.appendFile("./documents/file.txt", "\nnew 1Values", (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log("value added")
                    }
                });
            })
        })
    })
}
