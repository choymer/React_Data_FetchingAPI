import React from 'react';

const SearchAnime = ({searchTerm}) => {

    return (
        <div> 
            <label htmlFor="name">Search an anime: </label>
            <input id="name"></input>
            <button>Search</button>
        </div>
    );
};

export default SearchAnime;