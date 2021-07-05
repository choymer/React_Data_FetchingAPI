import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Col} from 'react-bootstrap';

const AnimeList = ({searchTerm}) => {

const [animes, setAnimes] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data.results)
        setAnimes(data.results)
        setIsLoading(false);
    });
},[searchTerm]);


    if (isLoading) return <p>Loading {searchTerm}animes...</p>

    return (
     <ul>{
    //    console.log(animes,'animes')
    animes.map(anime=>{ 
        return(      
        
    <li key={anime.mal_id}>{
        <Col className="container-fluid mt-4">
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={anime.image_url} alt={anime.title} />
        <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
            <Card.Text>
                    {anime.synopsis}
            </Card.Text>
            <Card.Text>
            Rating: {anime.rated}
            </Card.Text>
            <Card.Text>
            Score: {anime.score}
            </Card.Text>      
        </Card.Body>
        </Card>
        </Col>}
    </li>)   
    })
     }</ul>
    );
};

export default AnimeList;