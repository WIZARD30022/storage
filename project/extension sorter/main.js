import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basepath = "C:\\Users\\VINIT\\Documents\\New folder\\extension sorter"

let files =await fs.readdir(basepath)
console.log(files)

for (const items of files) {
    let ext = items.split(".")[items.split(".").length - 1]
    console.log(ext)
    if((ext != "js") && (ext != "json") && (items.split(".").length > 1)){
        if(fsn.existsSync(path.join(basepath, ext))){
            fs.rename(path.join(basepath, items), path.join(ext, items))
        }
        else{
            fs.mkdir(ext)
        }
    }
    console.log(items)
}