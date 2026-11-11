import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page_object/LoginPage';
import loginData from '../../resources/test_data/login_data.json';
import { BASE_URL } from '../../resources/commenWeb';

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