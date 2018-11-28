import Base from '../../Base.js';

export default class Rate extends Base {
	initDOMElements(e) {
        this.els = {
        	_rateList: $('.rate__list')
        }
    }

	onDOMReady(e) {
		this.slidingRates();
	}

	slidingRates() {
		var rateBlockCount = this.els._rateList.length,
			indexActiveRateBlock = 0;
	   
		setInterval( () => {
			// if active block is the last - reset counter
	    	if( $('.rate__list--active').index() == rateBlockCount - 1 )
				indexActiveRateBlock = 0;
			else
				indexActiveRateBlock++;
	        
	    	$('.rate__list--active').removeClass('rate__list--active');
	    	$('.rate__list').eq(indexActiveRateBlock).addClass('rate__list--active');
		}, 6000);
	}
}
