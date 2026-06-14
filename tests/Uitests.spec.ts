/// <reference types="node" />

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { BookStorePage } from '../pages/BookStore';
import data from '../test-data/data.json';
import * as fs from 'fs';


test('Book Store', async ({ page }) => {
    

    const login = new LoginPage(page)
    const book = new BookStorePage(page)
    
    const username = data.user1.UserName
    const password = data.user1.Password
    const bookName = 'Learning JavaScript Design Patterns'
    

    //Login

    await page.goto('https://demoqa.com/')
    await page.getByRole('heading', { name: 'Book Store Application', level: 5 }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    
  await login.login(username, password)
  await expect(page.getByText(username)).toBeVisible();
  await expect(login.logoutBtn).toBeVisible();
   
    
    
    
    //Book

    await page.getByRole('button', { name: 'Book Store' }).click();
    await book.searchBook(bookName)
    await book.bookexists(bookName)

    const row = await book.getBookRow(bookName);
      const title = await row.locator('td').nth(1).textContent();
      const author = await row.locator('td').nth(2).textContent();
      const publisher = await row.locator('td').nth(3).textContent();
    
//Printing to Console
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log(`Publisher: ${publisher}`);

  //For File

  const bookDetails = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

    fs.writeFileSync('book-details.txt', bookDetails);

  await login.logoutBtn.click()


})
