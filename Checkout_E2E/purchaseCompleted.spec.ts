import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_object/LoginPage';
import { Inventory } from '../page_object/InventoryPage';
import loginData from '../resources/test_data/login_data.json';
import { BASE_URL, ERROR_MESSAGE } from '../resources/commenWeb';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);

    const loginpage = new LoginPage(page);

    await loginpage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    )
});
test('Complete Order Checkout', async({ page }) => {
    const inventory = new Inventory(page);
        await inventory.addItemToCart();
        await inventory.yourcart();
        await inventory.checkout();
        await inventory.forumInfo(
            loginData.forumParams.firstname,
            loginData.forumParams.lastname,
            loginData.forumParams.zipcode
        );
        
        const check_out_text = page.getByText('Checkout: Overview');

        await expect(check_out_text).toBeVisible();

        await inventory.finshShopping();

        const text_order = page.getByText('Thank you for your order!');
        await expect(text_order).toBeVisible();

})
