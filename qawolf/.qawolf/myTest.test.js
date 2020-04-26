const qawolf = require("qawolf");
const selectors = require("./selectors/myTest.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myTest", async () => {
  await page.goto("http://todomvc.com/examples/react");
  await page.click("html");
  await page.click(selectors["1_what_needs_to_b_input"]);
  await page.type(selectors["2_what_needs_to_b_input"], "teste");
  await page.press(selectors["13_what_needs_to_b_input"], "Enter");
  await page.type(selectors["14_what_needs_to_b_input"], "asd");
  await page.press(selectors["15_what_needs_to_b_input"], "Enter");
  await page.press(selectors["3_what_needs_to_b_input"], "Enter");
  await page.type(selectors["4_what_needs_to_b_input"], "another item");
  await page.press(selectors["5_what_needs_to_b_input"], "Enter");
  await page.type(selectors["6_what_needs_to_b_input"], "more 1 item");
  await page.press(selectors["7_what_needs_to_b_input"], "Enter");
  await page.click(selectors["8_input"]);
  await page.click(selectors["9_input"]);
  await page.click(selectors["10_a"]);
  await page.click(selectors["11_a"]);
  await page.click(selectors["12_a"]);
});
