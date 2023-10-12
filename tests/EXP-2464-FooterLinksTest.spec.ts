import { test, expect } from '@playwright/test';

test('"Privacy Policy" link test', async ({ page }) => {
  await page.goto('https://wl-explorer-fe-dev.wellnessliving.com/');
  // Find the Terms of Use link in the footer
  const privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' });
  // Expect a title to contain a substring
  await expect(privacyPolicyLink).toContainText(/Privacy Policy/);
  // Click the Privacy Policy link
  await privacyPolicyLink.click();
  // Check if the Terms of Use page has the expected URL
  await expect(page).toHaveURL('https://www.wellnessliving.com/knowledge-sharing/privacy-policy/');
});

test('"Terms of Use" link test', async ({ page }) => {
  await page.goto('https://wl-explorer-fe-dev.wellnessliving.com/');
  // Find the Terms of Use link in the footer
  const termsOfUseLink = page.getByRole('link', { name: 'Terms of Use' });
  // Expect a title to contain a substring
  await expect(termsOfUseLink).toContainText(/Terms of Use/);
  // Click the Privacy Policy link
  await termsOfUseLink.click();
  // Check if the Terms of Use page has the expected URL
  await expect(page).toHaveURL('https://www.wellnessliving.com/knowledge-sharing/terms-of-use/');
});

test('"Email" link test', async ({ page }) => {
  await page.goto('https://wl-explorer-fe-dev.wellnessliving.com/');
  // Find the Terms of Use link in the footer
  const termsOfUseLink = page.getByRole('link', { name: 'Email' });
  // Expect a title to contain a substring
  await expect(termsOfUseLink).toContainText(/Email/);
  // Check if the Email link has the expected URL
  await expect(termsOfUseLink).toHaveAttribute('href', /^mailto:sales@wellnessliving.com/);
});
