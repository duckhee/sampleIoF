function getDateFromJSON(str) {
    var date = new Date(str);
    var con_mindate = date.getMinutes();
    if ((0 <= con_mindate && con_mindate <= 10)) {
        //date.setMinutes(00);
        return (date.getHours()) + ':0' + date.getMinutes();
    } else if ((45 <= con_mindate && con_mindate <= 60)) {
        var date_time = date.getHours();
        //date.setHours(date_time + 1);
        //date.setMinutes(00);
        return (date.getHours()) + ':' + date.getMinutes();
    } else {
        //date.setMinutes(30);
        return (date.getHours()) + ':' + date.getMinutes();
    }
}
//날짜에서 하루 빼기
function getMinusOneDate(str) {
    var date = new Date(str);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1);
}
//날짜 형식 변경
function getFormatDate(date) {
    var year = date.getFullYear(); //yyyy
    var month = (1 + date.getMonth()); //M
    var day = date.getDate(); //d
    month = month >= 10 ? month : '0' + month; // month 두자리로 저장
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장
    return year + '' + month + '' + day;
}
//시간말 추출
function getFormatDateHour(date) {
    var hour = date.getHours(); //d
    hour = hour >= 10 ? hour : '0' + hour; //day 두자리로 저장
    return hour;
}