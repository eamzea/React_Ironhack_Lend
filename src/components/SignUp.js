import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import { AccountCircle, Face, MailOutline, VpnKey } from "@material-ui/icons";

const CssTextField = withStyles({
  root: {
    color: "black",
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black"
      },
      "&:hover fieldset": {
        borderColor: "black"
      },
      "&.Mui-focused fieldset": {
        borderColor: "black"
      }
    }
  }
})(TextField);

const SignUp = props => {
  const [searchState, updateSearchState] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    updateSearchState(value);
  };

  return (
    <Container
      fluid
      className="signup-page d-flex justify-content-center align-items-center"
    >
      <Row className="my-5 signup-row">
        <RubberBand>
          <Col xs={11} md={4} className="signup-box">
            <p className="h3 text-center titles">Registra tu cuenta</p>
            <Row className="justify-content-center align-items-center my-5">
              <Col xs={8}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Face />
                  </Grid>
                  <Grid item>
                    <CssTextField
                      id="input-with-icon-grid"
                      label="Nombre"
                      className="text"
                    />
                  </Grid>
                </Grid>
              </Col>
              <Col xs={8}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <CssTextField
                      id="input-with-icon-grid"
                      label="Usuario"
                      className="text"
                    />
                  </Grid>
                </Grid>
              </Col>
              <Col xs={8}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <MailOutline />
                  </Grid>
                  <Grid item>
                    <CssTextField
                      id="input-with-icon-grid"
                      label="Correo"
                      className="text"
                    />
                  </Grid>
                </Grid>
              </Col>
              <Col xs={8}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <VpnKey />
                  </Grid>
                  <Grid item>
                    <CssTextField
                      id="input-with-icon-grid"
                      label="Contraseña"
                      className="text"
                    />
                  </Grid>
                </Grid>
              </Col>
              <Col xs={8}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <VpnKey />
                  </Grid>
                  <Grid item>
                    <CssTextField
                      id="input-with-icon-grid"
                      label="Confirma Contraseña"
                      className="text"
                    />
                  </Grid>
                </Grid>
              </Col>
              <Col
                xs={8}
                className="d-flex justify-content-start align-items-center mt-5"
              >
                <Link to={"/profile"}>
                  <Button variant="dark" className="text">
                    Registrar
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </RubberBand>
      </Row>
    </Container>
  );
};

export default SignUp;
