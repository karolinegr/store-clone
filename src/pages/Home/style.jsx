import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, NavLink } from "react-bootstrap";

// // variables
// colors
const cardBackgroundColor = "#6E0AD6";
const hoverColor = "rgb(134, 27, 169)";
const textColor = "#4A4A4A";

export const SearchArea = styled.div`
  background-color: ${cardBackgroundColor};
  margin: 0;
  width: 100%;
  max-width: 2000px;
  min-height: 200px;
`;

export const SearchBarArea = styled.div`
  margin: 0 auto;
  padding: 20px 50px;
  max-width: 1000px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const StyledFormControl = styled(FormControl)`
  min-height: 50px;
  color: ${textColor};
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const SearchButton = styled(Button)`
  background: #fff;
  border: none;
  color: ${cardBackgroundColor};

  &:focus {
    background-color: white;
    color: ${cardBackgroundColor};
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-color: ${hoverColor};
    color: #fff;
    border: 1px solid #fff;
  }
`;

export const CategoriesArea = styled.div`
  width: 100%;
  margin-top: 15px;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TypeCategorieArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconArea = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export const PageArea = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 35px 30px;
`;

export const AdsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: space-around; */
  flex-wrap: wrap;
`;

export const SeeAll = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// export const FormContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 50%;
//   min-width: 400px;
//   height: 65%;
//   min-height: 500px;
//   background-color: #fff;
//   padding: 0 30px;
//   border-radius: 4px;
//   box-shadow: ${cardShadow};
// `;

// export const FormInput = styled(Form)`
//   width: 100%;
// `;

// export const LinkStyled = styled(Link)`
//   text-decoration: none;
//   color: ${linkText};
//   font-size: 14px;
//   float: right;
//   &:hover {
//     color: ${linkText};
//   }
// `;

// export const SignInButton = styled(Button)`
//   background-color: ${buttonColor};
//   border: none;
//   width: 100%;
//   color: #fff;
//   font-size: 16px;
//   border-radius: 32px;
//   &:hover {
//     background-color: ${buttonHover};
//   }
// `;

// export const SmallTitle = styled.h4`
//   font-weight: 400;
//   color: ${textColor};
// `;

// export const FacebookButton = styled(Button)`
//   width: 100%;
//   border-radius: 24px;
//   border: none;
//   background-color: ${facebookColor};
//   margin-bottom: 10px;
//   &:hover {
//     background-color: ${facebookColor};
//     opacity: ${facebookHover};
//   }
// `;

// export const GoogleButton = styled(Button)`
//   width: 100%;
//   border-radius: 24px;
//   border: none;
//   background-color: ${googleColor};
//   margin-bottom: 18px;
//   &:hover {
//     background-color: ${googleColor};
//     opacity: ${googleHover};
//   }
// `;

// export const OUdiv = styled.div``;

// export const Divisor = styled.div`
//   width: 100%;
//   position: relative;
//   border-style: solid;
//   margin: 10px 0;
//   border-width: 1px 0px 0px;
//   border-color: ${divisorColor};
// `;

// export const Help = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 5px 0;
//   font-size: 12px;
//   color: ${textColor};
//   cursor: pointer;
//   &:hover {
//     background-color: rgb(247, 241, 253);
//   }
// `;
