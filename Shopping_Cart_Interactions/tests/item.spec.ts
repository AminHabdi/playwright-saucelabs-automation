import { test, expect } from '@playwright/test';

import { LoginPage } from '../../Authentication_and_Session_Management/resources/page_object/LoginPage';
import loginData from '../../Authentication_and_Session_Management/resources/test_data/login_data.json';
import { BASE_URL } from '../../Authentication_and_Session_Management/resources/commenWeb';

test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
})

test('Add items to the cart', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.login(
        loginData.lockedOutUser.username,
        loginData.lockedOutUser.password
    )
    

})


