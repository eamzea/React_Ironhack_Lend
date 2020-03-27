import React from "react";
import { Card } from "react-bootstrap";

const Result = ({ result }) => {
  return (
    <Card border={"light"}>
      <Card.Img variant="top" src={result.img} style={{ width: 50 }} />
      <Card.Body>
        <Card.Title>{result.name}</Card.Title>
        <Card.Text>{result.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Result;
