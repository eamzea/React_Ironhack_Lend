import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";

const Home = props => {
  return (
    <Container className="home" fluid>
      <Row className="search-row justify-content-center align-items-center">
        <Col xs={6} className="search-col">
          <div className="form-box">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="¿Qué estás buscando?"
                aria-label="¿Qué estás buscando?"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="dark">Buscar</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
