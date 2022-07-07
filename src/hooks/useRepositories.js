import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_RESPOSITORIES } from '../graphql/queries'


const useRepositories = () => {

    const { data = {}, loading, refetch } = useQuery(GET_RESPOSITORIES)
    const { repositories = null } = data

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : []

    return { loading, repositories: repositoryNodes, refetch }
}
export default useRepositories
