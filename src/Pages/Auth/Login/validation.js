function validate(values) {
    let errors = {};

    if (!values.username) {
        errors.username = 'Username required';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }


    return errors;
}

export default validate;