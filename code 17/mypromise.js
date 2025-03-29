import fs from "fs/promises";

let a = await fs.readFile("vinit2.txt");

fs.writeFile("vinit2.txt","tftvfvt t ftftf f uft  e schh")
let b = await fs.appendFile("vinit2.txt","\nfffff vvvv hhhh ii")
console.log(a.toString(),b )

