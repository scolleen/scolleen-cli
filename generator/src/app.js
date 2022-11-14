module.exports = function () {
  const template = `
  export default function app() {
    return (
      <div>hello</div>
    )
  }
  `
  return {
    template,
    name: 'app.js'
  }
}