import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#AA2013',
  				dark: '#912a21'
  			},
  			secondary: "#efc435",
			bgLight: "#FDF6ec",
			daerkGray: "#1e293b"
  		},
 
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
