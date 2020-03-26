import React from "react";
import {Card, Image} from "react-bootstrap";
import PropTypes from "prop-types";

function GameItem ({name, rating, released, background_image}) {
    return (

        <>
            <Image src={background_image} fluid/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="gameInfo">
                <p className="gameInfo-detail"><b>Rating:</b> {rating}</p>
                <p className="gameInfo-detail"><b>Released: </b>{released}</p>
                </div>
            </Card.Body>
        </>

    );
    
}

GameItem.propTypes = {
        name: PropTypes.string.isRequired,
        background_image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        released: PropTypes.string.isRequired
};

export default GameItem;