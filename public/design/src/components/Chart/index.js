import Base from '../../Base.js';
import Chartist from 'chartist';
// import Tooltip from 'chartist-plugin-tooltips';
import tooltip from 'chartist-plugin-tooltips';
// import * as d3 from 'd3';

export default class Chart extends Base {
	initDOMElements(e) {
        this.els = {
        	_chartFilterListTerm: $('.chart__filter-list--term'),
        	_chartFilterLinkTerm: $('.chart__filter-list--term .chart__filter-link')
        }
    }

	onDOMReady(e) {
		var data = {
			minute: {},
			hour: {},
			day: {
				labels: [
					'2:00', '4:00', '6:00', '8:00', '10:00', 
					'12:00', '14:00', '16:00', '18:00', '20:00',
					'22:00', '24:00', '00:00'	
				],
				series: [
					315, 272, 234, 289, 300,
					215, 172, 224, 109, 150,
					215, 232, 314.86
				]
			},
			week: {
				labels: [
					'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 
					'Sat', 'Sun'
				],
				series: [
					112, 72, 234, 289, 300,
					215, 172
				]
			},
			month: {},
			quarter: {},
			year: {
				labels: [
					'Jan', 'Feb', 'Mar', 'Apr', 'May', 
					'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
					'Nov', 'Dec'
				],
				series: [
					112, 72, 234, 289, 300,
					215, 172, 224, 109, 150,
					215, 232, 
				]
			},
			allTime: {}
		}

		this.createChart(data.day);
		// this.els._chartFilterLinkTerm.click((e) => this.filterChart(e, data));
		this.els._chartFilterListTerm.on('click', 'a:not(.chart__filter-link--active)', 
			(e) => this.filterChart(e, data));
	}

	createChart(data) {
		var chart = new Chartist.Line('.ct-chart', {
			labels: data.labels,
			series: [
				data.series
			]
		}, 
		{
			height: 150,
			low: 0,
			lineSmooth: false,
			fullWidth: true,
			axisY: {
				offset: 0,
			    // showGrid: false,
			    showLabel: false
			  },
			plugins: [
				Chartist.plugins.tooltip({
					currency: '$',
					// anchorToPoint: true,
					pointClass: 'ct-circle',
					tooltipOffset: {
						x: 0,
						y: 30
					},
				})
			]
		});

		// replace point to circle for making space between points & lines
		chart.on('draw', function(data) {
			if(data.type === 'point') {
				var circle = new Chartist.Svg('circle', {
					cx: [data.x],
					cy: [data.y],
					r: [4],
					'ct:value': data.value.y,
					'ct:meta': data.meta,
					class: 'ct-circle',
				});
		    	data.element.replace(circle);
			}
		    $($('.ct-vertical')).css({ 'opacity': 0 });
		    $($('.ct-vertical')[0]).css({ 'opacity': 1 });
		});
	}

	filterChart(e, data) {
		this.els._chartFilterLinkTerm.removeClass('chart__filter-link--active');
		$(e.currentTarget).addClass('chart__filter-link--active');

		switch (e.currentTarget.text) {
			case 'Минута':
				// this.createChart(data.minute)
				this.createChart(data.day)
				break;
			case 'Час':
				this.createChart(data.year)
				// this.createChart(data.hour)
				break;
			case 'Неделя':
				this.createChart(data.week)
				break;
			case 'Месяц':
				// this.createChart(data.month)
				this.createChart(data.day)
				break;
			case 'Квартал':
				// this.createChart(data.quarter)
				this.createChart(data.day)
				break;
			case 'Год':
				this.createChart(data.year)
				break;
			case 'Все время':
				// this.createChart(data.allTime)
				this.createChart(data.year)
				break;
			default:
				this.createChart(data.day)
		}
	}
}
