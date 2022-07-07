import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from "../themes/theme"


const StyledText = ({ children, color, fontSize, fontWeight, align, style, ...otherProps }) => {
    const textStyles = [
        styles.basicText,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontSize === 'mini' && styles.mini,
        fontWeight === 'bold' && styles.bold,
        align === 'right' && styles.alignRight,
        style
    ]

    return (
        <Text style={textStyles} {...otherProps}>{children}</Text>
    )
}
export default StyledText


const styles = StyleSheet.create({
    basicText: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.textPrimary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    mini: {
        fontSize: theme.fontSizes.mini,
    },
    alignRight: {
        textAlign: 'right',
    }
})