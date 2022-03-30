import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchArea,
  SearchBarArea,
  StyledFormControl,
  SearchButton
} from "./style";
import * as Icon from "react-feather";
import { Row, Col, InputGroup } from "react-bootstrap";
import { PageContainer, ErrorMessage } from "../../components/main-components";
import useAPI from "../../helpers/api";
import { doLogin } from "../../helpers/auth-handler";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    <>
      <SearchArea className="m-0">
        <SearchBarArea>
          <InputGroup>
            <StyledFormControl placeholder="Estou procurando por..." />
            <SearchButton id="button-addon2">Button</SearchButton>
          </InputGroup>
        </SearchBarArea>
      </SearchArea>
      <PageContainer></PageContainer>
    </>
  );
};

export default Home;
