import { chromium, Browser, Page } from '@playwright/test';

export class BrowserHandler {
  private static browser: Browser | null = null;
  private static page: Page | null = null;

  static async launch(): Promise<Page> {
    if (!this.browser) {
      this.browser = await chromium.launch({
        headless: true,
        args: ['--ignore-certificate-errors'],
      });
    }
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    return this.page;
  }
  

  static async close(): Promise<void> {
    await this.browser?.close();
    this.browser = null;
    this.page = null;
  }
}
