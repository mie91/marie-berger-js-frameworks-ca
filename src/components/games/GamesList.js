import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

function GamesList() {
const [games, setGames] = useState([]);
const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => setGames(json.results))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

    if (loading) {
        return <Spinner animation="grow" className="spinner" />;
    }

  return (
    <Row>
      {games.map(game => (
        <Col sm={4}>
          <Card>
            <p key={game.id}>{game.name}</p>
            <p>{game.rating}</p>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default GamesList;















































/*import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


function GamesList() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);



   useEffect(() => {
     fetch(BASE_URL)
       .then(response => response.json())
       .then(json => setGames(json.results))
       .catch(error => console.log(error))
       .finally(() => setLoading(false));
   }, []);

   if (loading) {
     return <Spinner animation="grow" className="spinner" />;
   }

  return (
    <>
      <Row>
        {games.map(function(game) {
          console.log(game);

          const url = "/game/" + game.id;

          return (
            <Col sm={6} md={4} key={game.id}>
              <Card>
                <h5 className="card-title">{game.name}</h5>
                <div className="gameInfo">
                  <p className="gameInfo-detail">Rating: {game.rating}</p>
                  <p className="gameInfo-detail">Released: {game.released}</p>
                </div>
                <Image
                  thumbnail
                  className="gameThumbnail"
                  src={game.background_image}
                  alt={game.name}
                />
                <Button className="btn-primary" href={url}>
                  View details
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default GamesList;

*/