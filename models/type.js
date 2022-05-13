import mongoose from "mongoose";

const Schema = mongoose.Schema

const typeSchema = new Schema({
  title: String,
  imageUrl: String,
  topWeakness: String,
  weakness2: String,
  weakness3: String,
  topStrength: String,
  strength2: String,
  strength3: String,
}, {
  timestamps: true
})

const Type = mongoose.model('Type', typeSchema)

export {
  Type
}