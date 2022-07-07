import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email:  yup.
            string().
            email('Please enter a valid email').
            required('Email is required'),
    password:  yup.
            string().
            min(5, 'Too short').
            max(99, 'Too long').
            required('Password is required'),
})
