import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  get username() {
    return this.page.getByPlaceholder('UserName');
  }

  get password() {
    return this.page.getByPlaceholder('Password');
  }

  get loginBtn() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  get logoutBtn() {
  return this.page.locator('button', { hasText: /log\s*out/i });
}

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}