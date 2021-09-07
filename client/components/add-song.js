import React, {Component} from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props);

        this.state = {title: ''}
    }

    render() {
        return (<div>
            <h3>Create a new song</h3>
            <form>
                <label>Song title</label>
                <input onChange={(e) => this.setState({title: event.target.value})}
                       value={this.state.title}/>
            </form>
        </div>)
    }
}

export default AddSong;
