import React from 'react';

const AddSong = () => {

    return (
        <div>
            <h3>Create a new song</h3>
            <form>
                <label>Song title</label>
                <input onChange={(e) => setTitle(event.target.value)} value={'abc'} />
            </form>
        </div>
    );
};

export default AddSong;
