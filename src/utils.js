const { exec } = require("child_process");

// BAD: command injection vulnerability
function runCommand(userInput) {
  exec(`ls ${userInput}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

module.exports = { runUserCode, add, safeQuery, runCommand };
