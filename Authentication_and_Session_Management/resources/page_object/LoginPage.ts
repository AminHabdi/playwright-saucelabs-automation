import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly menu_button: Locator;
    readonly logout_sidebar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByPlaceholder('username');
        this.password = this.page.getByPlaceholder('password');
        this.loginButton = this.page.locator('#login-button');
        this.errorMessage = this.page.getByText('Epic sadface');
        this.menu_button = this.page.locator('#react-burger-menu-btn')
        this.logout_sidebar = this.page.locator('#logout_sidebar_link')
    }


    async login(username: string, password: string): Promise<void> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async logout_user() {
        await this.menu_button.click();
        await this.logout_sidebar.click();
    }
}
