import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Col, Container, Row } from "react-bootstrap";

const AnimeList = ({ searchTerm }) => {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results)
        setAnimes(data.results);
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isLoading) return <p>Loading {searchTerm}animes...</p>;

  return (
    <Container>
      <Row>
        {/* <ul> */}
        {animes.map((anime) => {
          return (
            // <li key={anime.mal_id}>
            // {

            <Col xs={12} s={6} md={4} key={anime.mal_id} className="mb-4 mt-4">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src={anime.image_url}
                  alt={anime.title}
                />

                <Card.Body>
                  <Card.Title>{anime.title}</Card.Title>
                  <Card.Text>Episodes: {anime.episodes}</Card.Text>
                  <Card.Text>Rating: {anime.rated}</Card.Text>
                  <Card.Text>Score: {anime.score}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            // }
            // </li>
          );
        })}
        {/* </ul> */}
      </Row>
    </Container>
  );
};

export default AnimeList;
