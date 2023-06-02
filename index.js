import inquirer from 'inquirer';
import child from 'child_process';
import fs from 'fs';
import chalk from 'chalk';

const text = '# Hier kannst du mehr erfahren!';
const file = './';

inquirer
  .prompt([
    {
      type: 'list',
      name: 'anweisung',
      message: 'Was möchtest du tun?',
      choices: ['Neue Git Repo', 'Git Repro + README.md', 'Git Repro + README.md + npm init'],
    },
  ])
  .then(answers => {
    console.info(chalk.bgGreen('Antwort:', answers.anweisung));

    if (answers.anweisung == 'Neue Git Repo') {
      child.exec('git init', (error, stdout, stderr) => {
        if (error) {
          console.error(chalk.red(`Fehler: ${error.message}`));
          return;
        }

        if (stderr) {
          console.error(chalk.red(`stderr: ${stderr}`));
          return;
        }

        console.log(`stdout:\n${stdout}`);
      });
    } else if (answers.anweisung == 'Git Repro + README.md') {
      child.exec('git init', (error, stdout, stderr) => {
        if (error) {
          console.error(chalk.red(`Fehler: ${error.message}`));
          return;
        }

        if (stderr) {
          console.error(chalk.red(`stderr: ${stderr}`));
          return;
        }

        fs.writeFile(file + 'README.md', text, (error) => {
          if (error) {
            console.error(chalk.red(`Fehler beim Schreiben der Datei: ${error.message}`));
            return;
          }

          console.log(chalk.green('README.md wurde erstellt.'));
        });
      });
    } else if (answers.anweisung == 'Git Repro + README.md + npm init') {
      child.exec('git init', (error, stdout, stderr) => {
        if (error) {
          console.error(chalk.red(`Fehler: ${error.message}`));
          return;
        }

        if (stderr) {
          console.error(chalk.red(`stderr: ${stderr}`));
          return;
        }

        fs.writeFile(file + 'README.md', text, (error) => {
          if (error) {
            console.error(chalk.red(`Fehler beim Schreiben der Datei: ${error.message}`));
            return;
          }

          console.log(chalk.green('README.md wurde erstellt.'));

          child.exec('npm init -y', (error, stdout, stderr) => {
            if (error) {
              console.error(chalk.red(`Fehler: ${error.message}`));
              return;
            }

            if (stderr) {
              console.error(chalk.red(`stderr: ${stderr}`));
              return;
            }

            console.log(chalk.red(`stdout:\n${stdout}`));
          });
        });
      });
    }
  });
