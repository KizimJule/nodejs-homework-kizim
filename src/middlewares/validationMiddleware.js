// const Joi = require('joi');

// module.exports = {
//   contactValidation: (req, _, next) => {
//     const contactSchema = Joi.object({
//       name: Joi.string().min(3).max(30).required(),
//       email: Joi.string()
//         .email({
//           minDomainSegments: 2,
//         })
//         .required(),
//       phone: Joi.string().min(3).max(30).required(),
//     });

//     const { error } = contactSchema.validate(req.body);
//     if (error) {
//       error.status = 400;
//       error.message = 'missing required name field';
//       throw error;
//     }

//     next();
//   },
// };
