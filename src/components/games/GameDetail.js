import React, { useEffect, useState } from "react";
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
