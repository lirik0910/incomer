import Base from '../../Base.js';

export default class Comments extends Base {
	initDOMElements(e) {
        this.els = {
        	_commentsVoteUp: $('.comments__vote-up')
        	// _headerNav: $('.header__nav'),
        }
    }

	onDOMReady(e) {
		$('.comments__vote-up').click((e) => this.toggleActiveClass(e));
	}

	toggleActiveClass(e) {
		e.preventDefault();
		$(e.currentTarget).toggleClass('active');
	}
}
