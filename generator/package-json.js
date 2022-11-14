module.exports = function (name) {
  const template = `
    {
      "name": "${name}",
      "version": "1.1.1",
      "description": "",
      "main": "index.js",
      "scripts": {},
      "devDependencies": {
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "vue": "^2.6.10"
      }
    }
  `;
  return {
    template,
    name: "package.json"
  };
};