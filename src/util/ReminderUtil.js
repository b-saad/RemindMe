import { reminder_endpoint } from '../config.json';

/*
* Creates a reminder by sending a post request to the backend
* @param phoneNumber: String - E. 164 format, ex +19056623332
* @param message: String 
* @param date: String - UTC time YYYY-MM-DDThh:mm:ssZ
* @param callback: (error) => {} to be called when request response is received
*/
async function CreateReminder(phoneNumber, message, date, callback) {
    const reqBody = {
        "phoneNumber" : phoneNumber,
        "message": message,
        "date": date
    }
    const response = await fetch(reminder_endpoint, {
        method: 'POST',
        body: reqBody
    });
    const error = response.status !== 200;
    return callback(error ? error : null);
}
