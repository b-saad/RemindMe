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

/* @param date: String, format YYYY-MM-DD */
function isToday(date) {
    const today = formatDate(new Date());
    return today === date;
}

/* 
* Checks if `date` is a valid date (not in the past) - YYYY-MM-DD
* @param date: String
*/
function validDate(date) {
    if (!checkDateFormat(date)) return false;
    const today = formatDate(new Date());
    const todayYear = Number(today.substring(0, 4));
    const todayMonth = Number(today.substring(5, 7));
    const todayDay = Number(today.substring(9, 11));
    const dateYear = Number(today.substring(0, 4));
    const dateMonth = Number(today.substring(5, 7));
    const dateDay = Number(today.substring(9, 11));
    if (dateYear < todayYear) return false;
    if (dateMonth < todayMonth) return false;
    if (dateMonth === todayMonth) {
        if (dateDay >= todayDay) {
            return true;
        }
        return false;
    }
    return true;
}

/* 
* Checks if `date` is in the format YYYY-MM-DD
* @param date: String
*/
function checkDateFormat(date) {
    if (date.length !== 10) return false;
    const dateString = moment(date,'YYYY-MM-DD');
    if(dateString == null || !dateString.isValid()) return false;
    return date.indexOf(dateString.format('YYYY-MM-DD')) >= 0;
}

export {
    formatDate,
    isToday,
    validDate
}
