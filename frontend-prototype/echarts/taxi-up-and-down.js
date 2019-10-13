option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['上下客流量','车流量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['贵州路','中山路','胶东路','镇江路','济宁路','馆陶路','浙江路','汶上路','成武路','滋阳路','巫峡路','湖南路'],
            //data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '车流量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}辆'
            }
        },
        {
            type: 'value',
            name: '名次',
            min: 1,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value}名'
            }
        }
    ],
    series: [
        {
            name:'上下客流量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'车流量',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            //data:[1，3，4，6，9，11，12，5，2，8，7]
        }
    ]
};
var myChart = echarts.init(document.getElementById('taxi-up-and-down'));
myChart.setOption(option);