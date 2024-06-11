/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-elements-color': 'hsl(209,23%,22%)',
				'dark-background-color': 'hsl(207,26%,17%)',
				'light-text-color': 'hsl(200,15%,8%)',
				'light-input-color': 'hsl(0,0%,52%)',
				'light-background-color': 'hsl(0,0%,98%)',
				'dark-text-light-elements-color': 'hsl(0,0%,100%)',
			}
		},
	},
	plugins: [],
}

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)