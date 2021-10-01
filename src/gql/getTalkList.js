import { gql } from '@apollo/client'

export const GET_TALKLIST = gql`
    query GetTalkList {
        talk(order_by: { id: desc }) {
            id
            image
            slug
            title
        }
    }
`
