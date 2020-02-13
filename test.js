const puppeteer = require("puppeteer");
let config = {
  lauchOptions: {
    headless: false,
    slowMo: 250,
    args: ["--start-fulllscreen"]
  }
};
const landingPage = {
  login: "a[href='/login']",
  emailInput: "input[id=email]",
  passwordInput: "input[id=password]",
  loginButton: "button[type='submit']"
};
puppeteer.launch(config.lauchOptions).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1080 });
  await page.goto("http://localhost:4200");
  //const login = window.getElementsByTagName("a")[4];
  await page.click(landingPage.login);
  await page.type(landingPage.emailInput, "azerty@azerty.com");
  await page.type(landingPage.passwordInput, "azerty@azerty.com");
  await page.click(landingPage.loginButton);
});
