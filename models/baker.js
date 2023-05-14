const mongoose = require('mongoose')
const bread = require('./bread')

const bakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Rachel', 'Ross', 'Monica', 'Chandler', 'Joey', 'Phoebe']
  },
  startDate: {
    type: Date,
    required: true
  },
  bio: {
    type: String,
    required: false
  } 
},{
  toJSON: {virtuals: true}
})

bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker'
})

module.exports = mongoose.model('Baker', bakerSchema)