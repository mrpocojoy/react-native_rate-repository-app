import { gql } from "apollo-boost"

export const GET_RESPOSITORIES = gql`
    query Repositories {
        repositories {
            edges {
                node {
                    id
                    name
                    ownerName
                    createdAt
                    fullName
                    reviewCount
                    ratingAverage
                    forksCount
                    stargazersCount
                    description
                    language
                    ownerAvatarUrl
                }
            }
        }
    }
`