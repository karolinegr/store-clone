import React from "react";
import logo from "./assets/logo-nobg.png";
import { Link } from "react-router-dom";
import { HeaderArea, StyledButton } from "./style";
import { User } from "react-feather";

const Header = () => {
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
            <li>
              <Link to="/" className="login">
                <span className="login-item">
                  <User className="icon" size={"20px"} />
                  <span>Login</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">Cadastrar</Link>
            </li>
            <li>
              <Link to="/">
                <StyledButton>Anunciar</StyledButton>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
