import { test, expect, Page } from '@playwright/test';

const LOGIN_PAGE = 'https://www.saucedemo.com/';
const CREDENTIALS = { username: 'standard_user', password: 'secret_sauce' };

async function login(page: Page) {
  await page.goto(LOGIN_PAGE);
  await page.getByPlaceholder('Username').fill(CREDENTIALS.username);
  await page.getByPlaceholder('Password').fill(CREDENTIALS.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.inventory_list')).toBeVisible();
}

function productCard(page: Page, productName: string) {
  return page.locator('.inventory_item').filter({ hasText: productName });
}

async function addProduct(page: Page, productName: string) {
  await productCard(page, productName).getByRole('button', { name: 'Add to cart' }).click();
}

async function removeProduct(page: Page, productName: string) {
  await productCard(page, productName).getByRole('button', { name: 'Remove' }).click();
}

async function openCart(page: Page) {
  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('#cart_contents_container')).toBeVisible();
}

test('Login', async ({ page }) => {
  await login(page);
  await expect(page.locator('div.inventory_container').first()).toBeVisible();
});

test('Invalid Login', async ({ page }) => {
  let InvalidCredentials: {username:string, password:string} = {username:"standard_user", password:"wrong_sauce"};
  let ErrorMessage = page.locator('.error-message-container');
  await page.goto(LOGIN_PAGE);
  await page.getByPlaceholder('Username').fill(InvalidCredentials.username);
  await page.getByPlaceholder('Password').fill(InvalidCredentials.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(ErrorMessage).toBeVisible();
});

test.describe('Cart', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Add to Cart', async ({ page }) => {
    await addProduct(page, 'Sauce Labs Backpack');
    await addProduct(page, 'Sauce Labs Fleece Jacket');
    await openCart(page);
    await expect(page.locator('.cart_item')).toHaveCount(2);
  });

  test('Remove from Cart', async ({ page }) => {
    await addProduct(page, 'Sauce Labs Backpack');
    await openCart(page);
    await expect(page.locator('.cart_item')).toHaveCount(1);

    await page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Remove' }).click();
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });

});

