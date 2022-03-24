import React, { useState, useEffect } from "react";
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
  Help,
  Select
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
  const [stateList, setStateList] = useState([]);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const getStatesList = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStatesList();
  }, []);

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
            <Col xs={8} sm={8} md={8} lg={8} xl={8} className="p-0">
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
            <Col xs={3} sm={3} md={3} lg={3} xl={3} className="p-0">
              <FormInput>
                <FormInput.Group controlId="formGroupStateLoc">
                  <FormInput.Label>Estado</FormInput.Label>
                  <Select
                    disabled={disabled}
                    value={stateLoc}
                    onChange={(e) => setStateLoc(e.target.value)}
                  >
                    <option hidden={true}>Estado</option>
                    {stateList.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </Select>
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
              <FormInput.Label>Senha</FormInput.Label>
              <FormInput.Control
                disabled={disabled}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormInput.Group>
            <FormInput.Group className="mb-3" controlId="formGroupPassword">
              <FormInput.Label>Confirmar senha</FormInput.Label>
              <FormInput.Control
                disabled={disabled}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
