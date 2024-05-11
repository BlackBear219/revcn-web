import { FunctionComponent, useEffect, useRef, useState } from "react";
import { getHouseLastMetric } from "../../../services/houseMetricsServices";
import { Metric, MetricType } from "../../../models/metric";
import { statusCode } from "../../../models/revcnResponse";
import Highcharts from 'highcharts';
import { HighchartsReact } from "highcharts-react-official";
import { useStyles } from "./HouseLastMetricStyle";
import HighchartsMore from 'highcharts/highcharts-more.js';  
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge.js';  

// 初始化更多的highcharts模块  
HighchartsMore(Highcharts);  
HighchartsSolidGauge(Highcharts); 

export const HouseLastMetric: FunctionComponent = () => {
    const [totalHouseLastMetric, setTotalHouseLastMetric] = useState<Metric | null>(null);
    const [specialHouseLastMetric, setSpecialHouseLastMetric] = useState<Metric | null>(null);
    const styles = useStyles();
    const totalHouseAmount = 503;
    const specialHouseAmount = 50;

    const onMount = async () => {
        var totalHouseMetricTask = getHouseLastMetric(MetricType.HOUSE_AMOUNT_TOTAL);
        var specialHouseMetricTask = getHouseLastMetric(MetricType.HOUSE_AMOUNT_SPECIAL);
        var response = await totalHouseMetricTask;
        if (response.statusCode !== statusCode.Illegal && response.data !== null) {
            setTotalHouseLastMetric(response.data);
        }

        response = await specialHouseMetricTask;
        if (response.statusCode !== statusCode.Illegal && response.data !== null) {
            setSpecialHouseLastMetric(response.data);
        }
    }

    useEffect(() => {
        onMount()
    }, []);
    
    const trackColors = Highcharts.getOptions().colors!.map(color =>
        new Highcharts.Color(color).setOpacity(0.3).get()
    );

    const chartRef = useRef(null);  

    const title = "湖西银座房屋余量";
    const value="0.3";
  
    const chartOptions: Highcharts.Options = {  
        chart: {  
            type: 'solidgauge'  
        }, 
        credits: {
            enabled: false
        },
        title: {  
            text: title  
        },  

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            valueSuffix: '%',
            pointFormat: '{series.name}<br>' +
                '<span style="font-size: 2em; color: {point.color}; ' +
                'font-weight: bold">{point.y}</span><br>' +
                '<span style="font-size: 2em; color: {point.color}; ' +
                `font-weight: bold">余{point.x}</span>`,
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2.2)
                };
            }
        },

        pane: {  
            startAngle: 0,
        endAngle: 360,
        background: [
            { // Track for Conversion
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: trackColors[0],
                borderWidth: 0
            },
            { // Track for Engagement
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: trackColors[2],
                borderWidth: 0
            },
        ]},  
        yAxis: {  
            min: 0,  
            max: 100,  
            lineWidth: 0,  
            tickPositions: []  
        },  
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
        series: [
            {
                name: '总量',
                data: [{
                    color: Highcharts.getOptions().colors![0],
                    radius: '112%',
                    innerRadius: '88%',
                    y: totalHouseLastMetric === null? 0 : Math.round((totalHouseAmount - totalHouseLastMetric!.value)/totalHouseAmount*100),
                    x: totalHouseLastMetric === null? totalHouseAmount : totalHouseLastMetric!.value,
                }],
                custom: {
                    icon: 'filter',
                    iconColor: '#303030',
                }
            },
            {
                name: '102平',
                data: [{
                    color: Highcharts.getOptions().colors![2],
                    radius: '87%',
                    innerRadius: '63%',
                    y: specialHouseLastMetric === null ? 0 : Math.round((specialHouseAmount - specialHouseLastMetric!.value)/specialHouseAmount*100),
                    x: specialHouseLastMetric === null ? specialHouseAmount : specialHouseLastMetric!.value,
                }],
                custom: {
                    icon: 'commenting-o',
                    iconColor: '#303030'
                }
            },
        ] as any
    };  
  
    useEffect(() => {  
        if (chartRef.current) {  
            (chartRef.current as any).chart.series[0].setData([value]);  
        }  
    }, [value]);
    
    return(
        <div className={styles.root}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
  
    // return (  
    //     <HighchartsReact  
    //         highcharts={Highcharts}  
    //         options={chartOptions}  
    //         constructorType={'chart'}  
    //         ref={chartRef}  
    //     />  
    // );  
}
