import gql from "graphql-tag";

export const getSongById = gql`
    query GetSongById ($id: ID!) {
        song(id: $id) {
            id
            title
            lyrics {
                id
                likes
                content
            }
        }
    }`

export const getSongs = gql`
    {
        songs {
            id
            title
        }
    }
`;
