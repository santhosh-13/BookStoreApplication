import { test, expect } from '@playwright/test'

test('test1', async ({ page }) => {
    
    await page.goto('https://demoqa.com/')
    await page.getByRole('heading', { name: 'Book Store Application', level: 5 })
 

})