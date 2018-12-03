import Base from '../../Base.js';
import Highcharts from 'highcharts/highstock';
import Exporting from 'highcharts/modules/exporting';

Exporting(Highcharts);

export default class Chart extends Base {
    initDOMElements(e) {
        this.els = {
            _chartTabLink: $('.chart__tab-link'),
            _chartTabContent: $('.chart__tab-content'),
            _chartFilterLink: $('.chart__filter-link')
        }
    }

    onDOMReady(e) {
        this.initChart();
        this.els._chartTabLink.click((e) => this.tabToggler(e));
        this.els._chartFilterLink.click((e) => this.filterToggler(e));
        this.els._chartFilterLink.click((e) => this.chooseChartPreriod(e));
        $('.chart__filter-link.chart__filter-link--active').click();

        // $('.chart__filter').on('click',
        // 	'a:not(.chart__filter-link--active)',
        // 	function() { console.log('hhhh') });
    }

    initChart() {
        Highcharts.stockChart('diagram', {
            chart: {
                height: 220
            },
            credits: {
                enabled: false
            },
            rangeSelector: false,
            yAxis: [{
                gridLineWidth: 0,
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
                positioner: function (boxWidth, boxHeight, point) {
                    return {
                        x: point.plotX + 15,
                        y: point.plotY + 15
                    };
                },
            },
            navigator: {
                height: 0
            },
            xAxis: {
                type: 'datetime',
                crosshair: {
                    dashStyle: 'dot',
                    color: '#5435d1'
                },
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%e. %b',
                    week: '%e. %b',
                    month: '%b \'%y',
                    year: '%Y'
                },
                gridLineWidth: 1,
            },
            series: [{
                color: '#5435d1',
                marker: {
                    lineWidth: 2,
                    radius: 4,
                },
                states: {
                    hover: false
                }
            }]
        });
    }

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

    chooseChartPreriod(e) {
        var chart = Highcharts.charts[0];
        var period = $(e.currentTarget).attr('data-period');
        var id = $('#person_id').val();

        console.log(period);

        this.getAllPeriod(chart, id, period);

    }

    getAllPeriod(chart, id, period = '1day') {
        $.ajax({
            url: '/chart/'+id,
            method: 'GET',
            data: {period}
        }).done((data) => {
            data = data.filter((i) => i[1]);
            data.sort((a,b) => a[0] - b[0] );
            this.updateChartOption(chart, {data});
        }).fail();

    }


    updateChartOption(chart, { marker, yTickInterval, data }) {
        chart.update({
            plotOptions: {
                series: {
                    marker: {
                        enabled: data.length < 30
                    }
                }
            },
            yAxis: {
                tickInterval: yTickInterval,
            },
            series:{
                data: data,
            }
        })
    }
}
