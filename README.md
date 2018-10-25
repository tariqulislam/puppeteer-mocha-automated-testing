
# puppeteer-mocha-automated-testing
![logo image](https://github.com/tariqulislam/puppeteer-mocha-automated-testing/blob/master/logo.png)

Automated the Testing using Puppeteer, Mocha, chai. For example we can use linkidin account and few functionality to automated the testing

## Prequesites for automated testing
 1. Node JS (v.1.8.10)
 2. Puppeteer JS
 3. Mocha
 4. Chai
 5. Mochawesome for Report generation)
 6. express JS (Web server to run generate Report)
 7. opn (open the report of testing automatically to browser)
 6. node-cmd (Run Command Line command)
 
 ## Installation
  1. clone the project `https://github.com/tariqulislam/puppeteer-mocha-automated-testing.git`
  2. go to folder `cd puppeteer-mocha-automated-testing`
  3. run `npm install`
 
 ## Directory Structure

```
|-- puppeteer-mocha-automated-testing
|---- mochawesome-report
|------ assets
|------ mochawsome.html
|------ mochawsome.json
|---- test (Directory for where the test file are contains)
|------ bootstrap.js (Puppeteer Configuration file)
|------ sample.spec.js (Sample Automated Testing file)
|---- package.json
|---- node_modules
|---- server.js (Web server to show generate report)
 ```
 
 ## configure to run sample Automated Test
 
 1. Open the file `test/sample.spec.js`
 2. Add the Linkedin email or user name at line 35 for testing.
 ```javascript
  await linkEmail.type('<sample@email.com>'); // add the email address for linkedin //
 ```
 3. Add the Password at line 38
 ```javascript
 await linkPassword.type(''); // add password for linkedin account
 ```
 4. Then run the predefiend test by `npm test` form command line
