const mongoose = require('mongoose')

const Schema = mongoose.Schema

const NPSchema = new Schema(
  {
    name: { type: String, required: true },
    province: { type: String, required: true },
    mainAttraction: { type: String, required: true },
    priceDay: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'nationalParks'
  }
)

const NP = mongoose.model('nationalParks', NPSchema, 'nationalParks')

module.exports = NP
