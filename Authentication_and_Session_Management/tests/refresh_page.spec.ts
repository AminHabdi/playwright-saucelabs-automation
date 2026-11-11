import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page_object/LoginPage';
import loginData from '../../resources/test_data/login_data.json';
import { BASE_URL } from '../../resources/commenWeb';

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