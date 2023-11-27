const { execSync } = require('child_process');
const path = require('path');

function installPackage(folder) {
  const fullPath = path.join(__dirname, folder);
  console.log(`Installing dependencies in ${folder}...`);
  console.log(`Wait... 😎`);
  execSync(`cd ${fullPath} && npm install`, { stdio: 'inherit' });
}

installPackage('backend');
installPackage('frontend');
console.log("\nYou are done\nNow you can open a new terminal and send this command: 'cd ./backend'\nAnd then run: 'npm run start'")