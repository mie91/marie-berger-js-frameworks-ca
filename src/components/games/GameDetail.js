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
  }, [url]);

  if (loading) {
    return <Spinner animation="grow" variant="light" className="spinner" />;
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

