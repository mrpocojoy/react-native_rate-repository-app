import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"

import Constants from "expo-constants"
import AppBarTab from "./AppBarTab"
import theme from "../../themes/theme"

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <AppBarTab to={'/'}>Repositories</AppBarTab>
                <AppBarTab to={'/login'}>Log In</AppBarTab>
            </ScrollView>
        </View>
    )
}
export default AppBar


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingHorizontal: 10,
        paddingBottom: 15,
        backgroundColor: theme.appBar.backgroundColor,
    },
})
