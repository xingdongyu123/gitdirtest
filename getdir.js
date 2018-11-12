const path = require('path')
const fs = require('fs')

let  readmefile = ''
let allfiles = []
// 获取文件目录下面所有路径
getfilePath(__dirname)
function getfilePath(filePath) {
  console.log("发生范德萨发生大", filePath)
  let catalogfiles = fs.readdirSync(filePath) // 读取目录所有文件
  console.log("所有文件", catalogfiles)
  const excludefilename = ['README.md','.git','getdir.js']
  // 排除
  catalogfiles.forEach(file => {
    if(excludefilename.includes(file)) {
      console.log("fff", file)
      return
    }
    const absolutepath = path.resolve(filePath, file)
    const filestats = fs.statSync(absolutepath)
    console.log("噶速度发的说法都是", absolutepath)
    if(filestats.isDirectory()) {
      return getfilePath(absolutepath)
    } else {
      allfiles.push(absolutepath)
    }
  })
}

console.log("嘎达法规发生地方都是大师傅", allfiles)
// fs.writeFile(path.resolve(__dirname, 'README.md'), readmefile, ()=> {
//   console.log("成功")
// })