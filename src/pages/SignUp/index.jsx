import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PageArea,
  FormContent,
  FormInput,
  LinkStyled,
  SignInButton,
  FacebookButton,
  GoogleButton,
  SmallTitle,
  Divisor,
  Help
} from "./style";
import * as Icon from "react-feather";
import { Row, Col, Dropdown } from "react-bootstrap";
import { PageContainer, ErrorMessage } from "../../components/main-components";
import useAPI from "../../helpers/api";
import { doLogin } from "../../helpers/auth-handler";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const api = useAPI();
  const [name, setName] = useState("");
  const [stateLoc, setStateLoc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDisabled(true);

    //const json = await api.login(email, password);
    //
    //if (json.error) {
    //  setError(json.error);
    //} else {
    //  doLogin(json.token, rememberPassword);
    //  navigate("/");
    //}
    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageArea>
        <FormContent>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SmallTitle>Crie a sua conta. É grátis!</SmallTitle>
          <div className="social-media">
            <FacebookButton disabled={disabled}>
              Entrar com o Facebook
            </FacebookButton>
            <GoogleButton disabled={disabled}>Entrar com o Google</GoogleButton>
          </div>
          <Row className="w-100 d-flex justify-content-between align-items-stretch">
            <Col xs={8} sm={8} md={8} lg={9} xl={9} className="p-0">
              <FormInput>
                <FormInput.Group className="mb-3" controlId="formGroupName">
                  <FormInput.Label>Nome</FormInput.Label>
                  <FormInput.Control
                    disabled={disabled}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormInput.Group>
              </FormInput>
            </Col>
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="p-0">
              <FormInput>
                <FormInput.Group className="mb-3" controlId="formGroupStateLoc">
                  <FormInput.Label>Estado</FormInput.Label>
                  <Dropdown>
                    <Dropdown.Toggle>{stateLoc}</Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ fontSize: "10px", width: "30%" }}
                      disabled={disabled}
                      type="text"
                      value={stateLoc}
                      onClick={(e) => setStateLoc(e.target.value)}
                    >
                      <Dropdown.Item>Teste</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </FormInput.Group>
              </FormInput>
            </Col>
          </Row>
          <FormInput>
            <FormInput.Group className="mb-3" controlId="formGroupEmail">
              <FormInput.Label>E-mail</FormInput.Label>
              <FormInput.Control
                disabled={disabled}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInput.Group>
            <FormInput.Group className="mb-3" controlId="formGroupPassword">
              <Row>
                <Col xs="5" sm="5" md="6" lg="6">
                  <FormInput.Label>Senha</FormInput.Label>
                </Col>
                <Col xs="7" sm="7" md="6" lg="6">
                  <LinkStyled to="/forget-password">
                    Esqueceu sua senha?
                  </LinkStyled>
                </Col>
              </Row>
              <FormInput.Control
                disabled={disabled}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormInput.Group>
            <SignInButton
              type="submit"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Cadastre-se
            </SignInButton>
          </FormInput>

          <Divisor />
          <span>
            Já tem uma conta?
            <LinkStyled to="/signin" style={{ marginLeft: "5px" }}>
              Entrar
            </LinkStyled>
          </span>
        </FormContent>
      </PageArea>
    </PageContainer>
  );
};

export default Signup;
