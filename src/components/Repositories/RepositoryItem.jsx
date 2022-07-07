import React from 'react';
import { View, StyleSheet } from "react-native"

import RepositoryItemHeader from './RepositoryItemHeader'
import RepositoryStats from './RepositoryStats'



const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.listItem}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}
export default RepositoryItem


const styles = StyleSheet.create({
    listItem: {
        marginTop: 10,
        marginBottom: 20,
        padding: 20,
        backgroundColor: "#ddd",
    },
});
