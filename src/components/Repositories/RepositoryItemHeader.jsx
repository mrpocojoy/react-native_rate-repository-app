import React from "react"
import { Image, View, StyleSheet } from "react-native"

import theme from '../../themes/theme';
import StyledText from "../StyledText"

const RepositoryItemHeader = ({ fullName, description, language, ownerAvatarUrl }) => {
    return (
        <View style={styles.mainRow}>
            <View>
                <StyledText fontSize='subheading' fontWeight='bold' style={styles.text}>{fullName}</StyledText>
                <StyledText style={styles.text}>{description} </StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
    )
}
export default RepositoryItemHeader


const styles = StyleSheet.create({
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    text: {
        maxWidth: 250,
    },
    language: {
        marginTop: 8,
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: theme.fontSizes.mini + 2,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        fontWeight: theme.fontWeights.medium,
        borderRadius: 4,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
});
