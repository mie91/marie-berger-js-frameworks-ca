import React from "react";
import { Link } from "react-router-dom";
import {Card, Button, Image} from "react-bootstrap";
import PropTypes from "prop-types";

function GameItem ({id, name, rating, released, background_image}) {
    return (

        <Card>
            <Card.Img variant="top" src={background_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><b>Rating: </b>{rating}</Card.Text>
                <Card.Text><b>Release Date: </b>{released}</Card.Text>
            </Card.Body>
        </Card>

    );
    
}

GameItem.propTypes = {
        name: PropTypes.string.isRequired,
        background_image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        released: PropTypes.number.isRequired
};

export default GameItem;