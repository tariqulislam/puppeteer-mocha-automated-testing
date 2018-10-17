const { expect } = require('chai');

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
         
         fvEmail = await page.$(emailInput);
         fvPassword = await page.$(passwordInput);
         fvSubmit = await page.$(submitSelector);

         await fvEmail.click({ clickCount: 3 });
         await fvEmail.type(''); // add the email address for linkedin //

         await fvPassword.click({ clickCount: 3});
         await fvPassword.type(''); // add password for linkedin account

         await fvSubmit.click();
         await page.waitFor(3000);
    });
});