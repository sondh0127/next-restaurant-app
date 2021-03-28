import * as colors from 'twind/colors'
import { forms } from '@twind/forms'
import { css } from 'twind/css'

/** @type {import('twind').Configuration} */
export default {
	preflight: (preflight) => css`
		${preflight}
		input[type='number']::-webkit-inner-spin-button,
		input[type='number']::-webkit-outer-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	`,
	theme: {
		darkMode: 'class', // or 'media' or 'class'
		extend: {
			screens: {
				'2xl': '1440px',
			},
			colors: {
				...colors,
				primary: {
					100: '#a273ff',
					200: '#935bff',
					300: '#8344ff',
					400: '#742cff',
					500: '#6415FF',
					600: '#5a13e6',
					700: '#5011cc',
					800: '#460fb3',
					900: '#3c0d99',
				},

				secondary: {
					100: '#7c8ba1',
					200: '#667892',
					300: '#506582',
					400: '#3a5173',
					500: '#243E63',
					600: '#203859',
					700: '#1d324f',
					800: '#192b45',
					900: '#16253b',
				},
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2.5rem',
				'5xl': '3rem',
				'6xl': '4.5rem',
			},
			boxShadow: {
				xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
				outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
				raised: '0 20px 50px rgba(0,0,0, 0.075)',
			},
			cursor: {
				'col-resize': 'col-resize',
			},
			fontFamily: {
				display: ['Inter', 'system-ui'],
			},
			maxWidth: (theme) => ({
				...theme('spacing'),
			}),
			minHeight: (theme) => ({
				...theme('spacing'),
			}),
			strokeWidth: {
				3: '3',
				4: '4',
			},
			backgroundImage: (theme) => ({
				check: "url('/icons/check.svg')",
			}),
		},
	},
	plugins: {
		// forms,
	},
	variants: {
		hocus: '&:hover, &:focus',
	},
}
