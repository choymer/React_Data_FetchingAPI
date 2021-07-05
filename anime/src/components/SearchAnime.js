import React from 'react';
import { useState } from 'react';

const SearchAnime = ({setSearchTerm}) => {

    const [newSearchTerm, setNewSearchTerm] = useState('');
    
   /*  console.log(newSearchTerm); //to verify the setNewSearchTerm is listening to the event on change. */
    

    return (
        <form onSubmit={(event) =>{
            // prevent the forms default behaviour
            event.preventDefault();
            // render setSearchTerm from App with the value of newSearchTerm(client input)
            setSearchTerm(newSearchTerm);
             // reset the input to be empty
            setNewSearchTerm('');
        }
        }> 
            <label htmlFor="animeName">Search an anime: </label>
            <input id="animeName"

            // 1. set the value of the input
            value={newSearchTerm} 
            // 2. Update the state whenever a change is made to that value
            onChange={(event) => setNewSearchTerm(event.target.value)}></input>
            <button>Search</button>
        </form>
    );
};

export default SearchAnime;