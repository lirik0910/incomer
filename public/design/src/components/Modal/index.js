import Base from '../../Base.js';

export default class Modal extends Base {
	initDOMElements(e) {
        this.els = {
        	_modal: $('.modal'),
        	_modalContent: $('.modal__content')
        }
    }

	onDOMReady(e) {
		$('.modal__btn--approve, .modal__btn--cancel').click((e) => this.closeModal(e));
		this.els._modal.click((e) => this.closeModalByLosingFocus(e));
	}

	closeModal(e) {
		e.preventDefault();
		this.els._modalContent.slideUp();
		this.els._modal.fadeOut();
		this.baseDOM._html.css({ 'overflow': 'visible' });
	}

	closeModalByLosingFocus(e) {
		if ( 
			// checks if descendants was clicked
           	this.els._modalContent.has(e.target).length == 0 
           	&&
           	// checks if the element itself was clicked
           	!this.els._modalContent.is(e.target) 
		) {
			this.els._modalContent.slideUp();
			this.els._modal.fadeOut();
		}
	}
}
