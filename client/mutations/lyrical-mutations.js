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
