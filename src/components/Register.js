import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const RegisterP = props => {
  const [searchState, updateSearchState] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    updateSearchState(value);
  };

  return (
    <Container fluid className="register-page">
      <Row className="justify-content-center align-items-center">
        <Col xs={11}>
          <h2 className="text-center m-3 text-white titles">
            Únete a Lendit y obtén excelentes beneficios
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={11}>
          <h2 className="text-center m-3 text-white titles">¿Cómo funciona?</h2>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center my-5">
        <Col xs={11} md={4}>
          <div className="d-flex justify-content-center align-items-center">
            <img className="register-svg" src="images/search-register.svg" />
          </div>
          <p className="text-center text h2 text-white">Busca</p>
          <p className="text-center text h4 text-white">
            Encuentra aquello que buscas entre más de 1,000 productos diferentes
          </p>
        </Col>
        <Col xs={11} md={4}>
          <div className="d-flex justify-content-center align-items-center">
            <img className="register-svg" src="images/contact-register.svg" />
          </div>
          <p className="text-center text h2 text-white">Contacta</p>
          <p className="text-center text h4 text-white">
            Comunícate con el propietario del artículo elegido y concuerda el
            método de paga y los días del préstamo
          </p>
        </Col>
        <Col xs={11} md={4}>
          <div className="d-flex justify-content-center align-items-center">
            <img className="register-svg" src="images/pay-register.svg" />
          </div>
          <p className="text-center text h2 text-white">Paga</p>
          <p className="text-center text h4 text-white">
            Realiza el pago acordado e informa al propietario para comenzar a
            utilizar el artículo elegido
          </p>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center py-5">
        <Col
          xs={11}
          className="d-flex justify-content-center align-items-center"
        >
          <Link to="/sign-in">
            <Button variant="dark" size="lg">
              Únete
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterP;
