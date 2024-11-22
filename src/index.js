import fs from 'fs';
 obj = {name: "ali", hello: "hi"}

 fs.appendFileSync("file.json", [JSON.stringify(obj)]);
