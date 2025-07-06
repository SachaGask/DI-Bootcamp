import fs from 'fs';

console.log("before")

try{
    const data = fs.readFileSync('app.js', 'utf8');
    console.log(data);
}
catch(e){
    console.log(e);
}

console.log("after")

