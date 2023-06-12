const mongoose = require('mongoose');

// Define the schema for the message
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  message: { type: String, required: true },
  lawyerEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a model for the message schema
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
