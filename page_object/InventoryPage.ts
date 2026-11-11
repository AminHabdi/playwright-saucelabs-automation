import { Page, Locator } from '@playwright/test';

export class Inventory {
    readonly page: Page;
    readonly addToCart: Locator;
    readonly shopping_cart_link: Locator; 
    readonly remove_item_button: Locator;
    readonly checkout_button: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continue_button: Locator;
    readonly finish_button: Locator;
    
   // data-test="shopping-cart-link"

    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shopping_cart_link = page.locator('[data-test="shopping-cart-link"]');
        this.remove_item_button = page.locator('#remove-sauce-labs-backpack');
        this.checkout_button = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');
        this.continue_button = page.locator('#continue');
        this.finish_button = page.locator('#finish');
    }

    async addItemToCart(){
        await this.addToCart.click();
    };
    async yourcart(){
        await this.shopping_cart_link.click()
    };

    async removeItem(){
        await this.remove_item_button.click();
    };

    async checkout(){
        await this.checkout_button.click();
    };

    async forumInfo(firstname: string,lastname: string,zipcode: string): Promise<void>  {
          await this.firstName.fill(firstname);
          await this.lastName.fill(lastname);
          await this.zipCode.fill(zipcode);
          await this.continue_button.click();        
    }
    async finshShopping(){
        await this.finish_button.click();
    }


};