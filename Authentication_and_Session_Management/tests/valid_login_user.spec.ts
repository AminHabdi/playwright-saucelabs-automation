import { test, expect } from '@playwright/test';
import { BASE_URL } from '../resources/commenWeb.ts';
import { LoginPage } from '../resources/page_object/login_valid_user.ts';
import loginData from '../resources/test_data/login_data.json';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})
test('Verfiy header', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');

});

test('Login Valid User', async ({ page }) => {
    const loginpage = new LoginPage(page);
    //await loginpage.gotoLoginPage();

    await loginpage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    )

    if (loginData.standardUser.expected === 'success') {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    } else {
        await expect(loginpage.errorMessage).toBeVisible();
    }


});
