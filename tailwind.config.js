/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#58AE68",
				secondary: "#A307FF;",
				tertiary: "#151030",
				pearl : "#FBFCF8",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#fff",
				"home" : "#666",
			  },
			  backgroundImage: {
				'apply-pattern': 'linear-gradient(180deg, #166D3B 0%, #000 100%);'
			  },
		},
	},
	plugins: [],
};
