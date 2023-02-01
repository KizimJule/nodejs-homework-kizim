const { Schema, model, SchemaTypes } = require('mongoose');
const Joi = require('Joi');

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

const joiSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).required(),
  favorite: Joi.bool(),
});

const joiStatusSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const Contact = model('contact', contactSchema);

module.exports = { Contact, joiSchema, joiStatusSchema };
