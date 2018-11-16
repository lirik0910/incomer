import Base from '../../Base.js';

export default class Exchange extends Base {
	initDOMElements(e) {
        this.els = {
        	_exchangeInput: $('.exchange__input'),
        	_exchangeBtn: $('.exchange__btn')
        }
    }

	onDOMReady(e) {
		this.els._exchangeInput.focusin((e) => this.focusinInputAnimation(e));
		this.els._exchangeInput.focusout((e) => this.focusoutInputAnimation(e));
		this.els._exchangeBtn.click((e) => this.doExchange(e));
	}

	focusinInputAnimation(e) {
		$(e.currentTarget.parentNode.children[0]).addClass('exchange__placeholder--active');
	}

	focusoutInputAnimation(e) {
		if (!e.currentTarget.value) {
			$(e.currentTarget.parentNode.children[0]).removeClass('exchange__placeholder--active');
		}
	}

	doExchange(e) {
		e.preventDefault();
	}
}
