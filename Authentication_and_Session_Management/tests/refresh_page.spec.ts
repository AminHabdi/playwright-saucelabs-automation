import { test, expect } from '@playwright/test';
import { BASE_URL } from '../resources/commenWeb.ts';
import { LoginPage } from '../resources/page_object/login_valid_user.ts';
import loginData from '../resources/test_data/login_data.json';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})

test('Verfiy /inventory.html , after the reloading of the page', async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    )

    await page.reload();
    
    await expect(page).toHaveURL(/.*inventory.html/);
});