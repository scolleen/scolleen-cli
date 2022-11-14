const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");
const generatorFile = require('./generatorFile');

module.exports = async (projectName) => {
  // download template and rename project
  const projectDir = path.join(process.cwd(), projectName);
  await mkdirp(projectDir);
  console.log(projectDir, '---projectDir')
  // generate files
  generatorFile(path.join(__dirname, '../../generator'), projectDir, projectName)


  // const fileArr = await fs.readdirSync(path.join(__dirname, '../../generator')) 
  // if (fileArr && fileArr.length >0) {
  //   fileArr.forEach(file => {
  //     if(file.split('.').length > 1) {
  //       const { template, dir, name: fileName } = require(path.resolve(__dirname, '../../generator', file))(projectName);
  //       fs.writeFile(path.join(projectDir, dir, fileName), template.trim(), function (error) {
  //         console.log(error, file, '--file')
  //       })
  //     } else {
  //       fs.mkdirSync(path.join(projectDir, file))
  //     }
  //   })
  // }
  // console.log(fileArr)




  // const { template, dir, name: fileName } = require("../../generator/index-html")(projectName);
  // fs.writeFile(path.join(projectDir, dir, fileName), template.trim(), function (error) {
  //   console.log(error, '--file')
  // })
};

/**
 * ⚠️注意
 * 如果直接使用 mkdirp(path.join(process.cwd(), projectName), function (error) { do something}) 可能会报错，提示UnhandledPromiseRejectionWarning: TypeError: invalid options argument
 * 因为版本的问题，不再支持 callback 的形式，需要更换为 promise 的形式，即使用 .then 或者 await 形式
 */