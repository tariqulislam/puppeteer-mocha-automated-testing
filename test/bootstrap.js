const puppeteer = require('puppeteer');
const { expect } = require('chai');
const open = require('open');

const _ = require('lodash');

const globalVariables = _.pick(global, ['browser', 'expect']);

const opts = {
    headless: false,
    slowMo: 100,
    timeout: 0,
    args: ['--start-maximized', '--window-size=1920,1040'] 
}

before (async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});


after ( () => {
  browser.close();
  open('./mochawesome-report/mochawesome.html');
  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
