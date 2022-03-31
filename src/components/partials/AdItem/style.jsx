import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, NavLink, Card } from "react-bootstrap";

// // variables
// colors
const textColor = "rgb(74, 74, 74)";
const borderColor = "#E3DEDC";
const cardHover = "#FAFAFA";

export const Item = styled(Card)`
  width: 12rem;
  margin: 15px 0;
  border: none;
  padding: 3px;
  &:hover {
    border: 1px solid ${borderColor};
    border-radius: 10px;
    background-color: ${cardHover};
  }
`;

export const ItemImg = styled(Card.Img)`
  border-radius: 10px;
`;

export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: ${textColor};
  &:hover {
    color: ${textColor};
  }
`;
