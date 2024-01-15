import styled from "@emotion/styled";
import { Button } from "antd";
import { ReactNode } from "react";

interface FdsButtonProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  buttonSize?: "large" | "small";
  buttonType?:
    | "primary"
    | "primary-destructive"
    | "secondary"
    | "secondary-destructive"
    | "text"
    | "plain";
}

interface ButtonStyles {
  [key: string]: string;
}

const buttonStyles: ButtonStyles = {
  primary: `
    background-color: #0c45e1;
    color: white;
  `,
  "primary-destructive": `
      background-color: #D93025;
      color: white;
    `,
  secondary: `
    background-color: #E2E9FB;
    color: #0c45e1;
  `,
  "secondary-destructive": `
    background-color: #FBEAE9;
    color: #D93025;
  `,
  text: `
    background-color: transparent;
    color: #0c45e1;

    &:hover {
      background-color: #ECECEC;
    }
  `,
  plain: `
    background-color: transparent;
    color: #333;
    padding: 0;
    height: 24px;
    border-radius: 0;
    color: #0c45e1;
  `,
};

const getButtonStyles = (buttonType: string) => buttonStyles[buttonType] || "";

const getButtonHeight = (size?: "large" | "small") => `
  height: ${size === "large" ? "48px" : "36px"};
  font-size: ${size === "large" ? "14px" : "12px"};
`;

const StyledButton = styled(Button)<FdsButtonProps>`
  padding-inline: 16px;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  box-shadow: none;
  min-width: 80px;
  ${({ buttonType }) => getButtonStyles(buttonType || "default")};

  /* Adjust the height based on the size prop */
  ${({ buttonSize }) => getButtonHeight(buttonSize)};
`;

export default function FdsButton({
  children,
  leftIcon,
  ...props
}: FdsButtonProps) {
  return (
    <StyledButton {...props}>
      {" "}
      {leftIcon && <span>{leftIcon}</span>}
      {children}
    </StyledButton>
  );
}
