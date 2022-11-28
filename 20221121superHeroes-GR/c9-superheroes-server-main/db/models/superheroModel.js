import mongoose from '../mongoose.js';

const Schema = mongoose.Schema;

const superheroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  alterEgo: { type: String, default: 'Unknown' },
  powers: [String],
  weaknesses: [String],
  sidekicks: [{ name: String, alterEgo: String }],
  location: {
    type: { city: String, province: String, country: String },
    required: false
  }
});

const Superhero = mongoose.model('Superhero', superheroSchema, 'superheroes');

export const getAllSuperheroes = async () => {
  return await Superhero.find();
};

export const createSuperhero = async (superhero) => {
  const newSuperhero = await Superhero.create(superhero);
  return newSuperhero;
};

export const getSuperheroById = async (id) => {
  const superhero = await Superhero.findById(id);
  return superhero;
};
