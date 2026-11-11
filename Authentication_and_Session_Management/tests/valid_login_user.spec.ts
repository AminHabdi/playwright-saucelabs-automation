import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page_object/LoginPage';
import loginData from '../../resources/test_data/login_data.json';
import { BASE_URL } from '../../resources/commenWeb';

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
