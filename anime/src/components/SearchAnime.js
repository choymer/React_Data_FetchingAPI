import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form } from "react-bootstrap";

const SearchAnime = ({ setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");
  const [error, setError] = useState("");

  /*  console.log(newSearchTerm); //to verify the setNewSearchTerm is listening to the event on change. */

  return (
    <Form
      onSubmit={(event) => {
        const regex = /^([^\s][^\0-9]*[A-Za-z0-9]\s*)[^\s]*$/;

        // prevent the forms default behaviour
        event.preventDefault();
        //validation that the search term isn't empty or start with an space
        if (newSearchTerm.length > 0 && regex.test(newSearchTerm)) {
          // render setSearchTerm from App with the value of newSearchTerm(client input)
          setSearchTerm(newSearchTerm);
          // reset the input to be empty
          setNewSearchTerm("");
          setError("");
        } else {
          setError("❌ Only accept characters between A-z at the beginning ❌");
        }
      }}
    >
      {" "}
      <Form.Group>
        <Form.Label htmlFor="animeName">
          {" "}
          <h2 className="searchText">Search an anime:</h2>{" "}
        </Form.Label>
        <Form.Control
          id="animeName"
          className="input-field"
          // 1. set the value of the input
          value={newSearchTerm}
          // 2. Update the state whenever a change is made to that value
          onChange={(event) => setNewSearchTerm(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
      <p className="error">{error}</p>
    </Form>
  );
};

export default SearchAnime;
