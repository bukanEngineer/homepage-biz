import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "antd";

interface FazzButton {
  buttontype?: "primary" | "secondary";
  size?: "large" | "small";
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
}

const FazzButton = styled(Button)<FazzButton>`
  &&& {
    border: none;
    box-shadow: none;
    min-width: 80px;
    font-weight: 700;

    ${(props) =>
      props.buttontype === "primary" &&
      css`
        background-color: ${props.disabled
          ? "#BDBDBD"
          : props.danger
          ? "#D93025"
          : "#0c45e1"};
        cursor: ${props.disabled ? "not-allowed" : "pointer"};
        color: white;
      `};

    ${(props) =>
      props.buttontype === "secondary" &&
      css`
        background-color: ${props.disabled
          ? "#BDBDBD"
          : props.danger
          ? "#FBEAE9"
          : "#E2E9FB"};
        cursor: ${props.disabled ? "not-allowed" : "pointer"};
        color: ${props.disabled
          ? "white"
          : props.danger
          ? "#D93025"
          : "#0c45e1"};
      `};

    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 14px;
        height: 48px;
      `};

    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 12px;
        height: 36px;
      `};

    ${(props) =>
      props.icon &&
      css`
        padding-left: 30px; /* Adjust for icon size */
        position: relative;

        > .anticon {
          position: absolute;
          left: 10px; /* Adjust for icon position */
          top: 50%;
          transform: translateY(-50%);
        }
      `};
  }
`;

export default FazzButton;
