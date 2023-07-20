import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']		,
		coverage: {
			provider: 'v8'
		},
		alias: {
			src: path.resolve(__dirname, './src')
		},
		deps: {
			inline: [/vite-test-utils/]
		}
	}
});
