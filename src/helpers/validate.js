import * as yup from 'yup';

export const validateUserRegistration = () => yup.object({
  name: yup
    .string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: yup.string().email('Email is invalid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is require'),
});

export const validateUserAuthorization = () => yup.object({
  email: yup.string().email('Email is invalid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
