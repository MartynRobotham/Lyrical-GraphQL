import React from 'react';
import {graphql} from "react-apollo";
import {getSongById} from "../queries/lyrical-queries";

const SongDetail = (props) => {
    const {loading, song} = props.data;
    if(!loading) {
        return (
            <div>
                <h3>Lyrics for {song.title}</h3>
            </div>
        );
    }
    return <span>loading</span>
};

export default graphql(getSongById, {
    options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail);
