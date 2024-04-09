
require('dotenv').config()

const twilio = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const sendOTP=(phoneNumber, otp)=> {
    console.log(phoneNumber,otp)
    const message = `Your OTP is: ${otp}`;

    twilio.messages
        .create({
            body: message,
            from: process.env.TWILIO_NUMBER,
            to: phoneNumber
        })
        .then(message => console.log(`OTP sent: ${message.sid}`))
        .catch(error => console.error(`Error sending OTP: ${error.message}`));
}

module.exports=sendOTP