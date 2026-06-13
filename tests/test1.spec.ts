import { test, expect } from '@playwright/test'
import data from '../test-data/data.json'


test('test1', async ({ page }) => {
    
    await page.goto('https://demoqa.com/')
    await page.getByRole('heading', { name: 'Book Store Application', level: 5 }).click()
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('button', { name: 'New User' }).click()
    await page.getByPlaceholder('First Name').fill(data.user1['First Name'])
    await page.getByPlaceholder('Last Name').fill(data.user1['Last Name'])
    await page.getByPlaceholder('UserName').fill(data.user1['UserName'])
    await page.getByPlaceholder('Password').fill(data.user1['Password'])
    await page.getByRole('button', { name: 'Register' }).click()
    
    await page.waitForTimeout(30000)







        

    



 

})