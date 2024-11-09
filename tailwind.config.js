/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			pixeloid: ['Pixeloid Mono', 'monospace'],
  			nunitosans: ['Nunito Sans', 'sans-serif']
  		},
  		fontSize: {
  			'18': '18px',
  			'21': '21px',
  			'26': '26px',
  			'36': '36px',
  			'44': '44px',
  			'51': '51px',
  			'64': '64px'
  		},
  		lineHeight: {
  			'24': '24px',
  			'25': '25px',
  			'32': '32px',
  			'40': '40px',
  			'50': '50px',
  			'60': '60px',
  			'72': '72px'
  		},
  		colors: {
  			primary: '#FF3399',
  			secondary: '#e5ff96',
  			accent: '#d7ff1f',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			transparent: 'transparent',
  			current: 'currentColor',
  			'just-white': '#ffffff',
  			'just-black': '#000000',
  			Neutral: {
  				'0': '#5d5d5d',
  				'-3': '#2c2c2c',
  				'-2': '#383838',
  				'-1': '#545454',
  				'+1': '#6e6e6e',
  				'+2': '#858585',
  				'+3': '#a6a6a6'
  			},
  			White: {
  				'0': '#ffffff',
  				'-2': '#f0f0f0',
  				'-1': '#fafafa'
  			},
  			WhiteAlpha: {
  				'4': 'rgba(255, 255, 255, 0.0400)',
  				'8': 'rgba(255, 255, 255, 0.0800)',
  				'16': 'rgba(255, 255, 255, 0.1600)',
  				'33': 'rgba(255, 255, 255, 0.3300)',
  				'50': 'rgba(255, 255, 255, 0.5000)',
  				'68': 'rgba(255, 255, 255, 0.6800)',
  				'88': 'rgba(255, 255, 255, 0.8800)',
  				'96': 'rgba(255, 255, 255, 0.9600)'
  			},
  			Black: {
  				'0': '#000000'
  			},
  			BlackAlpha: {
  				'4': 'rgba(0, 0, 0, 0.0400)',
  				'8': 'rgba(0, 0, 0, 0.0800)',
  				'16': 'rgba(0, 0, 0, 0.1600)',
  				'24': 'rgba(0, 0, 0, 0.2400)',
  				'36': 'rgba(0, 0, 0, 0.3600)',
  				'48': 'rgba(0, 0, 0, 0.4800)',
  				'62': 'rgba(0, 0, 0, 0.6200)',
  				'72': 'rgba(0, 0, 0, 0.7200)',
  				'88': 'rgba(0, 0, 0, 0.8800)'
  			},
  			Cyan: {
  				'0': '#45dcff',
  				'-4': '#216878',
  				'-3': '#2e93aa',
  				'-2': '#38b4d0',
  				'-1': '#41cff0',
  				'+1': '#9ee8ff',
  				'+2': '#c4f0ff',
  				'+3': '#e3f8ff',
  				'+4': '#f3fcff'
  			},
  			Chartreuse: {
  				'0': '#d7ff1f',
  				'-2': '#afd019',
  				'-1': '#c4e91c',
  				'+1': '#deff6c',
  				'+2': '#e5ff96'
  			},
  			Green: {
  				'0': '#55a860',
  				'-2': '#42824a',
  				'-1': '#4c9656',
  				'+1': '#89bd8f',
  				'+2': '#aecfb2'
  			},
  			Magenta: {
  				'0': '#ff3399',
  				'-4': '#901d57',
  				'-3': '#b4246c',
  				'-2': '#d02a7d',
  				'-1': '#e92f8c',
  				'+1': '#ff72ae',
  				'+2': '#ff99c1',
  				'+3': '#ffb8d2',
  				'+4': '#ffe0ec'
  			},
  			Licorice: {
  				'0': '#080304'
  			},
  			'Midnight Blue': {
  				'0': '#0d0a21',
  				'-1': '#070612',
  				'+1': '#140f33',
  				'+2': '#1c1546',
  				'+3': '#231b5a',
  				'+4': '#2b216e',
  				'+5': '#332781'
  			},
  			'Midnight Navy': {
  				'0': '#232d35',
  				'-4': '#0f1418',
  				'-3': '#161d22',
  				'-2': '#1b2329',
  				'-1': '#1f282f',
  				'+1': '#26323a',
  				'+2': '#29363f',
  				'+3': '#2c3943',
  				'+4': '#2e3d47',
  				'+5': '#303e49'
  			},
  			Red: {
  				'0': '#ff0038',
  				'-2': '#c6002b',
  				'-1': '#e40032',
  				'+1': '#ff727d',
  				'+2': '#ffa1a7',
  				'+3': '#ffcdd0',
  				'+4': '#ffedef'
  			},
  			Yellow: {
  				'0': '#f7e82e',
  				'-2': '#d3c627',
  				'-1': '#ecdd2c',
  				'+1': '#f9ee8b',
  				'+2': '#fbf3af'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}