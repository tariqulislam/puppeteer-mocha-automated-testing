const puppeteer = require('puppeteer');
const { expect } = require('chai');
const opn = require('opn');
const cmd = require('node-cmd');

const _ = require('lodash');

const globalVariables = _.pick(global, ['browser', 'expect']);

const opts = {
    headless: false,
    slowMo: 100,
    timeout: 0,
    args: ['--start-maximized', '--window-size=1366,786'] 
}

before (async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});


after ( () => {
  browser.close();
  setTimeout( () => { cmd.run('node server.js');}, 5000)
  setTimeout(() => {opn('http://localhost:9988');}, 2000);
 // open('./mochawesome-report/mochawesome.html');
  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
