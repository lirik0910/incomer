import Base from '../../Base.js';
import Isotope from 'isotope-layout';
// import * as Isotope from 'isotope.pkgd.js';

export default class CompaniesList extends Base {
	initDOMElements(e) {
        this.els = {
        	_companiesSortLink : $('.companies__sort-link')
        }
    }

	onDOMReady(e) {
		var iso = this.initIsotope();
		this.els._companiesSortLink.click((e) => this.sortingIsotop(e, iso));
		this.els._companiesSortLink.click((e) => this.dataAttrToggling(e));
	}

	initIsotope() {
		var iso = new Isotope( '.companies__list', {
			itemSelector: '.companies__item',
			getSortData: {
				title: '.companies__title',
				rating: '.companies__rating-value parseFloat',
				capitalization: function(item) {
					var capitalizationValue = item.querySelector('.companies__stock-value--sort').textContent,
						// remove $ & . from number
						capitalization = capitalizationValue.replace('$', '').replace(/\./g, '');
					return parseInt(capitalization);
				}
			}
		});
		return iso;
	}

	sortingIsotop(e, iso) {
		e.preventDefault();
		var sortValue = $(e.currentTarget).attr('data-sort-value'),
			sortType = $(e.currentTarget).attr('data-sort-type');

		switch(sortType) {
			case 'original-order': 
				iso.arrange({ sortBy: sortValue, sortAscending : true });
				break;
			case 'asc': 
				iso.arrange({ sortBy: sortValue, sortAscending : false });
				break;
			case 'desc': 
				iso.arrange({ sortBy: 'original-order' });
				break;
			default:
				iso.arrange({ sortBy: 'original-order' });
				break;
		}

		// iso.arrange({ sortBy: sortValue });
		// iso.arrange({ sortBy: sortValue, sortAscending : false });
	}

	dataAttrToggling(e) {
		switch($(e.currentTarget).attr('data-sort-type')) {
			case 'original-order': 
				$(e.currentTarget).attr({'data-sort-type': 'asc'});
				break;
			case 'asc': 
				$(e.currentTarget).attr({'data-sort-type': 'desc'});
				break;
			case 'desc': 
				$(e.currentTarget).attr({'data-sort-type': 'original-order'});
				break;
			default: 
				$(e.currentTarget).attr({'data-sort-type': 'original-order'});
				break;
		}
	}
}
