export const RegularExpressions = {
  UserNameValidation: /^[a-zA-Z0-9]+$/,
  PasswordValidation:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
  emailvalidation: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  numberDotSpace: /^\d+(?:[,.]\d+)?(?: \d+(?:[,.]\d+)?)*$/,
  onlyNumbers: /^(?:\d+(?:\.\d{1,3})?|\.\d{1,3})$/,
};
