# Raspberry Pi Watering System

This is a typescript project which is meant to be built and deployed to a RPi where it will control relays which in turn control solenoid valves, fans, misters etc.

## Project Structure

This project is written in typescript, but it's meant to be run from the command line using just `node`, as such the the source files (`./src/**/*.ts`) are uploaded to github and the compiled files (`./dist/**/*.js`) are published to npm.

## Installation

To use this package you only need the compiled code from npm so simply run:
```bash
npm install --production -g watering-system
```

## Usage
TODO

## Development

To develop this package you need the source code from GitHub:
```bash
git clone https://github.com/plundell/watering-system.git
#or
gh repo clone plundell/watering-system
cd watering-system
```
If you're forking the repo you should then:
```bash
gh repo create --source=. --push --public
#or
#use browser to login to github and create my-new-repo
git remote add my-foo-fork https://github.com/my-github-user/my-new-repo.git #my-foo-fork is the alias for the remote
git push -u my-foo-fork master #sets default remote and branch and pushes a copy there 

```
Now you'll need the dev dependencies:
```bash
npm install
```
After you've made any changes you want you can either:
 - use it _as is_ without compiling or uploading anywhere:
 ```bash
 npm start
 ```
 - building and publishing to npm
 ```bash
 npm run build
 npm login
 npm publish

 ```
 - pushing to github
 ```bash
 git add .
 git commit -m "clever changes"
 git push
 ```

