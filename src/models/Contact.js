import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide a full name.'],
    maxlength: [60, 'Full name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  mobileNumber: {
    type: String,
    required: [true, 'Please provide a mobile number.'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
