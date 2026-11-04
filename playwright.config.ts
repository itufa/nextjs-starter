import { defineConfig, devices } from '@playwright/test'

const executablePath = process.env.CHROME_PATH

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	reporter: 'list',
	use: {
		baseURL: process.env.BASE_URL ?? 'http://127.0.0.1:3100',
		trace: 'on-first-retry',
		...(executablePath ? { launchOptions: { executablePath } } : {}),
	},
	webServer: {
		command: 'npm run start -- -p 3100',
		url: 'http://127.0.0.1:3100',
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
})
