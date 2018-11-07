
var palette = {};
export default {

	// global tags style config
	Global: {
		'html': {
			top: 0,
			left: 0,
			width: '100%',
			position: 'fixed',
			fontSize: 14,
			fontFamily: 'arial'
		},

		'html, body, #root': {
			margin: 0,
			padding: 0,
			height: '100%',
			overflowX: 'hidden'
		}
	},

	// define app color settings
	Palette: palette = {
		default: '#D7D7D7',
		primary: '#3D556D',
		active: '',
		hover: '#ACAAC1',
		process: '',
		secondary: '#23527C',
		panel: '#E7E7E7',
		gradient: 'linear-gradient(180deg, #F5F5F5, #FFF)',
		aux: '#000'
	},

	// config button compoenent style
	Button: {

		default: {

		},

		process: {

		},

		tab: {

		},

		symbol: {

		},

		link: {

		},

		min: {
			border: 'none',
			height: 30,
			fontSize: 14,
			padding: '0 12px',
			cursor: 'pointer',
			backgroundColor: 'transparent'
		}
	},

	Typography: {

		default: {
			fontSize: 14,
			fontWeight: 300
		},

		title: {
			fontSize: 24,
			padding: 12,
			display: 'block'
		}
	},

	// Table styles
	Table: {
		default: {
			width: '100%',
			fontSize: 12,
			color: palette['palette'],
			borderCollapse: 'collapse',

			'& td': {
				padding: '8px 0',
				borderBottom: '2px solid '+ palette['default']
			}
		}
	},

	Panel: {
		padding: 12,
		position: 'relative',
		backgroundColor: palette.panel
	}
}