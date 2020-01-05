var mongoose = require('mongoose');

class dbOperations {
    async connect({path,options}){
        await mongoose.connect(path,options)
    }

    async disconnect(){
        await mongoose.disconnect()
    }
}


module.exports = dbOperations