import styled from "styled-components";

// // variables
// colors
const textColor = "rgb(74, 74, 74)";
const hoverText = "#6e0ad6";
const buttonColor = "rgb(247, 131, 35)";
const buttonHover = "#f99d53";

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;

  a {
    text-decoration: none;
  }
  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: row;
  }

  img {
    max-height: 60px;
  }

  nav {
    height: 60px;
    width: 100%;
    ul {
      list-style-type: none;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      li {
        margin: 0 20px;
        font-weight: 600;
        height: 100%;
        min-height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .login {
          .icon {
            color: ${textColor};
            margin-right: 5px;
          }
          .login-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            &:hover {
              color: ${hoverText};
              .icon {
                color: ${hoverText};
              }
            }
          }
        }
        a {
          color: ${textColor};
          font-size: 14px;
          &:hover {
            color: ${hoverText};
          }
        }
      }
    }
  }
`;

export const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${buttonColor};
  color: #fff;
  font-size: 15px;
  line-height: 21px;
  font-weight: 700;
  border-radius: 30px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    background-color: ${buttonHover};
  }
`;

export const ButtonLogout = styled.button`
  border: none;
  background: none;
  font-weight: 600;
  color: ${textColor};
  font-size: 14px;

  &:hover {
    color: ${hoverText};
  }
`;
