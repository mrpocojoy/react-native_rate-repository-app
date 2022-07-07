import React from "react"
import { TouchableWithoutFeedback, StyleSheet } from "react-native"
import { Link, useLocation } from "react-router-native"

import theme from "../../themes/theme"
import StyledText from "../StyledText"


const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const tabsStyles = [
        styles.text,
        active && styles.activeTab,
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText style={tabsStyles}>
                {children}
            </StyledText>
        </Link>
    )
}
export default AppBarTab


const styles = StyleSheet.create({
    text: {
        color: theme.appBar.textSecondary,
        fontWeight: theme.fontWeights.medium,
        paddingHorizontal: 10,
    },
    activeTab: {
        color: theme.appBar.textPrimary,
        fontWeight: theme.fontWeights.bold,

    }
})
