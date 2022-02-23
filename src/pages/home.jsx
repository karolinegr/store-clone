import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      Página Home - <Link to="/conta">Conta</Link>
    </div>
  );
};

export default Home;
