import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Result = ({ result }) => {
  return (
    <Link to={`/profile/eamzea`} className="results-card">
      <Card
        border={"light"}
        className="justify-content-center align-items-center"
      >
        <Card.Img variant="top" src={result.img} style={{ width: 100 }} />
        <Card.Body className=" btn">
          <Card.Title className="titles">{result.name}</Card.Title>
          <Card.Text className="text">{result.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Result;
