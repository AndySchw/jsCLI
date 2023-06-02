

import inquirer from 'inquirer';
import child from 'child_process';
import fs from 'fs'

const text = ('# Hier kannst du mehr erfahrne!')
const file = "./"


inquirer
  .prompt([
    {
      type: 'list',
      name: 'obst',
      message: 'Which is better?',
      choices: ['Kirsche', 'Apfel', 'Birne', 'Melone'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.obst);
    try {
        fs.writeFileSync(file , "README.md", 'utf8');
        console.log('File write operation completed successfully.');
      } catch (error) {
        console.log('An error occurred while writing the file:');
        console.error(error);
      };
  });

