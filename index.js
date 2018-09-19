const { exec } = require('child_process');

const cmd = `git add . | git commit -m 'init' | git push origin master`

exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('stdout: ',stdout, "\n", "stderr: ",stderr);
});