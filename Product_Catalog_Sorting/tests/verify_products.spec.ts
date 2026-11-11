import { test, expect } from '@playwright/test';

import { LoginPage } from '../../Authentication_and_Session_Management/resources/page_object/LoginPage';
import loginData from '../../Authentication_and_Session_Management/resources/test_data/login_data.json';
import { BASE_URL } from '../../Authentication_and_Session_Management/resources/commenWeb';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
});

test('verify 6 products', async({ page}) => {
    
    const loginPage = new LoginPage(page);
    
    await loginPage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    )
    
    const inventoryItems = page.locator('[data-test="inventory-item"]');
    await expect(inventoryItems.first()).toBeVisible()
    await expect(inventoryItems).toHaveCount(6);

});


