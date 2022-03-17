import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

// // variables
// colors
const textColor = "rgb(74, 74, 74)";
const linkText = "#6e0ad6";
const buttonColor = "rgb(247, 131, 35)";
const buttonHover = "#f99d53";
const facebookColor = "rgb(58, 89, 152)";
const facebookHover = "0.9";
const cardShadow = "rgba(153, 153, 153, 0.2) 0px 2px";
const divisorColor = "rgb(242, 242, 242)";

const googleColor = "rgb(66, 133, 244)";
const googleHover = "0.9";

export const PageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  min-width: 400px;
  height: 65%;
  min-height: 500px;
  background-color: #fff;
  padding: 0 30px;
  border-radius: 4px;
  box-shadow: ${cardShadow};
`;

export const FormInput = styled(Form)`
  width: 100%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${linkText};
  font-size: 14px;
  float: right;
  &:hover {
    color: ${linkText};
  }
`;

export const SignInButton = styled(Button)`
  background-color: ${buttonColor};
  border: none;
  width: 100%;
  color: #fff;
  font-size: 16px;
  border-radius: 32px;
  &:hover {
    background-color: ${buttonHover};
  }
`;

export const SmallTitle = styled.h4`
  font-weight: 400;
  color: ${textColor};
`;

export const FacebookButton = styled(Button)`
  width: 100%;
  border-radius: 24px;
  border: none;
  background-color: ${facebookColor};
  margin-bottom: 10px;
  &:hover {
    background-color: ${facebookColor};
    opacity: ${facebookHover};
  }
`;

export const GoogleButton = styled(Button)`
  width: 100%;
  border-radius: 24px;
  border: none;
  background-color: ${googleColor};
  margin-bottom: 18px;
  &:hover {
    background-color: ${googleColor};
    opacity: ${googleHover};
  }
`;

export const OUdiv = styled.div``;

export const Divisor = styled.div`
  width: 100%;
  position: relative;
  border-style: solid;
  margin: 10px 0;
  border-width: 1px 0px 0px;
  border-color: ${divisorColor};
`;

export const Help = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px 0;
  font-size: 12px;
  color: ${textColor};
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 241, 253);
  }
`;
