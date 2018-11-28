import Base from '../../Base.js';
// import Chartist from 'chartist';
// import tooltip from 'chartist-plugin-tooltips';

// import Highcharts from 'highcharts';
import Highcharts from 'highcharts/highstock';
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

export default class Chart extends Base {
	initDOMElements(e) {
				this.els = {
					_chartTabLink: $('.chart__tab-link'),
					_chartTabContent: $('.chart__tab-content'),
					_chartFilterListTerm: $('.chart__filter--term'),
					_chartFilterLinkTerm: $('.chart__filter--term .chart__filter-link'),
					_chartFilterLink: $('.chart__filter-link')
				}
		}

	onDOMReady(e) {

		this.els._chartTabLink.click((e) => this.tabToggler(e));
		this.els._chartFilterLink.click((e) => this.filterToggler(e));



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

		// this.createChart(data.day);
		// this.els._chartFilterLinkTerm.click((e) => this.filterChart(e, data));
		// this.els._chartFilterListTerm.on('click', 'a:not(.chart__filter-link--active)', 
		// 	(e) => this.filterChart(e, data));
		


		Highcharts.setOptions({
			// deleting word 'zoom'
			lang: {
				rangeSelectorZoom: ''
			}
		});

		// $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {
			// window.chart = new Highcharts.StockChart({
	

		

		// все время
		$('.chart__filter-link').eq(7).on('click', function() {
			var chart = Highcharts.charts[0];
			chart.xAxis[0].setExtremes(chart.xAxis[1].min, chart.xAxis[1].max);

			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
			    yAxis: [{
					tickInterval: 20,
				}],
			})
		});

		// год
		$('.chart__filter-link').eq(6).on('click', function() {
			var chart = Highcharts.charts[0];
			// var chart = Highcharts.charts[0],
			// 		max = chart.xAxis[0].max,
			// 		interval = 365 * 24 * 60 * 60 * 1000
			// 	chart.xAxis[0].setExtremes(max - interval, max);

			var currentDate = new Date();
			var currentYear = currentDate.getFullYear();
			var currentMonth = currentDate.getMonth();
			var currentDay = currentDate.getDate();

			var beforeDate = new Date(currentYear - 1, currentMonth, currentDay);
			var beforeYear = beforeDate.getFullYear();
			var beforeMonth = beforeDate.getMonth();
			var beforeDay = beforeDate.getDate();

			chart.xAxis[0].setExtremes(Date.UTC(beforeYear, beforeMonth, beforeDay), 
									   Date.UTC(currentYear, currentMonth, currentDay));

			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
			    yAxis: [{
					tickInterval: 20,
				}],
			})
		});

		// квартал
		$('.chart__filter-link').eq(5).on('click', function() {
			var chart = Highcharts.charts[0];
			// var chart = Highcharts.charts[0],
			// 		max = chart.xAxis[0].max,
			// 		interval = 120 * 24 * 60 * 60 * 1000
					
			// 	chart.xAxis[0].setExtremes(max - interval, max);

			var currentDate = new Date();
			var currentYear = currentDate.getFullYear();
			var currentMonth = currentDate.getMonth();
			var currentDay = currentDate.getDate();

			var beforeDate = new Date(currentYear, currentMonth - 4, currentDay);
			var beforeYear = beforeDate.getFullYear();
			var beforeMonth = beforeDate.getMonth();
			var beforeDay = beforeDate.getDate();

			chart.xAxis[0].setExtremes(Date.UTC(beforeYear, beforeMonth, beforeDay), 
									   Date.UTC(currentYear, currentMonth, currentDay));

			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
			    yAxis: [{
					tickInterval: 10,
				}],
			})
		});

		// месяц
		$('.chart__filter-link').eq(4).on('click', function() {
			var chart = Highcharts.charts[0];
			// var chart = Highcharts.charts[0],
		 //    	max = chart.xAxis[0].max,
		 //    	interval = 30 * 24 * 60 * 60 * 1000
					
		//   	chart.xAxis[0].setExtremes(max - interval, max);

			var currentDate = new Date();
			var currentYear = currentDate.getFullYear();
			var currentMonth = currentDate.getMonth();
			var currentDay = currentDate.getDate();

			var beforeDate = new Date(currentYear, currentMonth - 1, currentDay);
			var beforeYear = beforeDate.getFullYear();
			var beforeMonth = beforeDate.getMonth();
			var beforeDay = beforeDate.getDate();

			chart.xAxis[0].setExtremes(Date.UTC(beforeYear, beforeMonth, beforeDay), 
									   Date.UTC(currentYear, currentMonth, currentDay));

			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: true
			            }
			        }
			    },
			    yAxis: [{
					tickInterval: 10,
				}],
			})
		});

		// неделя
		$('.chart__filter-link').eq(3).on('click', function() {
			var chart = Highcharts.charts[0];
			// var chart = Highcharts.charts[0],
				// 	max = chart.xAxis[0].max,
				// 	interval = 7 * 24 * 60 * 60 * 1000

				// chart.xAxis[0].setExtremes(max - interval, max);

			var currentDate = new Date();
			var currentYear = currentDate.getFullYear();
			var currentMonth = currentDate.getMonth();
			var currentDay = currentDate.getDate();

			var beforeDate = new Date(currentYear, currentMonth, currentDay - 7);
			var beforeYear = beforeDate.getFullYear();
			var beforeMonth = beforeDate.getMonth();
			var beforeDay = beforeDate.getDate();

			chart.xAxis[0].setExtremes(Date.UTC(beforeYear, beforeMonth, beforeDay), 
									   Date.UTC(currentYear, currentMonth, currentDay));

			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: true
			            }
			        }
			    },
				yAxis: {
					tickInterval: 5,
				},
			})
		});

		// день
		$('.chart__filter-link').eq(2).on('click', function() {
			var chart = Highcharts.charts[0],
		    	max = chart.xAxis[0].max,
		    	interval = 24 * 60 * 60 * 1000;
					
		  	chart.xAxis[0].setExtremes(max - interval, max);
			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: true
			            }
			        }
			    },
			    yAxis: {
					tickInterval: 5,
			    },
			  //   xAxis: {
					// tickInterval: 24 * 60 * 60 * 1000,
			  //   }
			})
		});

		// час
		$('.chart__filter-link').eq(1).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 60 * 60 * 1000;
					
			chart.xAxis[0].setExtremes(max - interval, max);

			chart.update({
			    plotOptions: {
			        series: {
			            marker: {
			                enabled: true
			            }
			        }
			    },
			    yAxis: {
					tickInterval: 5,
			    }
			})
		});

		// минута
		$('.chart__filter-link').eq(0).on('click', function() {
				 // var chart = Highcharts.charts[0];
			var chart = Highcharts.charts[0],
		    	max = chart.xAxis[0].max,
		    	interval = 60 * 1000
					
		  	chart.xAxis[0].setExtremes(max - interval, max);

			// var currentDate = new Date();
   //      	var currentYear = currentDate.getFullYear();
   //      	var currentMonth = currentDate.getMonth();
   //      	var currentDay = currentDate.getDate();
   //      	var currentHour = currentDate.getHours();
   //      	var currentMinute = currentDate.getMinutes();
   //      	var currentSecond = currentDate.getSeconds();

   //      	var beforeDate = new Date(currentYear, currentMonth, currentDay - 1, currentHour, currentMinute, currentSecond);
   //      	var beforeYear = beforeDate.getFullYear();
   //      	var beforeMonth = beforeDate.getMonth();
   //      	var beforeDay = beforeDate.getDate();
   //      	var beforeMinute = beforeDate.getMinutes();
   //      	var beforeSeconds = beforeDate.getSeconds();
   //      	var beforeHour = beforeDate.getHours();
   //      	var beforeMinute = beforeDate.getMinutes();
   //      	var beforeSecond = beforeDate.getSeconds();

   //      	console.log(chart.xAxis[0]);



   //      	chart.xAxis[0].setExtremes(Date.UTC(beforeYear, beforeMonth, beforeDay, beforeHour, beforeMinute, beforeSecond), 
   //                               	   Date.UTC(currentYear, currentMonth, currentDay, currentHour, currentMinute, currentSecond));


   			chart.update({
				plotOptions: {
				    series: {
				        marker: {
				            enabled: true
				        }
				    }
				},
				yAxis: {
					tickInterval: 5,
				}
				    // xAxis: {
        //     			tickInterval: 6 * 60 * 60 * 1000,
        //     		}
			})
		});


	// $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {
		// Create the chart
		Highcharts.stockChart('diagram', {

			chart: {
				height: 270
			},

			credits: {
				enabled: false
		},

		rangeSelector: false,
		// rangeSelector: {
		// 						verticalAlign: 'bottom',
		// 						marginTop: 20,
		// 						buttons: [{
		// 								type: 'minute',
		// 								count: 100,
		// 								text: 'Минута'
		// 						}, {
		// 								type: 'hour',
		// 								count: 1,
		// 								text: 'Час'
		// 						}, {
		// 								type: 'day',
		// 								count: 1,
		// 								text: 'День'
		// 						}, {
		// 								type: 'week',
		// 								count: 1,
		// 								text: 'Неделя'
		// 						}, {
		// 								type: 'month',
		// 								count: 1,
		// 								text: 'Месяц'
		// 						}, {
		// 								type: 'month',
		// 								count: 4,
		// 								text: 'Квартал'
		// 						}, {
		// 								type: 'year',
		// 								count: 1,
		// 								text: 'Год'
		// 						}, {
		// 								type: 'all',
		// 								text: 'Все время'
		// 						}],
		// 						buttonTheme: {
		// 								width: 'auto',
		// 								fill: 'none',
		// 							stroke: 'none',
		// 							'stroke-width': 0,
		// 							padding: 5,
		// 							r: 15,
		// 							style: {
		// 								fontFamily: 'Museo Sans Cyrl',
		// 								fontSize: '12px',
		// 									color: '#252525',
		// 									fontWeight: 500,
		// 							},
		// 							states: {
		// 									hover: {
		// 										fill: '#5435d1',
		// 										style: {
		// 													color: 'white'
		// 											}
		// 									},
		// 									select: {
		// 											fill: '#5435d1',
		// 											style: {
		// 													color: 'white'
		// 											}
		// 									}
		// 									// disabled: { ... }
		// 							}
		// 						},
		// 						inputEnabled: false, // it supports only days
		// 						// selected: 4 // all
		// 				},

		yAxis: [{
			gridLineWidth: 0,
			// minorGridLineWidth: 0,
			crosshair: {
				dashStyle: 'dot',
				color: '#5435d1'
			},
			opposite: false,
			startOnTick: false,
			tickInterval: 20,
		}],
		scrollbar: {
			enabled: false
		},
		tooltip: {
			backgroundColor: null,
			borderWidth: 0,
			shadow: false,
			formatter: function () {
				var result = '$';
					result += this.y;
				return result;
			},
			split: false,
			positioner: function(boxWidth, boxHeight, point) {
				return {
					x: point.plotX + 15,
					y: point.plotY + 15
				};
			},
		},
		navigator: {
			// enabled: false
			height: 0 
		},	            
		xAxis: {
			type: 'datetime',
			crosshair: {
				dashStyle: 'dot',
				color: '#5435d1'
			},
			gridLineWidth: 1,
			// showFirstLabel: true,
   //     		showLastLabel: true,

			events: {
				setExtremes: function(e) {
					if(typeof(e.rangeSelectorButton)!== 'undefined')
					{
						// console.log('count: '+e.rangeSelectorButton.count + 
						// 			  ' text: ' +e.rangeSelectorButton.text + 
						// 			  ' type:' + e.rangeSelectorButton.type);
					}
				}
			},


			// startOnTick: false,
	 //          endOnTick: false,
						// minPadding: 0,
						// maxPadding: 0,

				 //    tickPositioner: function () {
					// 	console.log(this);
					// 	console.log(this.tickInterval);
					// 	console.log(this.chart.rangeSelector);
					// 	// console.log(this.chart.rangeSelector.buttonGroup);
					// 	var positions = [];
					// 	var positions = [],
					//         tick = Math.floor(this.dataMin),
					//         increment = Math.ceil((this.dataMax - this.dataMin) / 6);

					//     if (this.dataMax !== null && this.dataMin !== null) {
					//         for (tick; tick - increment <= this.dataMax; tick += increment) {
					//             positions.push(tick);
					//         }
					//     }
					//     return positions;
					// },
			},
			series: [{
				data: [

		[
				1480343400000,
				111.57
		],
		[
				1480429800000,
				111.46
		],
		[
				1480516200000,
				110.52
		],
		[
				1480602600000,
				109.49
		],
		[
				1480689000000,
				109.9
		],
		[
				1480948200000,
				109.11
		],
		[
				1481034600000,
				109.95
		],
		[
				1481121000000,
				111.03
		],
		[
				1481207400000,
				112.12
		],
		[
				1481293800000,
				113.95
		],
		[
				1481553000000,
				113.3
		],
		[
				1481639400000,
				115.19
		],
		[
				1481725800000,
				115.19
		],
		[
				1481812200000,
				115.82
		],
		[
				1481898600000,
				115.97
		],
		[
				1482157800000,
				116.64
		],
		[
				1482244200000,
				116.95
		],
		[
				1482330600000,
				117.06
		],
		[
				1482417000000,
				116.29
		],
		[
				1482503400000,
				116.52
		],
		[
				1482849000000,
				117.26
		],
		[
				1482935400000,
				116.76
		],
		[
				1483021800000,
				116.73
		],
		[
				1483108200000,
				115.82
		],
		[
				1483453800000,
				116.15
		],
		[
				1483540200000,
				116.02
		],
		[
				1483626600000,
				116.61
		],
		[
				1483713000000,
				117.91
		],
		[
				1483972200000,
				118.99
		],
		[
				1484058600000,
				119.11
		],
		[
				1484145000000,
				119.75
		],
		[
				1484231400000,
				119.25
		],
		[
				1484317800000,
				119.04
		],
		[
				1484663400000,
				120
		],
		[
				1484749800000,
				119.99
		],
		[
				1484836200000,
				119.78
		],
		[
				1484922600000,
				120
		],
		[
				1485181800000,
				120.08
		],
		[
				1485268200000,
				119.97
		],
		[
				1485354600000,
				121.88
		],
		[
				1485441000000,
				121.94
		],
		[
				1485527400000,
				121.95
		],
		[
				1485786600000,
				121.63
		],
		[
				1485873000000,
				121.35
		],
		[
				1485959400000,
				128.75
		],
		[
				1486045800000,
				128.53
		],
		[
				1486132200000,
				129.08
		],
		[
				1486391400000,
				130.29
		],
		[
				1486477800000,
				131.53
		],
		[
				1486564200000,
				132.04
		],
		[
				1486650600000,
				132.42
		],
		[
				1486737000000,
				132.12
		],
		[
				1486996200000,
				133.29
		],
		[
				1487082600000,
				135.02
		],
		[
				1487169000000,
				135.51
		],
		[
				1487255400000,
				135.35
		],
		[
				1487341800000,
				135.72
		],
		[
				1487687400000,
				136.7
		],
		[
				1487773800000,
				137.11
		],
		[
				1487860200000,
				136.53
		],
		[
				1487946600000,
				136.66
		],
		[
				1488205800000,
				136.93
		],
		[
				1488292200000,
				136.99
		],
		[
				1488378600000,
				139.79
		],
		[
				1488465000000,
				138.96
		],
		[
				1488551400000,
				139.78
		],
		[
				1488810600000,
				139.34
		],
		[
				1488897000000,
				139.52
		],
		[
				1488983400000,
				139
		],
		[
				1489069800000,
				138.68
		],
		[
				1489156200000,
				139.14
		],
		[
				1489411800000,
				139.2
		],
		[
				1489498200000,
				138.99
		],
		[
				1489584600000,
				140.46
		],
		[
				1489671000000,
				140.69
		],
		[
				1489757400000,
				139.99
		],
		[
				1490016600000,
				141.46
		],
		[
				1490103000000,
				139.84
		],
		[
				1490189400000,
				141.42
		],
		[
				1490275800000,
				140.92
		],
		[
				1490362200000,
				140.64
		],
		[
				1490621400000,
				140.88
		],
		[
				1490707800000,
				143.8
		],
		[
				1490794200000,
				144.12
		],
		[
				1490880600000,
				143.93
		],
		[
				1490967000000,
				143.66
		],
		[
				1491226200000,
				143.7
		],
		[
				1491312600000,
				144.77
		],
		[
				1491399000000,
				144.02
		],
		[
				1491485400000,
				143.66
		],
		[
				1491571800000,
				143.34
		],
		[
				1491831000000,
				143.17
		],
		[
				1491917400000,
				141.63
		],
		[
				1492003800000,
				141.8
		],
		[
				1492090200000,
				141.05
		],
		[
				1492435800000,
				141.83
		],
		[
				1492522200000,
				141.2
		],
		[
				1492608600000,
				140.68
		],
		[
				1492695000000,
				142.44
		],
		[
				1492781400000,
				142.27
		],
		[
				1493040600000,
				143.64
		],
		[
				1493127000000,
				144.53
		],
		[
				1493213400000,
				143.68
		],
		[
				1493299800000,
				143.79
		],
		[
				1493386200000,
				143.65
		],
		[
				1493645400000,
				146.58
		],
		[
				1493731800000,
				147.51
		],
		[
				1493818200000,
				147.06
		],
		[
				1493904600000,
				146.53
		],
		[
				1493991000000,
				148.96
		],
		[
				1494250200000,
				153.01
		],
		[
				1494336600000,
				153.99
		],
		[
				1494423000000,
				153.26
		],
		[
				1494509400000,
				153.95
		],
		[
				1494595800000,
				156.1
		],
		[
				1494855000000,
				155.7
		],
		[
				1494941400000,
				155.47
		],
		[
				1495027800000,
				150.25
		],
		[
				1495114200000,
				152.54
		],
		[
				1495200600000,
				153.06
		],
		[
				1495459800000,
				153.99
		],
		[
				1495546200000,
				153.8
		],
		[
				1495632600000,
				153.34
		],
		[
				1495719000000,
				153.87
		],
		[
				1495805400000,
				153.61
		],
		[
				1496151000000,
				153.67
		],
		[
				1496237400000,
				152.76
		],
		[
				1496323800000,
				153.18
		],
		[
				1496410200000,
				155.45
		],
		[
				1496669400000,
				153.93
		],
		[
				1496755800000,
				154.45
		],
		[
				1496842200000,
				155.37
		],
		[
				1496928600000,
				154.99
		],
		[
				1497015000000,
				148.98
		],
		[
				1497274200000,
				145.42
		],
		[
				1497360600000,
				146.59
		],
		[
				1497447000000,
				145.16
		],
		[
				1497533400000,
				144.29
		],
		[
				1497619800000,
				142.27
		],
		[
				1497879000000,
				146.34
		],
		[
				1497965400000,
				145.01
		],
		[
				1498051800000,
				145.87
		],
		[
				1498138200000,
				145.63
		],
		[
				1498224600000,
				146.28
		],
		[
				1498483800000,
				145.82
		],
		[
				1498570200000,
				143.73
		],
		[
				1498656600000,
				145.83
		],
		[
				1498743000000,
				143.68
		],
		[
				1498829400000,
				144.02
		],
		[
				1499088600000,
				143.5
		],
		[
				1499261400000,
				144.09
		],
		[
				1499347800000,
				142.73
		],
		[
				1499434200000,
				144.18
		],
		[
				1499693400000,
				145.06
		],
		[
				1499779800000,
				145.53
		],
		[
				1499866200000,
				145.74
		],
		[
				1499952600000,
				147.77
		],
		[
				1500039000000,
				149.04
		],
		[
				1500298200000,
				149.56
		],
		[
				1500384600000,
				150.08
		],
		[
				1500471000000,
				151.02
		],
		[
				1500557400000,
				150.34
		],
		[
				1500643800000,
				150.27
		],
		[
				1500903000000,
				152.09
		],
		[
				1500989400000,
				152.74
		],
		[
				1501075800000,
				153.46
		],
		[
				1501162200000,
				150.56
		],
		[
				1501248600000,
				149.5
		],
		[
				1501507800000,
				148.73
		],
		[
				1501594200000,
				150.05
		],
		[
				1501680600000,
				157.14
		],
		[
				1501767000000,
				155.57
		],
		[
				1501853400000,
				156.39
		],
		[
				1502112600000,
				158.81
		],
		[
				1502199000000,
				160.08
		],
		[
				1502285400000,
				161.06
		],
		[
				1502371800000,
				155.32
		],
		[
				1502458200000,
				157.48
		],
		[
				1502717400000,
				159.85
		],
		[
				1502803800000,
				161.6
		],
		[
				1502890200000,
				160.95
		],
		[
				1502976600000,
				157.86
		],
		[
				1503063000000,
				157.5
		],
		[
				1503322200000,
				157.21
		],
		[
				1503408600000,
				159.78
		],
		[
				1503495000000,
				159.98
		],
		[
				1503581400000,
				159.27
		],
		[
				1503667800000,
				159.86
		],
		[
				1503927000000,
				161.47
		],
		[
				1504013400000,
				162.91
		],
		[
				1504099800000,
				163.35
		],
		[
				1504186200000,
				164
		],
		[
				1504272600000,
				164.05
		],
		[
				1504618200000,
				162.08
		],
		[
				1504704600000,
				161.91
		],
		[
				1504791000000,
				161.26
		],
		[
				1504877400000,
				158.63
		],
		[
				1505136600000,
				161.5
		],
		[
				1505223000000,
				160.86
		],
		[
				1505309400000,
				159.65
		],
		[
				1505395800000,
				158.28
		],
		[
				1505482200000,
				159.88
		],
		[
				1505741400000,
				158.67
		],
		[
				1505827800000,
				158.73
		],
		[
				1505914200000,
				156.07
		],
		[
				1506000600000,
				153.39
		],
		[
				1506087000000,
				151.89
		],
		[
				1506346200000,
				150.55
		],
		[
				1506432600000,
				153.14
		],
		[
				1506519000000,
				154.23
		],
		[
				1506605400000,
				153.28
		],
		[
				1506691800000,
				154.12
		],
		[
				1506951000000,
				153.81
		],
		[
				1507037400000,
				154.48
		],
		[
				1507123800000,
				153.48
		],
		[
				1507210200000,
				155.39
		],
		[
				1507296600000,
				155.3
		],
		[
				1507555800000,
				155.84
		],
		[
				1507642200000,
				155.9
		],
		[
				1507728600000,
				156.55
		],
		[
				1507815000000,
				156
		],
		[
				1507901400000,
				156.99
		],
		[
				1508160600000,
				159.88
		],
		[
				1508247000000,
				160.47
		],
		[
				1508333400000,
				159.76
		],
		[
				1508419800000,
				155.98
		],
		[
				1508506200000,
				156.25
		],
		[
				1508765400000,
				156.17
		],
		[
				1508851800000,
				157.1
		],
		[
				1508938200000,
				156.41
		],
		[
				1509024600000,
				157.41
		],
		[
				1509111000000,
				163.05
		],
		[
				1509370200000,
				166.72
		],
		[
				1509456600000,
				169.04
		],
		[
				1509543000000,
				166.89
		],
		[
				1509629400000,
				168.11
		],
		[
				1509715800000,
				172.5
		],
		[
				1509978600000,
				174.25
		],
		[
				1510065000000,
				174.81
		],
		[
				1510151400000,
				176.24
		],
		[
				1510237800000,
				175.88
		],
		[
				1510324200000,
				174.67
		],
		[
				1510583400000,
				173.97
		],
		[
				1510669800000,
				171.34
		],
		[
				1510756200000,
				169.08
		],
		[
				1510842600000,
				171.1
		],
		[
				1510929000000,
				170.15
		],
		[
				1511188200000,
				169.98
		],
		[
				1511274600000,
				173.14
		],
		[
				1511361000000,
				174.96
		],
		[
				1511533800000,
				174.97
		],
		[
				1511793000000,
				174.09
		],
		[
				1511879400000,
				173.07
		],
		[
				1511965800000,
				169.48
		],
		[
				1512052200000,
				171.85
		],
		[
				1512138600000,
				171.05
		],
		[
				1512397800000,
				169.8
		],
		[
				1512484200000,
				169.64
		],
		[
				1512570600000,
				169.01
		],
		[
				1512657000000,
				169.32
		],
		[
				1512743400000,
				169.37
		],
		[
				1513002600000,
				172.67
		],
		[
				1513089000000,
				171.7
		],
		[
				1513175400000,
				172.27
		],
		[
				1513261800000,
				172.22
		],
		[
				1513348200000,
				173.97
		],
		[
				1513607400000,
				176.42
		],
		[
				1513693800000,
				174.54
		],
		[
				1513780200000,
				174.35
		],
		[
				1513866600000,
				175.01
		],
		[
				1513953000000,
				175.01
		],
		[
				1514298600000,
				170.57
		],
		[
				1514385000000,
				170.6
		],
		[
				1514471400000,
				171.08
		],
		[
				1514557800000,
				169.23
		],
		[
				1514903400000,
				172.26
		],
		[
				1514989800000,
				172.23
		],
		[
				1515076200000,
				173.03
		],
		[
				1515162600000,
				175
		],
		[
				1515421800000,
				174.35
		],
		[
				1515508200000,
				174.33
		],
		[
				1515594600000,
				174.29
		],
		[
				1515681000000,
				175.28
		],
		[
				1515767400000,
				177.09
		],
		[
				1516113000000,
				176.19
		],
		[
				1516199400000,
				179.1
		],
		[
				1516285800000,
				179.26
		],
		[
				1516372200000,
				178.46
		],
		[
				1516631400000,
				177
		],
		[
				1516717800000,
				177.04
		],
		[
				1516804200000,
				174.22
		],
		[
				1516890600000,
				171.11
		],
		[
				1516977000000,
				171.51
		],
		[
				1517236200000,
				167.96
		],
		[
				1517322600000,
				166.97
		],
		[
				1517409000000,
				167.43
		],
		[
				1517495400000,
				167.78
		],
		[
				1517581800000,
				160.5
		],
		[
				1517841000000,
				156.49
		],
		[
				1517927400000,
				163.03
		],
		[
				1518013800000,
				159.54
		],
		[
				1518100200000,
				155.15
		],
		[
				1518186600000,
				156.41
		],
		[
				1518445800000,
				162.71
		],
		[
				1518532200000,
				164.34
		],
		[
				1518618600000,
				167.37
		],
		[
				1518705000000,
				172.99
		],
		[
				1518791400000,
				172.43
		],
		[
				1519137000000,
				171.85
		],
		[
				1519223400000,
				171.07
		],
		[
				1519309800000,
				172.5
		],
		[
				1519396200000,
				175.5
		],
		[
				1519655400000,
				178.97
		],
		[
				1519741800000,
				178.39
		],
		[
				1519828200000,
				178.12
		],
		[
				1519914600000,
				175
		],
		[
				1520001000000,
				176.21
		],
		[
				1520260200000,
				176.82
		],
		[
				1520346600000,
				176.67
		],
		[
				1520433000000,
				175.03
		],
		[
				1520519400000,
				176.94
		],
		[
				1520605800000,
				179.98
		],
		[
				1520861400000,
				181.72
		],
		[
				1520947800000,
				179.97
		],
		[
				1521034200000,
				178.44
		],
		[
				1521120600000,
				178.65
		],
		[
				1521207000000,
				178.02
		],
		[
				1521466200000,
				175.3
		],
		[
				1521552600000,
				175.24
		],
		[
				1521639000000,
				171.27
		],
		[
				1521725400000,
				168.85
		],
		[
				1521811800000,
				164.94
		],
		[
				1522071000000,
				172.77
		],
		[
				1522157400000,
				168.34
		],
		[
				1522243800000,
				166.48
		],
		[
				1522330200000,
				167.78
		],
		[
				1522675800000,
				166.68
		],
		[
				1522762200000,
				168.39
		],
		[
				1522848600000,
				171.61
		],
		[
				1522935000000,
				172.8
		],
		[
				1523021400000,
				168.38
		],
		[
				1523280600000,
				170.05
		],
		[
				1523367000000,
				173.25
		],
		[
				1523453400000,
				172.44
		],
		[
				1523539800000,
				174.14
		],
		[
				1523626200000,
				174.73
		],
		[
				1523885400000,
				175.82
		],
		[
				1523971800000,
				178.24
		],
		[
				1524058200000,
				177.84
		],
		[
				1524144600000,
				172.8
		],
		[
				1524231000000,
				165.72
		],
		[
				1524490200000,
				165.24
		],
		[
				1524576600000,
				162.94
		],
		[
				1524663000000,
				163.65
		],
		[
				1524749400000,
				164.22
		],
		[
				1524835800000,
				162.32
		],
		[
				1525095000000,
				165.26
		],
		[
				1525181400000,
				169.1
		],
		[
				1525267800000,
				176.57
		],
		[
				1525354200000,
				176.89
		],
		[
				1525440600000,
				183.83
		],
		[
				1525699800000,
				185.16
		],
		[
				1525786200000,
				186.05
		],
		[
				1525872600000,
				187.36
		],
		[
				1525959000000,
				190.04
		],
		[
				1526045400000,
				188.59
		],
		[
				1526304600000,
				188.15
		],
		[
				1526391000000,
				186.44
		],
		[
				1526477400000,
				188.18
		],
		[
				1526563800000,
				186.99
		],
		[
				1526650200000,
				186.31
		],
		[
				1526909400000,
				187.63
		],
		[
				1526995800000,
				187.16
		],
		[
				1527082200000,
				188.36
		],
		[
				1527168600000,
				188.15
		],
		[
				1527255000000,
				188.58
		],
		[
				1527600600000,
				187.9
		],
		[
				1527687000000,
				187.5
		],
		[
				1527773400000,
				186.87
		],
		[
				1527859800000,
				190.24
		],
		[
				1528119000000,
				191.83
		],
		[
				1528205400000,
				193.31
		],
		[
				1528291800000,
				193.98
		],
		[
				1528378200000,
				193.46
		],
		[
				1528464600000,
				191.7
		],
		[
				1528723800000,
				191.23
		],
		[
				1528810200000,
				192.28
		],
		[
				1528896600000,
				190.7
		],
		[
				1528983000000,
				190.8
		],
		[
				1529069400000,
				188.84
		],
		[
				1529328600000,
				188.74
		],
		[
				1529415000000,
				185.69
		],
		[
				1529501400000,
				186.5
		],
		[
				1529587800000,
				185.46
		],
		[
				1529674200000,
				184.92
		],
		[
				1529933400000,
				182.17
		],
		[
				1530019800000,
				184.43
		],
		[
				1530106200000,
				184.16
		],
		[
				1530192600000,
				185.5
		],
		[
				1530279000000,
				185.11
		],
		[
				1530538200000,
				187.18
		],
		[
				1530624600000,
				183.92
		],
		[
				1530797400000,
				185.4
		],
		[
				1530883800000,
				187.97
		],
		[
				1531143000000,
				190.58
		],
		[
				1531229400000,
				190.35
		],
		[
				1531315800000,
				187.88
		],
		[
				1531402200000,
				191.03
		],
		[
				1531488600000,
				191.33
		],
		[
				1531747800000,
				190.91
		],
		[
				1531834200000,
				191.45
		],
		[
				1531920600000,
				190.4
		],
		[
				1532007000000,
				191.88
		],
		[
				1532093400000,
				191.44
		],
		[
				1532352600000,
				191.61
		],
		[
				1532439000000,
				193
		],
		[
				1532525400000,
				194.82
		],
		[
				1532611800000,
				194.21
		],
		[
				1532698200000,
				190.98
		],
		[
				1532957400000,
				189.91
		],
		[
				1533043800000,
				190.29
		],
		[
				1533130200000,
				201.5
		],
		[
				1533216600000,
				207.39
		],
		[
				1533303000000,
				207.99
		],
		[
				1533562200000,
				209.07
		],
		[
				1533648600000,
				207.11
		],
		[
				1533735000000,
				207.25
		],
		[
				1533821400000,
				208.88
		],
		[
				1533907800000,
				207.53
		],
		[
				1534167000000,
				208.87
		],
		[
				1534253400000,
				209.75
		],
		[
				1534339800000,
				210.24
		],
		[
				1534426200000,
				213.32
		],
		[
				1534512600000,
				217.58
		],
		[
				1534771800000,
				215.46
		],
		[
				1534858200000,
				215.04
		],
		[
				1534944600000,
				215.05
		],
		[
				1535031000000,
				215.49
		],
		[
				1535117400000,
				216.16
		],
		[
				1535376600000,
				217.94
		],
		[
				1535463000000,
				219.7
		],
		[
				1535549400000,
				222.98
		],
		[
				1535635800000,
				225.03
		],
		[
				1535722200000,
				227.63
		],
		[
				1536067800000,
				228.36
		],
		[
				1536154200000,
				226.87
		],
		[
				1536240600000,
				223.1
		],
		[
				1536327000000,
				221.3
		],
		[
				1536586200000,
				218.33
		],
		[
				1536672600000,
				223.85
		],
		[
				1536759000000,
				221.07
		],
		[
				1536845400000,
				226.41
		],
		[
				1536931800000,
				223.84
		],
		[
				1537191000000,
				217.88
		],
		[
				1537277400000,
				218.24
		],
		[
				1537363800000,
				218.37
		],
		[
				1537450200000,
				220.03
		],
		[
				1537536600000,
				217.66
		],
		[
				1537795800000,
				220.79
		],
		[
				1537882200000,
				222.19
		],
		[
				1537968600000,
				220.42
		],
		[
				1538055000000,
				224.95
		],
		[
				1538141400000,
				225.74
		],
		[
				1538400600000,
				227.26
		],
		[
				1538487000000,
				229.28
		],
		[
				1538573400000,
				232.07
		],
		[
				1538659800000,
				227.99
		],
		[
				1538746200000,
				224.29
		],
		[
				1539005400000,
				223.77
		],
		[
				1539091800000,
				226.87
		],
		[
				1539178200000,
				216.36
		],
		[
				1539264600000,
				214.45
		],
		[
				1539351000000,
				222.11
		],
		[
				1539610200000,
				217.36
		],
		[
				1539696600000,
				222.15
		],
		[
				1539783000000,
				221.19
		],
		[
				1539869400000,
				216.02
		],
		[
				1539955800000,
				219.31
		],
		[
				1540215000000,
				220.65
		],
		[
				1540301400000,
				222.73
		],
		[
				1540387800000,
				215.09
		],
		[
				1540474200000,
				203.77
		],
		[
				1541601000000,
				209.95
		],
		[
				1541687400000,
				208.49
		],
		[
				1541773800000,
				204.47
		],
		[
				1542033000000,
				194.17
		],
		[
				1542119400000,
				192.23
		],
		[
				1542205800000,
				186.8
		],
		[
				1542292200000,
				191.41
		],
		[
				1542378600000,
				193.53
		],
		[
				1542637800000,
				185.86
		],
		[
				1542724200000,
				176.98
		],
		[
				1542810600000,
				176.78
		],
		[
				1542983400000,
				172.29
		],
		[
			1543310263000,
			170.15
		],
		[
			1543310263000,
			170.15
		],
		[
			1543310383000,
			180.75
		]
					],
			color: '#5435d1',
				marker: {
					lineWidth: 2,
					radius: 4,
					// enabled: function() {
	    //             	console.log(this)
	    //                 // if(this.y>20.0){
	    //                     return true;
	    //                 // }
	    //             }
				},
				states: {
					hover: false
				}
			}]
		});
	// });

/*
			// все время
			$('.chart__filter-link').eq(7).on('click', function() {
			var chart = Highcharts.charts[0];
			chart.xAxis[0].setExtremes(chart.xAxis[1].min, chart.xAxis[1].max);
			// console.log(chart);
		});

			// год
		$('.chart__filter-link').eq(6).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 365 * 24 * 60 * 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});

		// квартал
		$('.chart__filter-link').eq(5).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 120 * 24 * 60 * 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});

		// месяц
		$('.chart__filter-link').eq(4).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 30 * 24 * 60 * 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});

		// неделя
		$('.chart__filter-link').eq(3).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 7 * 24 * 60 * 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});

		// день
		$('.chart__filter-link').eq(2).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 24 * 60 * 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});

		// час
		$('.chart__filter-link').eq(1).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 60 * 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});

		// минута
		$('.chart__filter-link').eq(0).on('click', function() {
			var chart = Highcharts.charts[0],
					max = chart.xAxis[0].max,
					interval = 60 * 1000
					
				chart.xAxis[0].setExtremes(max - interval, max);
		});*/




		/*Highcharts.chart('diagram', {

			chart: {
						height: 170
				},
			title: false,
			legend: false,
			tooltip: {
				backgroundColor: null,
				borderWidth: 0,
				shadow: false,
						formatter: function () {
								var result = '$';
									result += this.y;
								return result;
						},
						positioner: function(boxWidth, boxHeight, point) {
					return {
							x: point.plotX + 20,
							y: point.plotY + 20
					};
						}
				},
			yAxis: {
						title: false,
				crosshair: {
					dashStyle: 'dot',
					color: '#5435d1'
				},
				gridLineWidth: 0,
			},
				xAxis: {
						type: 'datetime',
						tickInterval: 2 * 3600 * 1000,
						dateTimeLabelFormats: {
								// day: '%e',
								day: '%H:%M',
						},
						crosshair: {
					dashStyle: 'dot',
					color: '#5435d1'
				},
				gridLineWidth: 1,
				},
				series: [{
						data: [
								315, 272, 234, 289, 300,
					215, 172, 224, 109, 150,
					215, 232, 314.86
				],
				color: '#5435d1',
				// pointStart: Date.UTC(2018, 0, 1),
						pointInterval: 2 * 3600 * 1000,
						marker: {
								lineWidth: 2,
								radius: 4
						},
						states: {
									hover: false
							}
				}]
		});*/


		/*Highcharts.chart('diagram', {
			chart: {
						height: 170
				},
			title: false,
			legend: false,
			tooltip: {
				backgroundColor: null,
				borderWidth: 0,
				shadow: false,
						formatter: function () {
								var result = '$';
									result += this.y;
								return result;
						},
						positioner: function(boxWidth, boxHeight, point) {
					return {
							x: point.plotX + 20,
							y: point.plotY + 20
					};
						}
				},
			xAxis: {
							tickInterval: 24 * 3600 * 1000, // one day
							type: 'datetime',
							crosshair: {
					dashStyle: 'dot',
					color: '#5435d1'
				},
				gridLineWidth: 1,
				// categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
					},

					yAxis: {
						title: false,
				crosshair: {
					dashStyle: 'dot',
					color: '#5435d1'
				},
				gridLineWidth: 0,
			},

					series: [{
							data: [
								315, 272, 234, 289, 300,
					215, 172, 224, 109, 150,
					215, 232, 314.86
				],
				color: '#5435d1',
							pointStart: Date.UTC(2010, 0, 1),
							pointInterval: 24 * 3600 * 1000,
							// pointInterval: 3600 * 1000, // one hour

						marker: {
								lineWidth: 2,
								radius: 4
						},

						states: {
									hover: false
							}
					}]
		});*/





		// minutes * seconds * milliseconds: 30 * 60 * 1000
		// hours * seconds * milliseconds: 24 * 3600 * 1000
		// pointInterval: 3600 * 1000 // one hour




	}

	// createChart(data) {
	// 	var chart = new Chartist.Line('.ct-chart', {
	// 		labels: data.labels,
	// 		series: [
	// 			data.series
	// 		]
	// 	}, 
	// 	{
	// 		height: 150,
	// 		low: 0,
	// 		lineSmooth: false,
	// 		fullWidth: true,
	// 		/*axisY: {
	// 			offset: 0,
	// 				// showGrid: false,
	// 				showLabel: false
	// 			},*/
	// 		plugins: [
	// 			Chartist.plugins.tooltip({
	// 				currency: '$',
	// 				// anchorToPoint: true,
	// 				pointClass: 'ct-circle',
	// 				tooltipOffset: {
	// 					x: 0,
	// 					y: 30
	// 				},
	// 			})
	// 		]
	// 	});

	// 	// replace point to circle for making space between points & lines
	// 	chart.on('draw', function(data) {
	// 		if(data.type === 'point') {
	// 			var circle = new Chartist.Svg('circle', {
	// 				cx: [data.x],
	// 				cy: [data.y],
	// 				r: [4],
	// 				'ct:value': data.value.y,
	// 				'ct:meta': data.meta,
	// 				class: 'ct-circle',
	// 			});
	// 				data.element.replace(circle);
	// 		}
	// 			// $($('.ct-vertical')).css({ 'opacity': 0 });
	// 			// $($('.ct-vertical')[0]).css({ 'opacity': 1 });
	// 	});
	// }

	/*filterChart(e, data) {
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
	}*/

	tabToggler(e) {
		e.preventDefault();
		this.els._chartTabLink.removeClass('chart__tab-link--active')
		$(e.currentTarget).addClass('chart__tab-link--active')
		this.els._chartTabContent.removeClass('chart__tab-content--active');
		this.els._chartTabContent
			.eq($(e.currentTarget).parent().index())
			.addClass('chart__tab-content--active');
	}

	filterToggler(e) {
		e.preventDefault();
		this.els._chartFilterLink.removeClass('chart__filter-link--active');
		$(e.currentTarget).addClass('chart__filter-link--active');
	}
}
