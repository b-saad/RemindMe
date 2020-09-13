
/*
* Creates a reminder by sending a post request to the backend
* @param phoneNumber: String - E. 164 format, ex +19056623332
* @param message: String 
* @param date: String - Unix timestamp
* @param callback: (error) => {} to be called when request response is received
*/
async function createReminder(phoneNumber, message, date, callback) {
    // The reminder request body is needed to be sent from the postback to the lambda
    const reminderReqBody = {
        "phone_number" : phoneNumber,
        "reminder": message
    }
    const reqBody = {
        "send_at": date,
        "body_string": JSON.stringify(reminderReqBody)
    }
    console.log(reminderReqBody);
    console.log(reqBody);
    var error = null;
    await fetch(`${process.env.REACT_APP_POSTBACKS_URL}`, {
        method: 'POST',
        body: JSON.stringify(reqBody)
    }).then(function (response) {
        const errorOccurred = !(response.status >= 200 && response.status <= 299);
        error = errorOccurred ? "Something went wrong!" : null;
	}).catch(function (err) {
        console.error(err);
        error = "Something went wrong!";
	});
    callback(error);
}

export {
    createReminder
}
