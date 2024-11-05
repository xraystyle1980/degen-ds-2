/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {

		/* Degen Design System Imports */
		fontFamily: {
			pixeloid: ['Pixeloid Mono', 'monospace'], 
			nunitosans: ['Nunito Sans', 'sans-serif'], 
		},

		fontSize: {
			'64': '64px',
			'51': '51px',
			'44': '44px',
			'36': '36px',
			'26': '26px',
			'21': '21px',
			'18': '18px',
		},

		lineHeight: {
			'72': '72px',
			'60': '60px',
			'50': '50px',
			'40': '40px',
			'32': '32px',
			'25': '25px',
			'24': '24px',
		},
		
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',

			transparent: 'transparent',
			current: 'currentColor',

			'just-white': '#ffffff',
			'just-black': '#000000',
		
			/* Degen Design System Imports */
			'Neutral': {
				'-3': '#2c2c2c',
				'-2': '#383838',
				'-1': '#545454',
				'0': '#5d5d5d',
				'+1': '#6e6e6e',
				'+2': '#858585',
				'+3': '#a6a6a6'
			},
			'White': {
				'-2': '#f0f0f0',
				'-1': '#fafafa',
				'0': '#ffffff'
			},
			'WhiteAlpha': {
				'96': 'rgba(255, 255, 255, 0.9600)',
				'88': 'rgba(255, 255, 255, 0.8800)',
				'68': 'rgba(255, 255, 255, 0.6800)',
				'50': 'rgba(255, 255, 255, 0.5000)',
				'33': 'rgba(255, 255, 255, 0.3300)',
				'16': 'rgba(255, 255, 255, 0.1600)',
				'8': 'rgba(255, 255, 255, 0.0800)',
				'4': 'rgba(255, 255, 255, 0.0400)'
			},
			'Black': {
				'0': '#000000'
			},
			'BlackAlpha': {
				'88': 'rgba(0, 0, 0, 0.8800)',
				'72': 'rgba(0, 0, 0, 0.7200)',
				'62': 'rgba(0, 0, 0, 0.6200)',
				'48': 'rgba(0, 0, 0, 0.4800)',
				'36': 'rgba(0, 0, 0, 0.3600)',
				'24': 'rgba(0, 0, 0, 0.2400)',
				'16': 'rgba(0, 0, 0, 0.1600)',
				'8': 'rgba(0, 0, 0, 0.0800)',
				'4': 'rgba(0, 0, 0, 0.0400)'
			},
			'Cyan': {
				'-4': '#216878',
				'-3': '#2e93aa',
				'-2': '#38b4d0',
				'-1': '#41cff0',
				'0': '#45dcff',
				'+1': '#9ee8ff',
				'+2': '#c4f0ff',
				'+3': '#e3f8ff',
				'+4': '#f3fcff'
			},
			'Chartreuse': {
				'-2': '#afd019',
				'-1': '#c4e91c',
				'0': '#d7ff1f',
				'+1': '#deff6c',
				'+2': '#e5ff96'
			},
			'Green': {
				'-2': '#42824a',
				'-1': '#4c9656',
				'0': '#55a860',
				'+1': '#89bd8f',
				'+2': '#aecfb2'
			},
			'Magenta': {
				'-4': '#901d57',
				'-3': '#b4246c',
				'-2': '#d02a7d',
				'-1': '#e92f8c',
				'0': '#ff3399',
				'+1': '#ff72ae',
				'+2': '#ff99c1',
				'+3': '#ffb8d2',
				'+4': '#ffe0ec'
			},
			'Licorice': {
				'0': '#080304'
			},
			'Midnight Blue': {
				'-1': '#070612',
				'0': '#0d0a21',
				'+1': '#140f33',
				'+2': '#1c1546',
				'+3': '#231b5a',
				'+4': '#2b216e',
				'+5': '#332781'
			},
			'Midnight Navy': {
				'-4': '#0f1418',
				'-3': '#161d22',
				'-2': '#1b2329',
				'-1': '#1f282f',
				'0': '#232d35',
				'+1': '#26323a',
				'+2': '#29363f',
				'+3': '#2c3943',
				'+4': '#2e3d47',
				'+5': '#303e49'
			},
			'Red': {
				'-2': '#c6002b',
				'-1': '#e40032',
				'0': '#ff0038',
				'+1': '#ff727d',
				'+2': '#ffa1a7',
				'+3': '#ffcdd0',
				'+4': '#ffedef'
			},
			'Yellow': {
				'-2': '#d3c627',
				'-1': '#ecdd2c',
				'0': '#f7e82e',
				'+1': '#f9ee8b',
				'+2': '#fbf3af'
			}
			  
  		}

  	}
  },
  plugins: [require("tailwindcss-animate")],
}