import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required('Username is required.')
        .min(3, 'Username must have at least 3 characters.'),
    email: yup
        .string()
        .email('Must be a valid email.')
        .required('Email is required.'),
    password: yup
        .string()
        .required('Password is required.')
        .min(5, 'Password must have a minimum of 5 characters.'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions.'),
});