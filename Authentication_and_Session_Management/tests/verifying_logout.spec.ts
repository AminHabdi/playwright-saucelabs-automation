import { test, expect } from '@playwright/test';
import { BASE_URL } from '../resources/commenWeb';
import { LoginPage } from '../resources/page_object/LoginPage.ts';
import loginData from '../resources/test_data/login_data.json';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})
test('verify the logout', async({ page }) => {

    const loginpage = new LoginPage(page);
    
    await loginpage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    )

     await expect(page).toHaveURL(/.*inventory.html/);

     await loginpage.logout_user();
     await expect(page).toHaveURL(BASE_URL);
});