import { test, expect } from '@playwright/test';
import { BASE_URL } from '../resources/commenWeb.ts';
import { LoginPage } from '../resources/page_object/login_valid_user.ts';
import loginData from '../resources/test_data/login_data.json';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})

test('Invalid Password, Verify error message', async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage.login(
        loginData.invalidCredentials.username,
        loginData.invalidCredentials.password
    )
    
    await expect(loginpage.errorMessage).toBeVisible();

});