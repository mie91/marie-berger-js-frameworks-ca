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
		const searchValue = e.target.value.toLowerCase();

		const filteredArray = games.filter(function(gam) {
			const lowerCaseName = gam.name.toLowerCase();

			if (lowerCaseName.startsWith(searchValue)) {

				return true;
			}
			return false;
		});

		setFilteredGames(filteredArray);
	};

	if (loading) {
		return <Spinner animation="grow" variant="light"className="spinner"/>;
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
                            <Button className="btn-primary" href={href} block >More Details</Button>
                          </Card>
                        </Col>
                    );
          })}
      </Row>
      </>
    );
 }

export default GamesList;

