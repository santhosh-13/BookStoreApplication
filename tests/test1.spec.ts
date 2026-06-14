import { test, expect } from '@playwright/test'
import data from '../test-data/data.json'


test('test1', async ({ page }) => {
    
    await page.goto('https://demoqa.com/')
    await page.getByRole('heading', { name: 'Book Store Application', level: 5 }).click()
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByPlaceholder('UserName').fill(data.user1['UserName'])
    await page.getByPlaceholder('Password').fill(data.user1['Password'])
    await page.getByRole('button', { name: 'Login'}).click()


    await expect(page.getByText(data.user1.UserName)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible()
    
    await page.getByRole('button', { name: 'Book Store' }).click()
    await page.getByPlaceholder('Type to search')
  .fill('Learning JavaScript Design Patterns');

await expect(page.getByText('Learning JavaScript Design Patterns')).toBeVisible();

const row = page.locator('tbody tr').first();

const title = await row.locator('td').nth(1).textContent();
const author = await row.locator('td').nth(2).textContent();
const publisher = await row.locator('td').nth(3).textContent();

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Publisher: ${publisher}`);
    
await page.getByRole('button', { name: 'Log out' }).click()
    





    








        

    



 

})