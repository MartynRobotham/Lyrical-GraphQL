import React from 'react';
import {graphql} from "react-apollo";
import {likeLyric} from "../mutations/lyrical-mutations";

const LyricList = (props) => {

    const onLike = (id, likes) => {
        props.mutate({
            variables: {id},
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: (likes + 1)
                }
            }
        })
    }

    const renderLyrics = () => {
        return props && props.lyrics.map(({id, content, likes}) => {
            return (
                <li className='collection-item' key={id}>
                    {content}
                    <div className='vote-box'>
                        <div>
                            <i className='material-icons'
                               onClick={() => onLike(id, likes)}
                            >thumb_up</i>
                        </div>
                        <div style={{width: "1rem"}}>
                            {likes}
                        </div>
                    </div>
                </li>
            )
        })
    }
    return (
        <ul className='collection'>
            {renderLyrics()}
        </ul>
    );
};

export default graphql(likeLyric)(LyricList);
