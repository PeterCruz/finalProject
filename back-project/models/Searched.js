const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchedSchema = new Schema({
    name: {
       type:String,
       required:true
    },
    firstLastname: {
        type:String,
        required:true
    },
    secondLastname: {
        type:String,
    },
    location: {
        type:String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

module.exports = mongoose.model('Searched', searchedSchema);