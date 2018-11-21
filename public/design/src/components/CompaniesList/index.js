import Base from '../../Base.js';
import Isotope from 'isotope-layout';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

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
		this.els._companiesSortLink.click((e) => this.toggleActiveClass(e));




		Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
		    return ['M', x, y, 'L', x + height, y];
		};

		Highcharts.setOptions({
			chart: {
		        height: 60,
		        width: 327
		    },
		    title: false,
			legend: false,
		    xAxis: {
		        visible: false
		    },

		    yAxis: {
		        visible: false
		    },
		});

		for(var i = 0; i < $("[id^='chart-']").length; i++) {
			var chart = new Highcharts.Chart({
		    chart: { renderTo: $("[id^='chart-']")[i] },
			    series: [{
			        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
			        pointStart: Date.UTC(2010, 0, 1),
			        pointInterval: 3600 * 1000, // one hour
			        marker: false,
			        color: '#252525',
			        states: {
		                hover: false
		            }
			    }]
			});
		}





		/*
		window.chart = new Highcharts.Chart({
		// Highcharts.chart('chart-1', {
			chart: {
				// renderTo: $container[0],
				renderTo: 'chart-1',
		        height: 60,
		        width: 327
		    },
		    title: false,
			legend: false,
		    xAxis: {
		        // type: 'datetime'
		        visible: false
		    },

		    yAxis: {
		        visible: false
		    },

		    series: [{
		        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		        pointStart: Date.UTC(2010, 0, 1),
		        pointInterval: 3600 * 1000, // one hour
		        marker: false,
		        color: '#252525',
		        states: {
	                hover: false
	            }
		    }]
		});*/




	}

	initIsotope() {
		var iso = new Isotope( '.companies__list', {
			itemSelector: '.companies__item',
			getSortData: {
				title: '.companies__title',
				rating: '.companies__rating-value parseFloat',
				capitalization: function(item) {
					var capitalizationValue = item
							.querySelector('.companies__stock-value--sort').textContent,
						// remove $ & . from number
						capitalization = capitalizationValue.replace('$', '')
							.replace(/\./g, '');
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
				iso.arrange({ sortBy: sortValue, sortAscending: true });
				break;
			case 'asc': 
				iso.arrange({ sortBy: sortValue, sortAscending: false });
				break;
			case 'desc': 
				iso.arrange({ sortBy: 'original-order', sortAscending: true });
				break;
			default:
				iso.arrange({ sortBy: 'original-order', sortAscending: true });
				break;
		}
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

	toggleActiveClass(e) {
		this.els._companiesSortLink.removeClass('companies__sort-link--active');
		$(e.currentTarget).addClass('companies__sort-link--active')

		// other items will have origin data-attr
		$('.companies__sort-link:not(.companies__sort-link--active)')
			.attr({'data-sort-type': 'original-order'})
	}
}
