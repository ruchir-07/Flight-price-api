import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  cityCode: {
    type: String,
    required: true,
  },
});

export default mongoose.model('paper', CitySchema);
