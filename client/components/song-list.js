import React from 'react';
import gql from "graphql-tag"; // Helper library to write graphql queries in js / ts file
import {graphql} from "react-apollo";

const query = gql`
    {
        songs {
            id
            title
        }
    }
`;

const SongList = (props) => {

    const renderSongs = () => {
        return props.data.songs.map(song => {
            return <li className='collection-item' key={song.id}>{song.title}</li>
        })
    }
    console.log(props.data);
    if(!props.data.loading) {
        return (
            <ul className='collection'>
                {renderSongs()}
            </ul>
        );
    }
    else {
        return <span>No songs have been loaded</span>
    }
};

export default graphql(query)(SongList);
