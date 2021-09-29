import React, {Component} from 'react';
import {addLyric} from "../mutations/lyrical-mutations";
import {hashHistory} from "react-router";
import {graphql} from "react-apollo";

class AddLyric extends Component {
constructor(props) {
    super(props);
    this.state = {
        content: ''
    }
}

    onSubmit(event) {
        event.preventDefault();
        return this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            },
        }).then(() => {
            this.setState({content: ''})
        }).catch(() => {
            throw new Error('Mutation did not call correctly');
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add lyric</label>
                <input
                    value={this.state.content}
                    onChange={(e) => this.setState({content: e.target.value})} />
            </form>
        )
    }
}

export default graphql(addLyric)(AddLyric);
