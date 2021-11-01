import { REGEXP, ERROR_MESSAGES } from "./Constants";

export const validateNick = (value: string): boolean | string => {
  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  if (!REGEXP.Nick.test(value)) {
    return ERROR_MESSAGES.InvalidNick;
  }

  return true;
};

export const validatePassword = (value: string): boolean | string => {
  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  if (!REGEXP.Password.test(value)) {
    return ERROR_MESSAGES.InvalidPassword;
  }

  return true;
};

export const validateEmail = (value: string): boolean | string => {
  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  if (!REGEXP.Email.test(value)) {
    return ERROR_MESSAGES.InvalidEmail;
  }

  return true;
};

export const validateDescription = (value: string): boolean | string => {
  console.log(value.length);

  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  if (value.length < 10 || value.length > 50) {
    return ERROR_MESSAGES.InvalidDescription;
  }

  return true;
};

export const validateTags = (value: string): boolean | string => {
  if (value === "" || !value) {
    return ERROR_MESSAGES.EmptyField;
  }
  return true;
};
