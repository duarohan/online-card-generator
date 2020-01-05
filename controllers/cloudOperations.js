var constants = require('../constants')
var cloudinary = require('cloudinary')
cloudinary.config(constants.cloudinary);

class CloudOperation {
    
    async uploadToCloudinary({fromLocation})
    {
        try{
            return await cloudinary.uploader.upload(fromLocation) 
        }catch(err){
            console.log('Error while uploading',err);    
        }
    }
    
    async downloadFromCloudinary({url})
    {
        
    }
}

module.exports = CloudOperation