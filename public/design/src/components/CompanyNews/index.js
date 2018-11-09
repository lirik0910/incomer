import Base from '../../Base.js';

export default class CompanyNews extends Base {
	initDOMElements(e) {
        this.els = {
        	_newsSources: $('.news__sources'),
        	_newsSourceLink: $('.news__source-link'),
        	_newsTab: $('.news__tab')
        }
    }

	onDOMReady(e) {
		this.els._newsSources.on('click', 'a:not(.news__source-link--active)', 
			(e) => this.sourceFilter(e));
	}

	sourceFilter(e) {
		e.preventDefault();
		this.els._newsSourceLink.removeClass('news__source-link--active');
		$(e.currentTarget).addClass('news__source-link--active');
		this.els._newsTab.removeClass('news__tab--active');
		this.els._newsTab
			.eq($(e.currentTarget).parent().index())
			.addClass('news__tab--active');
	}
}
