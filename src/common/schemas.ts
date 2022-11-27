import Joi from 'joi';

export const userFormSchema = Joi.object({
  userName: Joi.string()
    .min(3)
    .message('The name is too short,min 3 symbols')
    .max(7)
    .message('The name is too long,max 7 symbols')
    .required(),
  score: Joi.number()
    .min(0)
    .message('The score should be positive num')
    .max(100)
    .message('Some range limit,sory')
    .required(),
});
