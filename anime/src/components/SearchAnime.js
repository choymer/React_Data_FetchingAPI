import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Form} from 'react-bootstrap';

const SearchAnime = ({setSearchTerm}) => {

    const [newSearchTerm, setNewSearchTerm] = useState('');
    
   /*  console.log(newSearchTerm); //to verify the setNewSearchTerm is listening to the event on change. */
    
    return (
        <Form onSubmit={(event) =>{
            // prevent the forms default behaviour
            event.preventDefault();
            // render setSearchTerm from App with the value of newSearchTerm(client input)
            setSearchTerm(newSearchTerm);
             // reset the input to be empty
            setNewSearchTerm('');
        }
        }> <Form.Group>
             <Form.Label htmlFor="animeName">Search an anime: </Form.Label>
            <Form.Control id="animeName"
            // 1. set the value of the input
            value={newSearchTerm} 
            // 2. Update the state whenever a change is made to that value
            onChange={(event) => setNewSearchTerm(event.target.value)}></Form.Control>
           </Form.Group>      
            <Button variant="primary" type="submit">Search</Button>
        </Form>
    );
};

export default SearchAnime;