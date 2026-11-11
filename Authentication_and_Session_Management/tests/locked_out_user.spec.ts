import { test, expect } from '@playwright/test';
import { BASE_URL } from '../resources/commenWeb.ts';
import { LoginPage } from '../resources/page_object/login_valid_user.ts';
import loginData from '../resources/test_data/login_data.json';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})

test('Locked_user_user, Verify the message', async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage.login(
        loginData.lockedOutUser.username,
        loginData.lockedOutUser.password
    )

    await expect(loginpage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});