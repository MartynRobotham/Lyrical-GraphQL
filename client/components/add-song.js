import React, {Component} from 'react';
import gql from "graphql-tag"; // Helper library to write graphql queries in js / ts file
import {graphql} from "react-apollo";
import {Link, hashHistory} from "react-router";
import fetchSongs from "../queries/lyrical-queries";
import {addSong} from "../mutations/lyrical-mutations";

// Old way as this app is < V16. Do it through hooks and RSC now!
class AddSong extends Component {
    constructor(props) {
        super(props);

        this.state = {title: ''}
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.title.length > 0) {
            return this.props.mutate({
                variables: {
                    title: this.state.title
                },
                refetchQueries: [{query: fetchSongs}] // Forces these queries to run again i.e. not get the cached songs
            }).then(() => {
                hashHistory.push('/')
            }).catch(() => {
                throw new Error('Mutation did not call correctly');
            })
        }
        return alert('A song title cannot be empty');
    }

    render() {
        return (
            <div style={{padding: '2rem'}}>
                <Link to='/'>Back</Link>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song title</label>
                    <input onChange={(e) => this.setState({title: e.target.value})}
                           value={this.state.title}/>
                </form>
            </div>)
    }
}

export default graphql(addSong)(AddSong);
