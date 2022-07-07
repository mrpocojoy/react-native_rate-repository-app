import React from "react"
import { useField } from "formik"

import { StyleSheet } from "react-native"
import StyledTextInput from "./StyledTextInput"
import StyledText from "./StyledText"


const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledTextInput
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                error={meta.error}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}
export default FormikInputValue


const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    },
})