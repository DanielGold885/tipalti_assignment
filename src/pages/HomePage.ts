import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  private menuButton: Locator;
  private menuItems: Locator;
  private contactName: Locator;
  private contactEmail: Locator;
  private contactMessage: Locator;
  private sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuButton = page.locator('a[href="#menu"]:not(.close)');
    this.menuItems = page.locator('nav li a');
    this.contactName = page.locator('#name');
    this.contactEmail = page.locator('#email');
    this.contactMessage = page.locator('#message');
    this.sendButton = page.locator('input[type="submit"][value="Send"]');
}

   async goTo(): Promise<void> {
    await this.page.goto('https://qa-tipalti-assignment.tipalti-pg.com/index.html');
  }

  async openMenu(): Promise<void> {
    await this.menuButton.click();
  }

  async getMenuItems(): Promise<string[]> {
    return await this.menuItems.allTextContents();
  }

  async clickOnMenuItem(menuItem: string): Promise<void> {
    await this.page.waitForSelector('#menu', { state: 'visible' }); // Ensure menu is open
    const itemLocator = this.page.locator('#menu').getByRole('link', { name: menuItem });
    await itemLocator.waitFor({ state: 'visible' }); // Double-check visibility
    await itemLocator.click(); // Click the dynamic menu item
  }

  async fillContactForm(name: string, email: string, message: string): Promise<void> {
    await this.contactName.fill(name);
    await this.contactEmail.fill(email);
    await this.contactMessage.fill(message);
  }

  async submitForm(): Promise<void> {
    await this.sendButton.click();
  }

  async isFormSubmitted(): Promise<boolean> {
    const isVisible = await this.page.locator('text=Thank you for contacting us').isVisible();
    if (!isVisible) {
      throw new Error('Form submission failed: Expected confirmation message to appear.');
    }
    return isVisible;
  }
}
