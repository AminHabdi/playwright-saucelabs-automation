import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page_object/LoginPage';
import loginData from '../../resources/test_data/login_data.json';
import { BASE_URL } from '../../resources/commenWeb';

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