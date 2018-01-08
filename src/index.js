var Prompt = require('prompt-checkbox')

module.exports = {
  async run (opts) {
    var entries = [ 'z', 'a', 'b', 'c' ]
    var prompt = new Prompt({
      name: 'blahblah',
      message: 'blah:',
      radio: true,
      choices: entries,
      default: entries,
    })
    var res = await prompt.run()
    await new Promise((res) => {
      console.log('try ctrl-c now')
      setTimeout(res, 10000);
    })
    console.log('exiting normally')
  }
}

module.exports.run()
