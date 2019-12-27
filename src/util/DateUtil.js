import moment from 'moment';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

/* @param date: String, format YYYY-MM-DD*/
function isToday(date) {
    const today = formatDate(new Date());
    return today === date;
}

/* 
* Checks if `date` is in the format YYYY-MM-DD
* @param date: String
*/
function checkDateFormat(date) {
    if (date.length != 10) return false;
    const dateString = moment(date,'YYYY-MM-DD');
    if(dateString == null || !dateString.isValid()) return false;
    return date.indexOf(dateString.format('YYYY-MM-DD')) >= 0;
}

export {
    formatDate,
    isToday,
    checkDateFormat
}
