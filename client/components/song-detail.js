import React from 'react';
import {graphql} from "react-apollo";
import {getSongById} from "../queries/lyrical-queries";
import {Link} from "react-router";
import AddLyric from "./add-lyric";
import LyricList from "./lyric-list";

const SongDetail = (props) => {
    const {loading, song} = props.data;
    if(!loading && song !== undefined) {
        return (
            <div className='p-1'>
                <Link to='/'>Back</Link>
                <h3>Lyrics for {song.title}</h3>
                <LyricList lyrics={song.lyrics} />
                <AddLyric songId={props.params.id} />
            </div>
        );
    }
    return <span>loading</span>
};

export default graphql(getSongById, {
    options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail);
