const program = require('commander');
const { version } = require('../package.json');
const { path } = require('fs')

const actionsMap = {
  create: {
    description: 'create a new project',
    alias: 'cr',
    examples: [
      'my-cli create <template-name>'
    ]
  },
  config: {
    description: 'config info',
    alias: 'cfg',
    examples: [
      'my-cli config get <k>',
      'my-cli config set <k> <v>',
    ]
  },
  '*': {
    description: 'command not found',
  },
}

// 循环创建命令
Object.keys(actionsMap).forEach((item) => {
  program
    .command(item) // 命令的名称
    .description(actionsMap[item].description) // 命令的描述
    .action(() => { // 动作
      console.log(item,'--action');
      if (item === 'create') {
        const createCommand = require('./utils/create')
        createCommand(process.argv[3])
      }
    });
});

program.on('--help', () => {
  console.log('Examples');
  Object.keys(actionsMap).forEach((action) => {
    (actionsMap[action].examples || []).forEach((example) => {
      console.log(`${example}`, 'example');
    });
  });
});

program.version(version, "-v, --version")
  .parse(process.argv);
