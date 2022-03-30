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
import { Row, Col } from "react-bootstrap";
import { PageContainer, ErrorMessage } from "../../components/main-components";
import useAPI from "../../helpers/api";
import { doLogin } from "../../helpers/auth-handler";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const api = useAPI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(true);
  const [error, setError] = useState("");

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDisabled(true);
    setError("");

    const json = await api.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      navigate("/");
    }
    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageArea>
        <FormContent>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SmallTitle>Acesse a sua conta</SmallTitle>
          <div className="social-media">
            <FacebookButton disabled={disabled}>
              Entrar com o Facebook
            </FacebookButton>
            <GoogleButton disabled={disabled}>Entrar com o Google</GoogleButton>
          </div>
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
              Entrar
            </SignInButton>
          </FormInput>

          <Divisor />
          <span>
            Não tem uma conta?
            <LinkStyled to="/signup" style={{ marginLeft: "5px" }}>
              Cadastre-se
            </LinkStyled>
          </span>
          <Help>
            Preciso de ajuda <Icon.ChevronRight size={16} />
          </Help>
        </FormContent>
      </PageArea>
    </PageContainer>
  );
};

export default Signin;
