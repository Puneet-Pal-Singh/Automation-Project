let puppeteer = require("puppeteer");

(async function () {
  // starts browser
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized", "--incognito"],
    slowMo: 400,
  });

  // creates an empty page
  // await browser.newPage();
  // returns array of curently open tab
  let numberofPages = await browser.pages();
  let tab = numberofPages[0];

  // goto page
  await tab.goto("https://www.youtube.com");

  //sign in
  await tab.waitForSelector(
    ".style-scope.ytd-button-renderer.style-suggestive.size-small"
  );
  await tab.click(
    ".style-scope.ytd-button-renderer.style-suggestive.size-small"
  );

  // username with input attribute
  await tab.waitForSelector("input[type = 'email']");
  await tab.type("input[type = 'email']", "mijora9576@gmail.com", {
    delay: 500,
  });

  // Click next
  await tab.click(".VfPpkd-RLmnJb", {
    delay: 500,
  });

  //Password
  await tab.waitForSelector(".whsOnd.zHQkBf");
  await tab.type(".whsOnd.zHQkBf", "M1jor@9576", {
    delay: 500,
  });

  // click next
  await tab.waitForSelector(".VfPpkd-RLmnJb");
  await tab.click(".VfPpkd-RLmnJb");

  // Youtube Search box
  await tab.waitForSelector(".ytd-searchbox");
  await tab.click(".ytd-searchbox");
  await tab.type(".ytd-searchbox", "javascript", {
    delay: 200,
  });

  // YT search button
  await tab.click("#search-icon-legacy");

  // first video click
  await tab.waitForSelector(".style-scope.ytd-video-renderer");
  await tab.click(".style-scope.ytd-video-renderer");

  // video like
  await tab.waitForSelector(".style-scope.ytd-toggle-button-renderer");
  await tab.click(".style-scope.ytd-toggle-button-renderer");
  console.log("Video Liked");

  //Subscribe
  await tab.click(".style-scope.ytd-subscribe-button-renderer");
  console.log("Subscribed");

  await tab.evaluate((_) => {
    window.scrollBy(0, 50);
  });

  //comment
  // await tab.waitFor(5000);
  await tab.waitForSelector("div[id='placeholder-area']");
  await tab.click("div[id='placeholder-area']");
  await tab.type("div[id='placeholder-area']", "Awesome Explaination");

  await tab.click(
    "ytd-button-renderer[class='style-scope ytd-commentbox style-primary size-default']"
  );
  console.log("commented");
})();

