const constants = require('../constants')
const client = require('twilio')(constants.twilio.accountSid, constants.twilio.authToken);  

class Notification{
    async sendNotification({body,from,to,mediaUrl}) {
        message = await client.messages.create({body,from,to,mediaUrl})
        console.log(message.sid)
    }
}

module.exports = Notification




