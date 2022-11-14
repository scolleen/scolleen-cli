module.exports = function () {
  const template = `
  export default function test() {
    return (
      <div>test page</div>
    )
  }
  `
  return {
    template,
    name: 'test.js'
  }
}