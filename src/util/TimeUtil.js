/* Returns 24 hour time as HH:MM with 1 minute added on
*/
function getCurrentTime() {
    const today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes()+1;
    if (min > 59) {
        min = 0
        hour += 1
    }
    if (hour > 23) {
        hour = 0
    }
    if (min )
    if (hour <= 9) {
        hour = `0${hour}`;
    }
    if (min <= 9) {
        min = `0${min}`;
    }
    return `${hour}:${min}`;
}

/*
* Checks if 'time' is a valid future time (at least 2 mins in the future)
* @param time: String
* returns true time is valid
*/
function validFutureTime(time) {
    if (!validTimeFormat(time)) return false;
    if (compareTime(time, getCurrentTime()) !== 1) return false;
    return true;
}

/*
* Checks if 'time' is in format 'HH:MM' - 24 hour format
* @param time: String
* returns true if in correct format
*/
function validTimeFormat(time) {
    if (time.length !== 5) return false;
    const hour = Number(time.substring(0, 2));
    const min = Number(time.substring(3, 5));
    if (isNaN(hour) || isNaN(min)) return false;
    if (hour < 0 || hour > 24) return false;
    if (min < 0 || min > 59) return false;
    return true;
}

/*
* Compares two time strings in 24-hour format
* @param a: String - HH:MM
* @param b: String - HH:MM
* return: 1 if a > b, 0 if a == b, -1 if a < b
*/
function compareTime(a, b) {
    const aHour = Number(a.substring(0, 2));
    const aMin = Number(a.substring(3, 5));
    const bHour = Number(b.substring(0, 2));
    const bMin = Number(b.substring(3, 5));
    if (aHour > bHour) {
        return 1;
    } else if (aHour < bHour) {
        return -1;
    } 
    if (aMin > bMin) {
        return 1;
    } else if (aMin < bMin) {
        return -1;
    } 
    return 0;
}

export {
    getCurrentTime,
    validFutureTime
}
