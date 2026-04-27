import { test, expect } from "@playwright/test";
import { ChallengingDomPage } from "./Services/ChallengingDomPage";

test("Click in the buttons", async ({ page }) => {
  const domPage = new ChallengingDomPage(page)
  await page.goto('/challenging_dom')

  await domPage.clickButtonByIndex(0)
  await domPage.clickButtonByIndex(1)
  await domPage.clickButtonByIndex(2)
});

// I don't get the idea of the table.
// test("Edit and delete lines from the table", async ({ page }) => {
//   await page.goto("/");

  
// });


test("Validadate how many broken images", async ({ page }) => {
  const domPage = new ChallengingDomPage(page)
  await page.goto('/challenging_dom')

  const canvasBefore = await domPage.getCanvasBuffer()
  await domPage.clickButtonByIndex(0);
  
  const canvasAfter = await domPage.getCanvasBuffer()

  expect(canvasBefore).not.toEqual(canvasAfter)
});
