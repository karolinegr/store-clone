import React from "react";
import logo from "./assets/logo-nobg.png";
import { Link, useNavigate } from "react-router-dom";
import { HeaderArea, StyledButton, ButtonLogout } from "./style";
import { User } from "react-feather";
import { isLogged, doLogout } from "../../../helpers/auth-handler";

const Header = () => {
  const navigate = useNavigate();

  let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = "/";
  };

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
                    <div className="login-item">
                      <User className="icon" size={"18px"} />
                      <span>Login</span>
                    </div>
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
                  <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>
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
