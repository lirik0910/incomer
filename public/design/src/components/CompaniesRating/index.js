import Base from '../../Base.js';

export default class CompaniesRating extends Base {
	initDOMElements(e) {
        this.els = {
        	_ratingTable: $('.rating__table'),
        	_ratingTermList: $('.rating__term-list'),
        	_ratingTermLink: $('.rating__term-link')
        }
    }

	onDOMReady(e) {
		this.els._ratingTermList.on('click', 'a:not(.rating__term-link--active)', 
			(e) => this.ratingFilter(e));
	}

	ratingFilter(e) {
		this.els._ratingTermLink.removeClass('rating__term-link--active')
		$(e.currentTarget).addClass('rating__term-link--active')
		this.els._ratingTable.removeClass('rating__table--active');
		this.els._ratingTable
			.eq($(e.currentTarget).parent().index())
			.addClass('rating__table--active');
	}
}
