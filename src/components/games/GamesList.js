import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/API";
import {Row, Col, Button, Spinner, Card} from "react-bootstrap";
import GameItem from "./GameItem";
import Search from "./Search";

function GamesList() {
const [games, setGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);
const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => {
        setGames(json.results);
        setFilteredGames(json.results);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

    const filterCards = function(e) {
		// Let's get the value the user typed in and make it lower case:
		const searchValue = e.target.value.toLowerCase();

		// create a new array from the characters array
		const filteredArray = games.filter(function(char) {
			// make each name lowercase so we can check it properly with the search value
			const lowerCaseName = char.name.toLowerCase();

			// check if the character name begins with the search value using the startsWith method
			if (lowerCaseName.startsWith(searchValue)) {
				// if it does, return true
				// this will add it to the new filtered array
				return true;
			}
			return false;
		});

		// set filtered characters to the new array
		setFilteredGames(filteredArray);
	};

	if (loading) {
		return <Spinner animation="grow" variant="light"className="spinner" />;
	}

    return (
      <>
      <Search handleSearch={filterCards}/>
      <Row>
          {filteredGames.map(game => {
              const { name, background_image, released, rating } = game;
              const href = "games/" + game.id;

               return (
                        <Col sm={4} md={4} key={name}>
                          <Card>
                            <GameItem name={name} background_image={background_image} rating={rating} released={released} />
                            <Button className="btn-primary" href={href} block >Details</Button>
                            </Card>
                        </Col>
                    );
          })}
      </Row>
      </>
    );
 }

export default GamesList;

