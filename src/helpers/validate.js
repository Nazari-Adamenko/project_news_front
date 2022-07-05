import * as yup from 'yup';

const MESSAGE_MAX_CHARACTERS = 'Must be 15 characters or less';
const MESSAGE_REQUIRED = 'Required';
const MESSAGE_EMAIL_REQUIRED = 'Email is required';
const MESSAGE_EMAIL_IS_INVALID = 'Email is invalid';
const MESSAGE_PASSWORD_ERROR = 'Password must be at least 6 characters';
const MESSAGE_PASSWORD_REQUIRE = 'Password is required';
const MESSAGE_CONFIRM_PASSWORD_ERROR = 'Password must match';
const MESSAGE_CONFIRM_PASSWORD_REQUIRE = 'Confirm password is require';
const YUP_REFERENCE = 'password';

const MAXIMUM_LENGTH = 15;
const MINIMUM_PASSWORD_LENGTH = 6;

const validateFormAuth = {
  email: yup
    .string()
    .email(MESSAGE_EMAIL_IS_INVALID)
    .required(MESSAGE_EMAIL_REQUIRED),
  password: yup
    .string()
    .min(MINIMUM_PASSWORD_LENGTH, MESSAGE_PASSWORD_ERROR)
    .required(MESSAGE_PASSWORD_REQUIRE),
};

const validateFormReg = {
  name: yup
    .string()
    .max(MAXIMUM_LENGTH, MESSAGE_MAX_CHARACTERS)
    .required(MESSAGE_REQUIRED),
  email: yup
    .string()
    .email(MESSAGE_EMAIL_IS_INVALID)
    .required(MESSAGE_EMAIL_REQUIRED),
  password: yup
    .string()
    .min(MINIMUM_PASSWORD_LENGTH, MESSAGE_PASSWORD_ERROR)
    .required(MESSAGE_PASSWORD_REQUIRE),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref(YUP_REFERENCE), null], MESSAGE_CONFIRM_PASSWORD_ERROR)
    .required(MESSAGE_CONFIRM_PASSWORD_REQUIRE),
};

const validateFormCreate = {
  title: yup
    .string()
    .trim()
    .max(MAXIMUM_LENGTH, MESSAGE_MAX_CHARACTERS)
    .required(MESSAGE_REQUIRED),
  tags: yup
    .string()
    .trim()
    .required(MESSAGE_REQUIRED),
  content: yup
    .string()
    .trim()
    .required(MESSAGE_REQUIRED),
};

const validateFormEdit = {
  name: yup
    .string()
    .trim()
    .required(MESSAGE_REQUIRED),
};

export const validateUserRegistration = () => yup.object(validateFormReg);
export const validateUserAuthorization = () => yup.object(validateFormAuth);
export const validateFormCreatePost = () => yup.object(validateFormCreate);
export const validateFormEditUser = () => yup.object(validateFormEdit);
