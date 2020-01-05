module.exports = {
    twilio : {
        accountSid : 'AC99c9ffefe4cd93a6762402f6a6cee20f',
        authToken : '48e993e0479b5b26f175e49dc804b25f',
    },
    cloudinary : {
        cloud_name: 'hzec2kbgp',
        api_key: '622139454331298',
        api_secret: 'fQmqt7UdgCFUsf5G76aiy4zhsXw'
    },
    mongoose : {
        root : 'mongodb://',
        path : 'localhost:27017/',
        db : 'guest-manager',
        options : {
            useFindAndModify : false,
            useUnifiedTopology: true, 
            useNewUrlParser: true ,
            useCreateIndex : true,
        }
    }
}