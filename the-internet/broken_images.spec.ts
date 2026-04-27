import { test, expect } from "@playwright/test";

test("Validadate how many broken images", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Broken Images" }).click();

  const images = page.locator("img")
  const count = await images.count()

  const brokenImages: string[] = []

  for (let i = 0; i < count; i++){
    const image = images.nth(i)

    const isBroken = await image.evaluate((img: HTMLImageElement) => img.naturalWidth === 0)

    if (isBroken) {
        const source = await image.getAttribute('src')
        brokenImages.push(source || "sem-src")
    }

    expect(brokenImages.length).toBe(0)
  }
});
