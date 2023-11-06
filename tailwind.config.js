/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Familjen Grotesk', 'mono']
		},
		extend: {
			backgroundImage: {
				'radial-gradient':
					'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(2,0,36,0.01) 62%, rgba(9,9,121,0) 100%)'
			}
		}
	},
	plugins: ['prettier-plugin-tailwindcss']
};
