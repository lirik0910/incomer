import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default theme => {
	return {
		field: {
			height: '100%',
			width: 'calc(100% - 24px)',
			margin: 12,
			position: 'relative'
		},

		toolbar: {
			fontFamily: 'arial'
		},

		content: {
			padding: '0 12px',
			fontFamily: 'arial',
			'& *':{
				maxWidth: '100%',
			}
		},

		label: {
			marginTop: 32,
			marginBottom: 6,
			fontSize: 16,
			fontWeight: 300
		},

		'@global': {
			'.rdw-editor-main': {
				height: 'calc(100% - 48px) !important'
			},

			'.rdw-editor-wrapper': {
				height: 'calc(100% - 97px) !important'
			},

			'.public-DraftStyleDefault-block': {
				margin: '0 !important'
			}
		}
	}
}