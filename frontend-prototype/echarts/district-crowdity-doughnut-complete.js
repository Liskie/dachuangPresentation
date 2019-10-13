var Data;
var date = new Array();
var road = new Array();
var crowd = new Array();
var colorList = ['#FF6347','#191970','#9933FA','#2E8B57','rgb(164,205,138)','#734A12','rgb(42,170,127)','#FDF5E6','rgb(25,46,94)','#FF7F50','rgb(195,229,235)','#FFD700','#FFA500','rgb(64,205,238)','#8A360F','rgb(142,170,227)','#B0171F','rgb(125,46,94)','#C0C0C0','rgb(195,29,235)','#292421','#778899','rgb(164,205,238)','rgb(242,70,227)','rgb(225,46,19)','#872657','rgb(95,229,23)','#33A1C9','rgb(64,105,138)','#00FFFF','rgb(142,70,27)','#FF8C00','rgb(45,46,44)','rgb(95,69,135)','#FA8072','rgb(16,245,28)','rgb(82,170,26)','#FAFAD2','rgb(95,146,194)','#808000','rgb(19,229,135)']; // set diferent color to different bar!

var doughnut4 = echarts.init(document.getElementById('doughnut4'));
var doughnut5 = echarts.init(document.getElementById('doughnut5'));
var doughnut6 = echarts.init(document.getElementById('doughnut6'));
var doughnut7 = echarts.init(document.getElementById('doughnut7'));
var doughnut0 = echarts.init(document.getElementById('doughnut0'));
var doughnut1 = echarts.init(document.getElementById('doughnut1'));
var doughnut2 = echarts.init(document.getElementById('doughnut2'));
var doughnut3 = echarts.init(document.getElementById('doughnut3'));

option3 = {
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
                {value:335, name:'', itemStyle: {color: "rgb(231,33,102,0.2)"}},
                {value:690, name:'吴淞路周边\n67%', itemStyle: {color: "rgb(231,33,102)"}}
            ]
        }
    ]
};
option2 = {
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
option1 = {
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
                {value:335, name:'', itemStyle: {color: "rgb(186,233,74,0.2)"}},
                {value:927, name:'汽车站周边\n73%', itemStyle: {color: "rgb(186,233,74,1)"}}
            ]
        }
    ]
};
option0 = {
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
                {value:335, name:'', itemStyle: {color: "rgb(21,174,205,0.2)"}},
                {value:1479, name:'市政府周边\n81%', itemStyle: {color: "rgb(21,174,205)"}}
            ]
        }
    ]
};
option4 = {
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
                {value:645, name:'青岛北站周边\n66%', itemStyle: {color: "rgb(170,73,189)"}}
            ]
        }
    ]
};
option5 = {
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
                {value:335, name:'', itemStyle: {color: "rgb(231,33,102,0.2)"}},
                {value:410, name:'福州路小学\n55%', itemStyle: {color: "rgb(231,33,102)"}}
            ]
        }
    ]
};
option6 = {
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
                {value:335, name:'', itemStyle: {color: "rgb(21,174,205,0.2)"}},
                {value:364, name:'福辽立交桥\n52%', itemStyle: {color: "rgb(21,174,205)"}}
            ]
        }
    ]
};
option7 = {
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
                {value:335, name:'', itemStyle: {color: "rgb(186,233,74,0.2)"}},
                {value:298, name:'市急救中心\n47%', itemStyle: {color: "rgb(186,233,74,1)"}}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
doughnut1.setOption(option1);
doughnut2.setOption(option2);
doughnut3.setOption(option3);
doughnut0.setOption(option0);
doughnut4.setOption(option4);
doughnut5.setOption(option5);
doughnut6.setOption(option6);
doughnut7.setOption(option7);

