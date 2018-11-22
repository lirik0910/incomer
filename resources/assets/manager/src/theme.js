
/**
 * Describes an object consisting of app styles parameters
 * @return {Object}
 *
 * Описывает объект состоящий из css свойств
 * @return {Object}  
 */
export default (() => {
	let palette = {};
	let button = {};
	let link = {};
	let defaultTitle = {};
	let defaultInput = {};

	return {
		// global containers config
		// стили для глобальный контейнеров приложения
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
			},
			'#root': {
				background: 'linear-gradient(180deg, #F5F5F5, #FFF)'
			},
			'.react-datepicker-popper': {
				left: '-34px !important'
			},
			'.react-datepicker-wrapper, .react-datepicker__input-container': {
				display: 'block !important'
			}
		},
		// determine the color scheme of the application
		// определяется цветовая гамма всего приложения
		Palette: palette = {
			color1: '#000',
			color2: '#3D556D',
			color3: '#23527C',
			color4: '#E7E7E7',
			color5: '#D7D7D7',
			color6: '#F2F1F0',
			color7: '#ACAAC1'
		},
		// display variants of Button component
		// определяются стили для компонента Button
		Button: {
			default: button = {
				display: 'block',
				border: 'none',
				height: 30,
				padding: '0 12px',
				cursor: 'pointer',
				color: palette['color2'],
				backgroundColor: palette['color3'],
				'&:hover': {
					color: palette['color1']
				}
			},
			contrast: {
				...button,
				color: palette['color4'],
				'&:hover': {
					color: palette['color4']
				}
			},
			tab: {
				...button,
				display: 'inline-block',
				color: palette['color3'],
				backgroundColor: palette['color6'],
				'&:hover': {
					color: palette['color6'],
					backgroundColor: palette['color3']
				}
			},
			link: link = {
				...button,
				margin: 0,
				padding: 0,
				fontSize: 14,
				height: 'auto',
				display: 'inline',
				backgroundColor: 'transparent',
				'&:disabled': {
					color: palette['color7']
				}
			},
			icon: {
				...button,
				width: 30,
				margin: 0,
				padding: 0,
				display: 'inline-block',
				backgroundColor: 'transparent',
			}
		},
		// Link component styles
		// стили для Link
		Link: {
			default: {
				color: palette['color2'],
				textDecoration: 'none',
				'&:hover': {
					color: palette['color1']
				}
			},
			anti: {
				...link,
				textDecoration: 'none',
				color: palette['color4']
			}
		},
		// Typography component styles
		// стили для Typography
		Typography: {
			default: defaultTitle = {
				fontSize: 14,
				fontWeight: 300,
				color: palette['color2']
			},
			title: {
				fontSize: 24,
				padding: 12,
				display: 'block'
			},
			label: {
				...defaultTitle,
				padding: '6px 0',
				fontSize: 12,
				lineHeight: '28px'
			},
			anti: {
				lineHeight: '30px',
				color: palette['color4']
			},
			simple: {
				...defaultTitle,
				color: palette['color1']
			}
		},
		// Table component styles
		// стили для Table
		Table: {
			default: {
				width: '100%',
				fontSize: 12,
				color: palette['color3'],
				borderCollapse: 'collapse',
				'& td': {
					padding: '8px 2px',
					borderBottom: '2px solid '+ palette['color2']
				}
			}
		},
		// Panel component styles
		// стили для Panel
		Panel: {
			default: {
				padding: 12,
				position: 'relative',
				backgroundColor: palette['color5']
			}
		},
		// Input component styles
		// стили для Input
		Input: {
			default: defaultInput = {
				border: '1px solid transparent',
				margin: 0,
				height: 28,
				padding: '0 6px',
				color: palette['color3'],
				backgroundColor: palette['color6']
			},
			date: {
				...defaultInput
			}
		},
		// Overlay block styles
		// Настройки стилей для блока, 
		// который закрывает собой все страницу,
		// чтобы невозможно было взаимодействовать с элементами
		// во время загрузки, например
		Overlay: {
			default: {
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				position: 'fixed',
				backgroundColor: 'rgba(0, 0, 0, .1)',
				zIndex: 2048
			}
		},
		// Aside component styles
		// стили для Aside
		Aside: {
			default: {
				top: 0,
				width: '200px',
				height: '100%',
				position: 'fixed',
				backgroundColor: palette['color3'],
				zIndex: 2049,
				'& a': {
					paddingLeft: 12,
					display: 'block'
				}
			}
		},
		// Dialog component styles
		// стили для Dialog
		Dialog: {
			default: {
				top: '6%',
				width: 400,
				minHeight: 200,
				zIndex: 2050,
				left: 'calc(50% - 200px)',
				position: 'fixed',
				backgroundColor: palette['color3']
			},
			alert: {
				top: 12,
				right: 12,
				width: 262,
				minHeight: 48,
				zIndex: 2049,
				padding: 12,
				position: 'absolute',
				backgroundColor: palette['color3']
			}
		},

		Select: {
			default: {
				width: '100%',
				display: 'block'
			}
		}
	};
})()