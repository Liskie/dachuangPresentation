var Data;
var date = new Array();
var road = new Array();
var crowd = new Array();
var colorList = ['#FF6347','#191970','#9933FA','#2E8B57','rgb(164,205,138)','#734A12','rgb(42,170,127)','#FDF5E6','rgb(25,46,94)','#FF7F50','rgb(195,229,235)','#FFD700','#FFA500','rgb(64,205,238)','#8A360F','rgb(142,170,227)','#B0171F','rgb(125,46,94)','#C0C0C0','rgb(195,29,235)','#292421','#778899','rgb(164,205,238)','rgb(242,70,227)','rgb(225,46,19)','#872657','rgb(95,229,23)','#33A1C9','rgb(64,105,138)','#00FFFF','rgb(142,70,27)','#FF8C00','rgb(45,46,44)','rgb(95,69,135)','#FA8072','rgb(16,245,28)','rgb(82,170,26)','#FAFAD2','rgb(95,146,194)','#808000','rgb(19,229,135)']; // set diferent color to different bar!
// 加载数据
$.ajaxSettings.async = false;
$.post("echarts/road-crowdity-sorted-histogram-data.txt", {}, function(string) {
    Data = string;
});
$.ajaxSettings.async = true;
// 处理数据
Data =  eval('(' + Data + ')'); // string to json
console.log("Data's Length =", Data.length);
var times = Data.length;
for(var i = 0;i < Data.length; i++){
    date.push(Data[i].time);
    var tmp_road = new Array();
    var tmp_crowd = new Array();
    for(var j = 0; j < Data[i].crowd.length; j++){
        // console.log("road = ", Data[i].crowd[j].road, "velocity = ", Data[i].crowd[j].value);
        tmp_road.push(Data[i].crowd[j].road);
        tmp_crowd.push(Data[i].crowd[j].value);
    }
    road.push(tmp_road);
    crowd.push(tmp_crowd);
}
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// doughnut0.title = '道路拥挤度排行榜';
option = {
    // dataZoom:[{
    //     // type:'inside',//inside,slider此处只列举inside
    //     // start:0,
    //     // end:50,//dataZoom-inside.start 和 dataZoom-inside.end 共同用 百分比 的形式定义了数据窗口范围。
    //     // xAxisIndex:0,//不指定时，当 dataZoom-inside.orient 为 'horizontal'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。
    //     // filterMode:'none',//dataZoom 的运行原理是通过 数据过滤 来达到 数据窗口缩放 的效果。数据过滤模式的设置不同，效果也不同。('filter','weakfilter','empty','none')http://echarts.baidu.com/option.html#dataZoom-inside
    //     // zoomLock:true,//只能拖动不可缩放,若无需禁止缩放设置为false或者去除即可
    // }],
    // title: {
    //     text: '道路拥挤度排行榜',
    //     subtext: '青岛市'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        x: 'left',
        // y: 'top',
        data: [{icon: 'circle', name: date[count]}], // [] is essential!
        textStyle: {
            fontSize: 14
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
    },
    yAxis: {
        type: 'category',
        data: road[0],
        // 反向坐标轴，否则是升序的
        inverse: true,
        axisLabel: {
            //给坐标名添加颜色属性
            textStyle: {
                color: function (params,index) {
                    return colorList[index];
                }
            }
        }
    },
    series: [
        {
            type: 'bar',
            name: date[0],
            data: crowd[0],
            // startValue: 0,
            // endValue: 5,
            label: {
                show: true,
                position: 'right'
            },
            itemStyle: {
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        return colorList[params.dataIndex];
                    }
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
var count = 0;
// 周期调用
var interval = setInterval(function () {
    count++;
    if(count == times){ // circulation
        count = 0;
    }
    myChart.setOption({
        legend: {
            x: "left",
            data: [{icon: 'none', name: date[count]}], // [] is essential!
            textStyle: {
                fontSize: 14
            }
        },
        yAxis: {
            type: 'category',
            data: road[count],
            // 反向坐标轴，否则是升序的
            inverse: true,
            axisLabel: {
                //给坐标名添加颜色属性
                textStyle: {
                    color: function (params,index) {
                        return colorList[index];
                    }
                }
            }
        },
        series: [
            {
                type: 'bar',
                name: date[count],
                data: crowd[count],
                label:{
                    show: true,
                    position: 'right'
                },
                itemStyle: {
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            return colorList[params.dataIndex];
                        }
                    }
                }
            }
        ]
    });
    //if (count == 5){
    //    console.log(count);
    // 停止周期调用
    //    clearInterval(interval);
    //}
}, 2000);