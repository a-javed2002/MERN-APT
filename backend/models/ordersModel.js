import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    visitor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      tickets: {
        type: Number,
        required: true
      },
      total_amount: {
        type: Number,
        required: true
      },
      date_time: {
        type: Date,
        default: Date.now
      }
},{timestamps:true});

export default mongoose.model('orders',orderSchema);