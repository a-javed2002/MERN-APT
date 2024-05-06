import mongoose from 'mongoose';

const treatmentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
      },
      animal_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
        required: true
      },
      vet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
},{timestamps:true});

export default mongoose.model('treatments',treatmentSchema);