import gql from "graphql-tag";

export const getSongById = gql`
    query GetSongById ($id: ID!) {
        song(id: $id) {
            title
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

export const getLyrics = gql`
    query getLyric($songId: ID!) {
        lyric(id: $songId) {
            id
            content
        }
    }
`;
