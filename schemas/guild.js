const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const guild = mongoose.Schema({
    _id: reqString,
    prefix: reqString,
    logChannel: {type: String},
    welcomeChannel: {type: String},
    leaveChannel: {type: String}
    })

    module.exports = mongoose.model('guild', guild)