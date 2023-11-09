/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-gray": "#eeeeee",
				"light-green": "#00B797",
				"light-blue": "#F2FBFA",
			},
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant("not-last", "&:not(:last-child)");
		}),
	],
};
