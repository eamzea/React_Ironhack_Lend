import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import { AccountCircle, Face, MailOutline, VpnKey } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import ButtonM from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

const EditProfile = props => {
  const classes = useStyles();

  return (
    <Container
      fluid
      className="edit-profile-page d-flex justify-content-center align-items-center"
    >
      <Row className="my-5 edit-profile-row">
        <RubberBand>
          <Col xs={11} md={4} className="edit-profile-box">
            <p className="h3 text-center titles">Edita tu perfil</p>
            <Row className="justify-content-center align-items-center my-5">
              <Col
                xs={8}
                className="d-flex justify-content-center align-items-center"
              >
                <Avatar>H</Avatar>
              </Col>
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
              <Col xs={8}>
                <div className={classes.root}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <ButtonM
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Subir imagen
                    </ButtonM>
                  </label>
                </div>
              </Col>
              <Col
                xs={8}
                className="d-flex justify-content-start align-items-center mt-5"
              >
                <Link to={"/profile"}>
                  <Button variant="dark" className="text">
                    Actualizar
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

export default EditProfile;
