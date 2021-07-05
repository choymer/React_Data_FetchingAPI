import React from 'react';
import { useState,useEffect } from 'react';

const AnimeList = ({searchTerm}) => {

const [animes, setAnimes] = useState([]);

useEffect(()=>{
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data.results[0].episodes)
        console.log(data.results)
        setAnimes(data.results)
    });
},[searchTerm]);
 
    return (
     <ul>{
    //    console.log(animes,'animes')

    animes.map(anime=>{ 
        return(
        
    <li key={anime.mal_id}>
        <h1>{anime.title}</h1> 
        <p>{anime.synopsis}</p>
        <p>{anime.rated}</p>
        <p>{anime.score}</p>
        <img src={anime.image_url} alt={anime.title}></img>

    </li>)
        
    })

        
        }
     </ul>
    );
};

export default AnimeList;