import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import {Row, Col, Button, Image, Spinner} from "react-bootstrap";


function GameDetail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  let {id} = useParams();

  const url = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.dir(json)
        setDetail(json);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="grow" className="spinner" />;
  }

  return (
    <div className="detailBox">
    <h1 className="mainHeader">{detail.name}</h1>
      <div className="detail-image">
        <Image src={detail.background_image} />
      </div>
      <Row>

        <Col>
          <div>
            <h2 className="subHeader">Description </h2> <div className="gameDesc" dangerouslySetInnerHTML={{ __html: detail.description }}/>
          </div>
          <Button className="btn-primary" href={detail.website}>More Info
          </Button>
        </Col>
      </Row>
    </div>
  );
}


export default GameDetail






































/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/API";

function GameDetail() {
  const [details, setDetails] = useState({});

  // get the id from the url
  const { id } = useParams();
  console.log("id", id);

  const url = BASE_URL + "/game/" + id;

  console.log(url);

  useEffect(function() {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setDetails(result);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Released: {details.released}</p>
      <p>Rating: {details.rating}</p>
    </div>
  );
}

export default GameDetail;

*/