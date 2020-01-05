var mongoose = require('mongoose')
var Schema = mongoose.Schema
var counters = require('./counters')

var guestSchema = new Schema(
    {
        _id: Number,
        name : String,
        addressLine1 : String,
        addressLine2 : String,
        city : String,
        state : String,
        pincode : String,
        contact_std : String,
        contact_num : Number
    },
    {
        strict: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

guestSchema.pre('save', async function(next) {
    this._id = await _getNextSequenceValue()
    next();
});

module.exports = mongoose.model("guests",guestSchema)

async function _getNextSequenceValue(){
    let sequenceDocument = await counters.findOneAndUpdate({collection_name : "guests" },{$inc:{seq : 1}});
    return sequenceDocument.seq;
 }