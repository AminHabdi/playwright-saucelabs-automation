import { Page, Locator } from '@playwright/test';
import { BASE_URL } from '../commenWeb.spec';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByPlaceholder('username');
        this.password = this.page.getByPlaceholder('password');
        this.loginButton = this.page.locator('#login-button');
        this.errorMessage = this.page.getByText('Epic sadface');
    }


    async login(username: string, password: string): Promise<void> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}
