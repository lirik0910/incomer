import Base from '../../Base.js';

export default class CompanyInfo extends Base {
	initDOMElements(e) {
        this.els = {
        	_infoTabs: $('.info__tabs'),
        	_infoTabLink: $('.info__tab-link'),
        	_infoTabContent: $('.info__tab-content')
        }
    }

	onDOMReady(e) {
		this.els._infoTabs.on('click', 'a:not(.info__tab-link--active)', 
			(e) => this.companyFilter(e));
	}

	companyFilter(e) {
		e.preventDefault();
		this.els._infoTabLink.removeClass('info__tab-link--active');
		$(e.currentTarget).addClass('info__tab-link--active');
		this.els._infoTabContent.removeClass('info__tab-content--active');
		this.els._infoTabContent
			.eq($(e.currentTarget).parent().index())
			.addClass('info__tab-content--active');
	}
}
