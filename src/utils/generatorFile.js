const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const generatorFile = async (filePath, projectDir, projectName, _dirName = '') => {
  const fileArr = await fs.readdirSync(filePath)

  if (fileArr && fileArr.length > 0) {
    fileArr.forEach(async element => {
      if (element.split('.').length > 1) {
        const _path = path.join(filePath, element)
        const { template, name: fileName } = require(_path)(projectName);
        fs.writeFile(path.join(projectName, _dirName, fileName), template.trim(), function (error) {
          // error handle
        })
      } else {
        await mkdirp(path.join(projectDir, element));
        // await fs.mkdirSync(path.join(projectDir, element))
        generatorFile(path.join(filePath, element), path.join(projectDir, element), projectName, element)
      }
    })
  }
}

module.exports = generatorFile
