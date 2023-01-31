const { Schema, model, SchemaTypes } = require('mongoose');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      unique: [true, 'You already have contact with this name'],
    },
    email: {
      type: String,
      unique: [true, 'You already have contact with this email'],
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model('contact', contactSchema);

module.exports = Contact;
