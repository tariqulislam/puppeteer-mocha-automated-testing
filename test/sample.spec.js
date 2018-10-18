const { expect } = require('chai');
const open = require('open');

describe('simple test for fv main console', async  () => {
    let page;
    
    before(async () => {
        page = await browser.newPage();
        await page.goto("https://www.linkedin.com/");
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async function () {
        await page.close();
    });

    // it('show have message to span', async () => {
    //     const SPAN_SELECTOR = "span";
    //     let messaging;
    //     await page.waitFor(SPAN_SELECTOR);
    //     messaging = await page.$eval(SPAN_SELECTOR, messaging => messaging.innerText);
    //     expect(messaging).to.eql('Access your sdfsdfsdf here');
    // });

    it('should login to home page', async () => {
        const emailInput = "#login-email";
        const passwordInput = "#login-password";
        const submitSelector = "#login-submit";
         
         linkEmail = await page.$(emailInput);
         linkPassword = await page.$(passwordInput);
         linkSubmit = await page.$(submitSelector);

         await linkEmail.click({ clickCount: 3 });
         await linkEmail.type(''); // add the email address for linkedin //

         await linkPassword.click({ clickCount: 3});
         await linkPassword.type(''); // add password for linkedin account

         await linkSubmit.click();
         await page.waitFor(3000);
    });
});