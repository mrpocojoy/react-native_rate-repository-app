import React from "react"
import { View, StyleSheet } from "react-native"

import StyledText from "../StyledText"
import theme from "../../themes/theme"



const RepositoryStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {

    const parseThousands = value => {
        return value >= 1000
            ? `${Math.round(value / 100) / 10}k`
            : String(value)
    }

    return (
        <View style={styles.statsRow}>
            <View>
                <StyledText style={styles.label}>Stars</StyledText>
                <StyledText>{parseThousands(stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText style={styles.label}>Forks</StyledText>
                <StyledText>{parseThousands(forksCount)}</StyledText>
            </View>
            <View>
                <StyledText style={styles.label}>Reviews</StyledText>
                <StyledText>{parseThousands(reviewCount)}</StyledText>
            </View>
            <View>
                <StyledText style={[styles.label, styles.ratings]}>Rating</StyledText>
                <StyledText style={styles.ratings}>{ratingAverage}</StyledText>
            </View>
        </View>
    )
}
export default RepositoryStats


const styles = StyleSheet.create({
    label: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.mini,
    },
    ratings: {
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.textPrimary,
        textAlign: 'right',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
})