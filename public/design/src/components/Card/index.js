import Base from '../../Base.js';

export default class Card extends Base {
	initDOMElements(e) {
        this.els = {
        	// _headerNav: $('.header__nav')
        }
    }

	onDOMReady(e) {
		/*$( ".card" ).hover(
			function() {
				$('.card__pic img').css({'transition':'transform 8s linear'})
			}, function() {
				$('.card__pic img').css({'transition':'transform .5s linear'})
			}
		);*/
	}
}
