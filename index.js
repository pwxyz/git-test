const util = require("util");

// const { exec } = require('child_process');

const exec = util.promisify(require("child_process").exec);

// const cmd = `git add . | git commit -m 'init'| git pull origin master | git push origin master`
// const cmd = `git add. | git commit -m 'init' | git pull origin master`

// exec(cmd, (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('stdout: ',stdout, "\n", "stderr: ",stderr);
// });


async function git(cmd){
  let obj =  await exec(cmd);
  // if()
}