import {expect, Page} from '@playwright/test'

export class Main {
    private page: Page;

    metaTag = (meta) => this.page.locator(`//meta[contains(text(), "${meta}")]`)
    constructor(page: Page) {
        this.page = page;
    }

    async checkTitle(title: string) {
        const pageTitle = await this.getTitle();
        expect(pageTitle).toBe(title); // Make your assertion here
    }

    async getTitle() {
        const title = await this.page.title();
        return title;
    }

    async metaDescription(meta: string) {
        const metaDescription = await this.page.locator(`//meta[contains(text(), "${meta}")]`);
        return metaDescription
    }

    async checkMeta(meta: string, expectMeta: string) {
        const metaDesc = await this.metaDescription(meta);
        expect(metaDesc).toBe(expectMeta); // Make your assertion here
    }
}
