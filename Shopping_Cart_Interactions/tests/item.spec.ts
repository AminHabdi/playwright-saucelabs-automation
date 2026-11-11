import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page_object/LoginPage';
import loginData from '../../resources/test_data/login_data.json';
import { BASE_URL, CART_URL } from '../../resources/commenWeb';
import { Inventory } from '../../page_object/InventoryPage';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    const loginpage = new LoginPage(page);
     await loginpage.login(
        loginData.standardUser.username,
        loginData.standardUser.password
    );
});


test('Add items to the cart', async({page}) => {
    const inventory = new Inventory(page);
    await inventory.addItemToCart();
    await inventory.yourcart();


    await expect(page).toHaveURL(CART_URL)
    const text = page.getByText('Your Cart');
    await expect(text).toBeVisible();

});

test('Remove item from cart', async({ page }) => {
    const inventory = new Inventory(page)
    await inventory.addItemToCart();
    await inventory.yourcart(); 

    await inventory.removeItem();
    await expect(page.locator('.cart_item')).toHaveCount(0);
});

test('Complete Order Checkout', async({ page }) => {
    const inventory = new Inventory(page)
    await inventory.addItemToCart();
    await inventory.yourcart(); 
    await inventory.checkout();

    const check_your_info = page.getByText('Checkout: Your Information')
    await expect(check_your_info).toBeVisible();

});





