import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";

const SuccessRegistration = ({ device }) => {
  return (
    <Container fluid className="success-page">
      <Row className="my-5 success-row flex-column justify-content-center align-items-center">
        <RubberBand>
          <Col xs={12} className="my-5">
            <p className="text h1 text-dark my-5 text-center">
              Te hemos enviado un {device === "email" ? "correo" : "mensaje"}{" "}
              para poder verificar tu{" "}
              {device === "email" ? "correo" : "teléfono"}
            </p>
          </Col>
          <Col xs={12} className="my-5">
            <Link to="/">
              <Button variant="dark" className="text">
                Ir al inicio
              </Button>
            </Link>
          </Col>
        </RubberBand>
      </Row>
    </Container>
  );
};

export default SuccessRegistration;
