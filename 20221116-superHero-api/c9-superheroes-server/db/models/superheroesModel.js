import mongoose from "../mongoose.js";
const Schema = mongoose.Schema;
const superheroesSchema = new Schema({
  name: { type: String, required: true, unique: true },
  alterEgo: { type: String, default: "Unknown" },
  power: [String],
  weakness: [String],
  sidekick: [{ name: String, alterEgo: String }],
  location: {
    type: { city: String, province: String, country: String },
    required: false,
  },
});

const Superheroes = mongoose.model("Superheroes", superheroesSchema);
