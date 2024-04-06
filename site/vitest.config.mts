import { defineConfig, configDefaults } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, 'e2e/*'],
		coverage: {
			include: ['app/**'],
			exclude: ['**/dev_data.ts'],
		},
	},
});
