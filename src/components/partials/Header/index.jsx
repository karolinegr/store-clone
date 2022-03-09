import React from "react";
import logo from "./assets/logo-nobg.png";
import { Link } from "react-router-dom";
import { HeaderArea, StyledButton } from "./style";
import { User } from "react-feather";

import { isLogged } from "../../../helpers/auth-handler";

const Header = () => {
  let logged = isLogged();

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            {!logged && (
              <>
                <li>
                  <Link to="/signin" className="login">
                    <span className="login-item">
                      <User className="icon" size={"20px"} />
                      <span>Login</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signin">
                    <StyledButton>Anunciar</StyledButton>
                  </Link>
                </li>
              </>
            )}
            {logged && (
              <>
                <li>
                  <Link to="/my-account" className="login">
                    <span className="login-item">
                      <User className="icon" size={"20px"} />
                      <span>Minha conta</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/logout">Sair</Link>
                </li>
                <li>
                  <Link to="/post">
                    <StyledButton>Anunciar</StyledButton>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
