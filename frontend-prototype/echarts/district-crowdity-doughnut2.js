var Data;
var date = new Array();
var road = new Array();
var crowd = new Array();
var colorList = ['#FF6347','#191970','#9933FA','#2E8B57','rgb(164,205,138)','#734A12','rgb(42,170,127)','#FDF5E6','rgb(25,46,94)','#FF7F50','rgb(195,229,235)','#FFD700','#FFA500','rgb(64,205,238)','#8A360F','rgb(142,170,227)','#B0171F','rgb(125,46,94)','#C0C0C0','rgb(195,29,235)','#292421','#778899','rgb(164,205,238)','rgb(242,70,227)','rgb(225,46,19)','#872657','rgb(95,229,23)','#33A1C9','rgb(64,105,138)','#00FFFF','rgb(142,70,27)','#FF8C00','rgb(45,46,44)','rgb(95,69,135)','#FA8072','rgb(16,245,28)','rgb(82,170,26)','#FAFAD2','rgb(95,146,194)','#808000','rgb(19,229,135)']; // set diferent color to different bar!
// 加载数据
// $.ajaxSettings.async = false;
// $.post("echarts/road-crowdity-sorted-histogram-data.txt", {}, function(string) {
//     Data = string;
// });
// $.ajaxSettings.async = true;
// 处理数据
// Data =  eval('(' + Data + ')'); // string to json
// console.log("Data's Length =", Data.length);
// var times = Data.length;
// for(var i = 0;i < Data.length; i++){
//     date.push(Data[i].time);
//     var tmp_road = new Array();
//     var tmp_crowd = new Array();
//     for(var j = 0; j < Data[i].crowd.length; j++){
//         // console.log("road = ", Data[i].crowd[j].road, "velocity = ", Data[i].crowd[j].value);
//         tmp_road.push(Data[i].crowd[j].road);
//         tmp_crowd.push(Data[i].crowd[j].value);
//     }
//     road.push(tmp_road);
//     crowd.push(tmp_crowd);
// }
// 基于准备好的dom，初始化echarts实例

var doughnut2 = echarts.init(document.getElementById('doughnut2'));


option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['', '车辆']
    },
    series: [
        {
            name:'拥挤度',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    },
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'', itemStyle: {color: "rgb(170,73,189,0.2)"}},
                {value:877, name:'昌平路周边\n72%', itemStyle: {color: "rgb(170,73,189)"}}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。

doughnut2.setOption(option);

// var count = 0;
// // 周期调用
// var interval = setInterval(function () {
//     count++;
//     if(count == times){ // circulation
//         count = 0;
//     }
//
//     doughnut2.setOption(option);
//
//     //if (count == 5){
//     //    console.log(count);
//     // 停止周期调用
//     //    clearInterval(interval);
//     //}
// }, 2000);