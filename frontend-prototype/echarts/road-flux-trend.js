var Data1;
        var road1 = new Array();
        var date1 = new Array();
        var flow1 = new Array();
        // 加载数据
        $.ajaxSettings.async = false;
        $.post("echarts/road-flux-trend-data-total.txt", {}, function(string) {
            Data1 = string;
        });
        $.ajaxSettings.async = true;
        Data1 =  eval('(' + Data1 + ')'); // string to json
        console.log("Data's Length =", Data1.length);
        for(var i = 0; i < Data1.length; i++){
            road1.push(Data1[i].road);
            var tmp_date = new Array();
            var tmp_crowd = new Array();
            for(var j = 0; j < Data1[i].timelist.length; j++){
                tmp_date.push(Data1[i].timelist[j].time);
                tmp_crowd.push(Data1[i].timelist[j].number);
            }
            date1.push(tmp_date);
            flow1.push(tmp_crowd);                               
        }
		var myChart1 = echarts.init(document.getElementById('box1'));
        option1 = {
			title: {
				text: '总体',
                subtext: '大创'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data:[road1[0]]
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
                data: date1[0]
			},
			yAxis: {
				type: 'value'
			},
			series: [
                {
                    type: 'line',
                    name: road1[0],
                    data: flow1[0],
                    label: {
                        show: true,
                        position: 'right'
                    }
                }
			]
		};
        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
        
        var Data2;
        var road2 = new Array();
        var date2 = new Array();
        var flow2 = new Array();
        // 加载数据
        $.ajaxSettings.async = false;
        $.post("echarts/road-flux-trend-data-0730.txt", {}, function(string) {
            Data2 = string;
        });
        $.ajaxSettings.async = true;
        Data2 =  eval('(' + Data2 + ')'); // string to json
        console.log("Data's Length =", Data2.length);
        for(var i = 0; i < Data2.length; i++){
            road2.push(Data2[i].road);
            var tmp_date = new Array();
            var tmp_crowd = new Array();
            for(var j = 0; j < Data2[i].timelist.length; j++){
                tmp_date.push(Data2[i].timelist[j].time);
                tmp_crowd.push(Data2[i].timelist[j].number);
            }
            date2.push(tmp_date);
            flow2.push(tmp_crowd);                               
        }
		var myChart2 = echarts.init(document.getElementById('box2'));
        option2 = {
			title: {
				text: '2017-07-30',
                subtext: '大创'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data:[road2[0]]
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
                data: date2[0]
			},
			yAxis: {
				type: 'value'
			},
			series: [
                {
                    type: 'line',
                    name: road2[0],
                    data: flow2[0],
                    label: {
                        show: true,
                        position: 'right'
                    }
                }
			]
		};
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option2);
        
        var Data3;
        var road3 = new Array();
        var date3 = new Array();
        var flow3 = new Array();
        // 加载数据
        $.ajaxSettings.async = false;
        $.post("echarts/road-flux-trend-data-0731.txt", {}, function(string) {
            Data3 = string;
        });
        $.ajaxSettings.async = true;
        Data3 =  eval('(' + Data3 + ')'); // string to json
        console.log("Data's Length =", Data3.length);
        for(var i = 0; i < Data3.length; i++){
            road3.push(Data3[i].road);
            var tmp_date = new Array();
            var tmp_crowd = new Array();
            for(var j = 0; j < Data3[i].timelist.length; j++){
                tmp_date.push(Data3[i].timelist[j].time);
                tmp_crowd.push(Data3[i].timelist[j].number);
            }
            date3.push(tmp_date);
            flow3.push(tmp_crowd);                               
        }
		var myChart3 = echarts.init(document.getElementById('box3'));
        option3 = {
			title: {
				text: '2017-07-31',
                subtext: '大创'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data:[road3[0]]
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
                data: date3[0]
			},
			yAxis: {
				type: 'value'
			},
			series: [
                {
                    type: 'line',
                    name: road3[0],
                    data: flow3[0],
                    label: {
                        show: true,
                        position: 'right'
                    }
                }
			]
		};
        // 使用刚指定的配置项和数据显示图表。
        myChart3.setOption(option3);
        
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        // 周期调用
        var interval = setInterval(function () {
            count1 ++;
            count2 ++;
            count3 ++;
            if(count1 == Data1.length){ 
                count1 = 0;
            }
            if(count2 == Data2.length){ 
                count2 = 0;
            }
            if(count3 == Data3.length){ 
                count3 = 0;
            }
            myChart1.setOption({
                legend: {
                    data:[road1[count1]]
                },
                xAxis: {
                    type: 'category',
                    data: date1[count1]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                {   
                    type: 'line',
                    name: road1[count1],
                    data: flow1[count1],
                    label: {
                        show: true,
                        position: 'right'
                    }
                }
                ]
            });
            myChart2.setOption({
                legend: {
                    data:[road2[count2]]
                },
                xAxis: {
                    type: 'category',
                    data: date2[count2]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                {   
                    type: 'line',
                    name: road2[count2],
                    data: flow2[count2],
                    label: {
                        show: true,
                        position: 'right'
                    }
                }
                ]
            });
            myChart3.setOption({
                legend: {
                    data:[road3[count3]]
                },
                xAxis: {
                    type: 'category',
                    data: date3[count3]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                {   
                    type: 'line',
                    name: road3[count3],
                    data: flow3[count3],
                    label: {
                        show: true,
                        position: 'right'
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