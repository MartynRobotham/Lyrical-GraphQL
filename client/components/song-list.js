import React from 'react';
import {graphql} from "react-apollo";
import {Link} from "react-router";
import {deleteSong} from "../mutations/lyrical-mutations";
import {getSongs} from "../queries/lyrical-queries";

const SongList = (props) => {

    const onSongDelete = (id) => {
        props.mutate({
            variables: {id}}).then(() => {
                props.data.refetch();
        })
    }

    const renderSongs = () => {
        return props.data.songs.map(({id, title}) => {
            return <li className='collection-item' key={id}>
                {title}
                <i
                    className='material-icons'
                    onClick={() => onSongDelete(id)}
                >delete</i>
            </li>
        })
    }

    if (!props.data.loading) {
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
    } else {
        return <span>No songs have been loaded</span>
    }
};

export default graphql(deleteSong)(
    graphql(getSongs)(SongList)
);
