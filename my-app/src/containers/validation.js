  const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Invalid email address'
  }
  else if (values.username.length < 5) {
    errors.username = 'Must be 5 characters or more'
  }
  else if (values.username && values.username.trim().length < 5) {
    errors.username = "You're trying to input spaces? Go Home!";
  }
  if (!values.password) {
    errors.password = 'Password is Required'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more'
  }
  else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  }
  return errors
};

export default validate;