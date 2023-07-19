/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: '#F8F9FB',
				'main-dark': '#010413',
				sides: '#FFFFFF',
				'sides-dark': '#1B1E2B'
			}
		}
	},
	plugins: []
};
