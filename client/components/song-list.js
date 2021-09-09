import React from 'react';
import gql from "graphql-tag"; // Helper library to write graphql queries in js / ts file
import {graphql} from "react-apollo";
import { Link } from "react-router";

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

    if(!props.data.loading) {
        return (
            <div>
            <ul className='collection'>
                {renderSongs()}
            </ul>
                <Link to='/song/new' className='btn-floating btn-large red right' onlyActiveOnIndex>
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        );
    }
    else {
        return <span>No songs have been loaded</span>
    }
};

export default graphql(query)(SongList);
