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


// async function git(cmd){
//   let obj =  await exec(cmd);
//   // if()
// }git pull --allow-unrelated-histories  

const message = process.argv[2] || "add some change"
const branch = process.argv[3] || "master"

exec(`git add .`)
.then(res => {
  console.log(`git add complte, pre commit..`)
  return exec(`git commit -m ${message}`)
} )
.then(res => {
  console.log(`git commit complte, pre pull..`)
  return exec(`git pull origin ${branch} --allow-unrelated-histories`)
} )
.then(res => {
  console.log(`git pull complte, pre push..`)
  return exec(`git push origin ${branch}`)
} )
.then(res => {
  console.log(`compelte \n`, res)
} )
.catch(err => {
  console.error(`console.err`,err)
})