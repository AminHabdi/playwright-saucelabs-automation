import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page_object/LoginPage';
import loginData from '../../resources/test_data/login_data.json';
import { BASE_URL, ERROR_MESSAGE } from '../../resources/commenWeb';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})
test('sessionSecurity', async({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    )
    await loginpage.logout_user();
    await page.goBack();
    await expect(page).toHaveTitle('Swag Labs');
    await expect(loginpage.errorMessage).toHaveText(ERROR_MESSAGE);

})