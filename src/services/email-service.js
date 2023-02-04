const  sender  = require("../config/emailConfig");

// You can make is async but there's no point of waiting for the email to be sent 
const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    // sender.
    await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    });
}

module.exports = {
    sendBasicEmail
}