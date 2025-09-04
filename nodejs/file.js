const fs = require("fs");

/*
1. File Operations
- Read and write files done
- Create and delete files done
- Append to files done
- Rename and move files
- Change file permissions
*/
/*
___________________________readFile;
//readFile can read file asynchronously...

fs.readFile("../test.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file :", err);
    return;
    }
    console.log("File conternt : ",data)
    });
    //readFileSync it is syncronuse way that is blocked call stack so don't recommended
    const data= fs.readFileSync("../test.txt","utf8")
    console.log(data)
    
    ___________________________writeFile or create file;
    fs.writeFile("test2.txt", "testing write file", "utf8", (err) => {
      console.log("write file");
      });
      ___________________________unlink for delete file;
      fs.unlink("./test2.txt",(err) => { console.log(err) })
      ___________________________appendFile for over write file;
      fs.appendFile("./text.txt","\nhello bro",(err) => { console.error(err) })
      ___________________________rename for rename file;
      fs.rename("./text.txt","./text2.txt",(err) => { console.log(err) })
      */
     
/*
2. Directory Operations
- Create and remove directories
- List directory contents
- Watch for file changes
- Get file/directory stats
- Check file existence
*/
/*
3. Advanced Features
- File streams
- File descriptors
- Symbolic links
- File watching
- Working with file permissions
*/
