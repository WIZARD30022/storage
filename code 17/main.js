const fs = require("fs");

console.log(fs);

fs.writeFileSync("vinit","vrfyfbt ttff yt ty rdgjblihf    srdtfy sr aedtf li   eew duyk1");
fs.writeFile("vinit2.txt","tftvfvt t ftftf f uft  e schh",()=>{
    fs.readFile("vinit2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})
