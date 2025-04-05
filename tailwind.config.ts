
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				advizall: {
					// Custom brand colors
					charcoal: '#1A1A1A',
					darkGray: '#333333',
					darkBlue: {
						light: '#0048BA',
						dark: '#002E6D'
					},
					vividBlue: {
						light: '#00C6FB',
						dark: '#005BEA'
					},
					silver: {
						light: '#A9A9A9',
						dark: '#4B4B4B',
						text: '#E0E0E0'
					},
					white: '#FFFFFF'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 91, 234, 0.4), 0 0 20px rgba(0, 198, 251, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 25px rgba(0, 91, 234, 0.6), 0 0 40px rgba(0, 198, 251, 0.4)'
					}
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'gradient-move': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'particles-flow': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'100%': { transform: 'translateY(-1000px) rotate(720deg)' }
				},
				'blur-in': {
					'0%': { filter: 'blur(12px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'gradient-move': 'gradient-move 10s ease infinite',
				'particles-flow': 'particles-flow 25s linear infinite',
				'blur-in': 'blur-in 0.5s ease-out forwards'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'blue-gradient': 'linear-gradient(135deg, #005BEA 0%, #00C6FB 100%)',
				'dark-blue-gradient': 'linear-gradient(135deg, #002E6D 0%, #0048BA 100%)',
				'silver-gradient': 'linear-gradient(135deg, #4B4B4B 0%, #A9A9A9 100%)',
				'charcoal-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
				'hero-gradient': 'radial-gradient(circle at top right, rgba(0, 198, 251, 0.1), transparent 70%), radial-gradient(circle at bottom left, rgba(0, 91, 234, 0.1), transparent 70%), linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)'
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif']
			},
			boxShadow: {
				'glow': '0 0 15px rgba(0, 198, 251, 0.5)',
				'glow-lg': '0 0 30px rgba(0, 198, 251, 0.6)'
			},
			backdropFilter: {
				'blur-md': 'blur(10px)'
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
