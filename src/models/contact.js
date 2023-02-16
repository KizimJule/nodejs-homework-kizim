const { Schema, model, SchemaTypes } = require('mongoose');
const joi = require('joi');

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

const joiSchema = joi.object({
  name: joi.string().min(1).required(),
  email: joi.string().email().required(),
  phone: joi.string().min(6).required(),
  favorite: joi.bool(),
});

const joiStatusSchema = joi.object({
  favorite: joi.bool().required(),
});

const Contact = model('contact', contactSchema);

module.exports = { Contact, joiSchema, joiStatusSchema };
