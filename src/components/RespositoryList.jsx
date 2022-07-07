import React from 'react'
import { FlatList } from "react-native"

import RepositoryItem from './Repositories/RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
    const { repositories } = useRepositories()
    return (
        <FlatList
            data={repositories}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        >
        </FlatList>
    )
}
export default RepositoryList
