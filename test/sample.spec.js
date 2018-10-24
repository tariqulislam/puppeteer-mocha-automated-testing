describe('simple test for fv main console', async  () => {
    let page;
    
    before(async () => {
        page = await browser.newPage();
        await page.goto("http://localhost:2000/");
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async function () {
        await page.close();
    });

    it('should show the error message when login with invalid credentials', async () => {
        
        const emailInput = "input[type=email]";
        const passwordInput = "input[type=password]";
        const submitSelector = "button[type=submit]";
         
         linkEmail = await page.$(emailInput);
         linkPassword = await page.$(passwordInput);
         linkSubmit = await page.$(submitSelector);

         await linkEmail.click({ clickCount: 3 });
         await linkEmail.type(''); // add the email address for linkedin //

         await linkPassword.click({ clickCount: 3});
         await linkPassword.type(''); // add password for linkedin account

         await linkSubmit.click();
         // await page.click(); 
         //await page.waitForNavigation(); 
         await page.waitFor(3000);

         let errorMessage = await page.evaluate(() => {
             let selector = "ul > li";
             let errMsg = document.querySelector(selector).innerText;
             return errMsg;
         });

         const expectedErrorMessage = "You have provided an incorrect email/username and/or password or maybe you are not in our system.";
         expect(expectedErrorMessage).to.eql(errorMessage);

         await page.waitFor(3000);
    });

    it('should successfull login and redirect to home page', async () => {
        const emailInput = "input[type=email]";
        const passwordInput = "input[type=password]";
        const submitSelector = "button[type=submit]";
         
         linkEmail = await page.$(emailInput);
         linkPassword = await page.$(passwordInput);
         linkSubmit = await page.$(submitSelector);

         await linkEmail.click({ clickCount: 3 });
         await linkEmail.type(''); // add the email address for linkedin //

         await linkPassword.click({ clickCount: 3});
         await linkPassword.type(''); // add password for linkedin account

         await linkSubmit.click();
         // await page.click(); 
         await page.waitForNavigation(); 
         await page.waitFor(3000);

    });

    it('should select the sponsor from top nav bar', async () => {
        await page.evaluate(() => {
            document.querySelector('#TopNavigationRow > div > div.navbar-nav > select > option:nth-child(3)').selected = true;
            var element = document.querySelector('#TopNavigationRow > div > div.navbar-nav > select');
            var event = new Event('change', {bubbles: true});
            event.simulated=true;
            element.dispatchEvent(event);
        });

        await page.evaluate(() => {
            const vaultTableSelector = "#root > div > div.container-fluid > div > div.col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main > div > div > div.row > div:nth-child(2) > div > table"
        })
        await page.waitFor(3000);
    });

    it('should show the details page when select vault holder "Details" button from list', async () => {
         const selector = "#root > div > div.container-fluid > div > div.col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main > div > div > div.row > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(10) > button";
         const detailsButton = await page.$(selector);
         await detailsButton.click();
         await page.waitForNavigation();
         await page.waitForResponse();
        // await page.waitFor(3000);
    })
});