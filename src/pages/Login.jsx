import React from "react"
import { StyleSheet, View, Button } from "react-native"
import { Formik } from "formik"

import FormikInputValue from "../components/FormikInputValue"
import { loginValidationSchema } from "../validation/login"



const initialValues = {
    email: '',
    password: '',
}

const Login = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View style={styles.formContainer}>
                        <FormikInputValue
                            name="email"
                            placeholder="Email"
                        />
                        <FormikInputValue
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <Button title="Log In" onPress={handleSubmit} />
                    </View>
                )
            }}
        </Formik>
    )
}
export default Login

const styles = StyleSheet.create({
    formContainer: {
        margin: 20,
    },
})