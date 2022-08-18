import * as Joi from 'joi';
import { IUserLogin } from '../interfaces/userInterfaces';

const userLoginValidate = ({ email, password }: IUserLogin): IUserLogin => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required().messages({
      'string.empty': 'All fields must be filled',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'All fields must be filled',
    }),
  });

  const { error, value } = schema.validate({ email, password });
  if (error) {
    const err = new Error(error.details[0].message);
    err.name = 'validationError';
    throw err;
  }
  return value;
};

export default userLoginValidate;
