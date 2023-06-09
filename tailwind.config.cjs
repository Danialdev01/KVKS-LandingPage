/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	
	plugins: [
		require('flowbite/plugin')
	],
	theme: {
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#FFFFF',
       'secondary': '#131038',
       'danger': '#e3342f',
      })
    }
}
