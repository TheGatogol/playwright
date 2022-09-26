class LoginPage {
  async navigateToLoginScreen() {
    await page.goto('https://www.saucedemo.com/')
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector('.inventory_list')
  }

  async pause() {
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginPage }
