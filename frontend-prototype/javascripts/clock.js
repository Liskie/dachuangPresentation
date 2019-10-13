function pad(num, n) {
    return Array(n>num?(n-(''+num).length+1):0).join(0)+num;
}

function showTime(){
    let NowDate = new Date();
    let Y = NowDate.getFullYear();
    let M = pad(NowDate.getMonth() + 1, 2);
    let D = pad(NowDate.getDate(), 2);
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "日";
            break;
        case 1:
            day = "一";
            break;
        case 2:
            day = "二";
            break;
        case 3:
            day = "三";
            break;
        case 4:
            day = "四";
            break;
        case 5:
            day = "五";
            break;
        case 6:
            day = "六";
    }
    let h = pad(NowDate.getHours(), 2);
    let m = pad(NowDate.getMinutes(), 2);
    let s = pad(NowDate.getSeconds(), 2);
    document.getElementById('clock').innerHTML = Y + "年" + M + "月" + D + "日   星期" + day + "   " + h + ':' + m + ':' + pad(s, 2);
    setTimeout('showTime()',1000);
}