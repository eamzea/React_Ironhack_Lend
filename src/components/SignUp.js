import React, { useState } from "react";
import SuccessRegistration from "./ui/SuccessRegistration";
import LendService from "../services/lendService";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import {
  AccountCircle,
  Face,
  MailOutline,
  VpnKey,
  PhoneIphoneOutlined,
} from "@material-ui/icons";

const CssTextField = withStyles({
  root: {
    color: "black",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const SignUp = () => {
  const [userState, updateUserState] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: Boolean,
  });

  const [successState, updateSuccessState] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUserState(Object.assign({}, userState, { [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { checked } = e.target;
    updateUserState(Object.assign({}, userState, { terms: checked }));
  };

  const isReady = () => {
    if (
      userState.name != "" &&
      userState.username != "" &&
      userState.email != "" &&
      userState.password != "" &&
      userState.confirmPassword != "" &&
      userState.terms === true
    ) {
      if (userState.password === userState.confirmPassword) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleRegister = () => {
    const lendService = new LendService();

    // lendService.signUp(userState).then((res) => {
    updateSuccessState(true);
    // });
  };

  return (
    <>
      {successState ? (
        <SuccessRegistration />
      ) : (
        <Container
          fluid
          className="signup-page d-flex justify-content-center align-items-center"
        >
          <Row className="my-5 signup-row">
            <RubberBand>
              <Col xs={11} lg={4} className="signup-box">
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
                          name="name"
                          onChange={handleChange}
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
                          name="username"
                          onChange={handleChange}
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
                          name="email"
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Col>
                  <Col xs={8}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <PhoneIphoneOutlined />
                      </Grid>
                      <Grid item>
                        <CssTextField
                          id="input-with-icon-grid"
                          label="Teléfono"
                          className="text"
                          name="phone"
                          onChange={handleChange}
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
                          type="password"
                          name="password"
                          onChange={handleChange}
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
                          type="password"
                          name="confirmPassword"
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Col>
                  <Col xs={8} className="my-5">
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Form.Group
                          controlId="formBasicCheckbox"
                          className="m-0"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Acepto Términos y condiciones"
                            name="terms"
                            onChange={handleCheckbox}
                          />
                        </Form.Group>
                      </Grid>
                    </Grid>
                  </Col>
                  <Col
                    xs={8}
                    className="d-flex justify-content-start align-items-center"
                  >
                    {isReady() ? (
                      <Button
                        variant="dark"
                        className="text"
                        onClick={handleRegister}
                      >
                        Registrar
                      </Button>
                    ) : (
                      <Button
                        variant="dark"
                        className="text"
                        disabled
                        onClick={handleRegister}
                      >
                        Registrar
                      </Button>
                    )}
                  </Col>
                </Row>
              </Col>
            </RubberBand>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SignUp;
