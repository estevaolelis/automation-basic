import { Page, Locator, expect } from '@playwright/test'

export class ChallengingDomPage {
    readonly page: Page
    readonly buttons: Locator

    constructor(page: Page) {
        this.page = page
        this.buttons = page.locator('.button')
    }

    async clickButtonByIndex(index: number) {
        const button = this.buttons.nth(index)

        await button.click()

        // Challenging DOM doesnt expose triggers from the state of DOM after click on buttons
        await this.page.waitForTimeout(500)
    }

    async getCanvasBuffer() {
        return await this.page.locator("#canvas").screenshot();
    }
}