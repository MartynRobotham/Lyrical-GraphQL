import gql from "graphql-tag";
// Helper library to write graphql queries in js / ts file

export const deleteSong = gql`
    mutation deleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }`

export const addSong = gql`
    mutation AddSong ($title: String) {
        addSong(title: $title) {
            title
        }
    }
`;

export const addLyric = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            title
            lyrics {
                content
            }
        }
    }
`;
