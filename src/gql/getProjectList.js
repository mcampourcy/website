import { gql } from '@apollo/client'

export const GET_PROJECTLIST = gql`
    query GetProjectList {
        project(order_by: { id: desc }) {
            id
            image
            slug
            title
        }
    }
`
