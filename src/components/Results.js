import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Card,
  CardColumns
} from "react-bootstrap";
import Result from "./ui/Result";

const Results = props => {
  const { stuff } = useParams();

  const [searchState, updateSearchState] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    updateSearchState(value);
  };

  return (
    <Container className="home" fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={11} className="results-col">
          <p>Busca de nuevo</p>
          <div className="form-results-box">
            <InputGroup>
              <FormControl
                placeholder="¿Qué estás buscando?"
                aria-label="¿Qué estás buscando?"
                aria-describedby="basic-addon2"
                name="search"
                onChange={e => handleChange(e)}
              />
              <InputGroup.Append>
                <Link to={`/results/${searchState}`}>
                  <Button variant="dark">Buscar</Button>
                </Link>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <CardColumns>
        <Result />
      </CardColumns>
    </Container>
  );
};

export default Results;
