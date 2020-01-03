import { reminder_endpoint } from './config.json';

/*
* Creates a reminder by sending a post request to the backend
* @param phoneNumber: String - E. 164 format, ex +19056623332
* @param message: String 
* @param date: String - UTC time YYYY-MM-DDThh:mm:ssZ
* @param callback: (error) => {} to be called when request response is received
*/
async function createReminder(phoneNumber, message, date, callback) {
    const reqBody = {
        "phoneNumber" : phoneNumber,
        "message": message,
        "date": date
    }
    const response = await fetch(reminder_endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    });
    const error = await response.status !== 200;
    // const error = null;
    return callback(error ? error : null);
}

export {
    createReminder
}
