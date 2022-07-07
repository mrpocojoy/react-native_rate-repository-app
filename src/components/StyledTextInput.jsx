import React from "react"
import { TextInput, StyleSheet } from 'react-native'

import Constants from 'expo-constants'
import theme from "../themes/theme"


const StyledTextInput = ({ children, style, error, ...otherProps }) => {
    const textInputStyles = [
        styles.textInput,
        style,
        error && styles.error,
    ]

    return (
        <TextInput style={textInputStyles} {...otherProps}>{children}</TextInput>
    )
}
export default StyledTextInput


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bbb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    },
    error: {
        borderColor: 'red',
    },
})

