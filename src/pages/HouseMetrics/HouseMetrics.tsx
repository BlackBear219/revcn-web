import { FunctionComponent, useEffect, useState } from "react";
import { getHouseMetrics } from "../../services/houseMetricsServices";
import { metric, metricType } from "../../models/metric";
import { statusCode } from "../../models/revcnResponse";
import Highcharts from 'highcharts';
import { HighchartsReact } from "highcharts-react-official";
import { useStyles } from "./HouseMetricsStyle";

export const HouseMetrics: FunctionComponent = () => {
    const [totalMetrics, setTotalMetrics] = useState<metric[]>([]);
    const [specialMetrics, setSpecialMetrics] = useState<metric[]>([]);
    const styles = useStyles();

    const onMount = async () => {
        var totalHouseMetricTask = getHouseMetrics(metricType.HOUSE_AMOUNT_TOTAL);
        var specialHouseMetricTask = getHouseMetrics(metricType.HOUSE_AMOUNT_SPECIAL);
        var response = await totalHouseMetricTask;
        if (response.statusCode !== statusCode.Illegal && response.data !== null) {
            setTotalMetrics(response.data);
        }

        response = await specialHouseMetricTask;
        if (response.statusCode !== statusCode.Illegal && response.data !== null) {
            setSpecialMetrics(response.data);
        }
    }

    useEffect(() => {
        onMount()
    }, []);

    const options = {
        credits: false,
        chart: {
            type: 'spline',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        title: {
            text: '湖西银座房屋余量',
            align: 'center'
        },
        xAxis: {
            type: 'datetime',
            categories: totalMetrics.map(_ =>  new Date(_.snapshotTime).toLocaleDateString("cn")),
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: '余量（间）'
            },
            minorGridLineWidth: 0,
            alternateGridColor: "#f5f5f5",
        },
        tooltip: {
            valueSuffix: ' 间'
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                }
            },
        },
        series: [{
            name: '102平米',
            data: specialMetrics.map(_ => _.value)

        }, {
            name: '楼盘总量',
            data: totalMetrics.map(_ => _.value)
        }]
    };

    return(
        <div className={styles.root}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}