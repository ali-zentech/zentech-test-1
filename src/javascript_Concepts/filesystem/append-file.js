import fs from 'fs';

function append(filePath, data) {
        fs.readFile(filePath, 'utf8', (err, fileData) => {
            if (err) return
            try{
                let existingData = [];
                if(!fileData) fileData = [];
                else {
                    existingData = JSON.parse(fileData);
                }
                existingData.push(data);
                    fs.writeFile(filePath, JSON.stringify(existingData, null, 4),(err) => {throw err});
            } catch(err) {
                console.log(err)
            }
        });
    
}
append("file.json",{ name: "John", age: 30 })