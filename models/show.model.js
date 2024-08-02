const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImageSchema = new Schema({
  medium: { type: String, required: true },
  original: { type: String, required: true },
});

const CastSchema = new Schema({
  person: {
    name: { type: String, required: true },
    image: { type: ImageSchema, required: true },
  },
  character: {
    name: { type: String, required: true },
  },
});

const ShowSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    rating: {
      average: { type: Number, default: null },
    },
    image: { type: ImageSchema, required: true },
    premiered: { type: String, required: true },
    _embedded: {
      cast: { type: [CastSchema], required: true },
    },
    backgroundColor: { type: String },
    officialSite: { type: String, required: true },
    summary: { type: String, required: true },
    genres: { type: [String], required: true },
  },
  { timestamps: true }
);
const Show = mongoose.model("Show", ShowSchema);

module.exports = Show;
