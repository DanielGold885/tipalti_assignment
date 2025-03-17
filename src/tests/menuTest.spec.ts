import { test, expect } from '@playwright/test';
import { BrowserHandler } from '../core/BrowserHandler';
import { HomePage } from '../pages/HomePage';

test('Validate menu items and submit contact form', async () => {
  // Launch browser and open HomePage
  const page = await BrowserHandler.launch();
  const homePage = new HomePage(page);

  await homePage.goTo(); // Navigate to the correct URL
  await homePage.openMenu();

  // Fetch all menu items and log them
  const menuItems = await homePage.getMenuItems();
  console.log('Menu Items Found:', menuItems);

  // Validate that "Kika" exists in the menu
  expect(menuItems).toContain('Kika');

  // Click on "Kika"
  const targetItem = 'Kika'; // Can be changed to any menu item dynamically
  console.log(`Trying to click on: ${targetItem}`);

  await homePage.clickOnMenuItem(targetItem);
  console.log('Click action completed.');

  // Fill in the contact form
  await homePage.fillContactForm('John Doe', 'john@example.com', 'This is a test message.');

  // Submit the form
  await homePage.submitForm();

  // Validate form submission
  await homePage.isFormSubmitted();

  // Close the browser
  await BrowserHandler.close();
});