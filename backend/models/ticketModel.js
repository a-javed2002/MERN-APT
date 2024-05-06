import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    age_group: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
},{timestamps:true});

export default mongoose.model('tickets',ticketSchema);