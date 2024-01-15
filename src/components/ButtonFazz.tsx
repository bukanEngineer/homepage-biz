import { ReactNode } from "react";
import { Button } from "antd";
import styled from "@emotion/styled";

interface ButtonFazzProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  buttonType?: "primary" | "secondary" | "text" | "plain";
  disabled?: boolean;
  danger?: boolean;
  buttonSize?: "large" | "small";
}

interface ButtonStyles {
  [key: string]: {
    default: string;
    danger: string;
    disabled: string;
  };
}

const buttonStyles: ButtonStyles = {
  primary: {
    default: `
      background-color: #0c45e1;
      color: white;
    `,
    danger: `
      background-color: #D93025;
      color: white;
    `,
    disabled: `
      background-color: #BDBDBD;
      color: white;
      cursor: not-allowed;
    `,
  },
  secondary: {
    default: `
      background-color: #E2E9FB;
      color: #0c45e1;
    `,
    danger: `
      background-color: #FBEAE9;
      color: #D93025;
    `,
    disabled: `
      background-color: #BDBDBD;
      color: white;
      cursor: not-allowed;
    `,
  },
  text: {
    default: `
      background-color: transparent;
      color: #0c45e1;

      &:hover {
        background-color: #ECECEC;
      }

    `,
    danger: `
      background-color: transparent;
      color: #D93025;

      &:hover {
        background-color: #ECECEC;
      }
    `,
    disabled: `
      background-color: transparent;
      color: #BDBDBD;
      cursor: not-allowed;

      &:hover {
        background-color: #ECECEC;
      }
    `,
  },
  plain: {
    default: `
      background-color: transparent;
      color: #0C45E1;
      padding: 0;
    `,
    danger: `
      background-color: transparent;
      color: #D93025;
      padding: 0;
    `,
    disabled: `
      background-color: transparent;
      color: #BDBDBD;
      padding: 0;
      cursor: not-allowed;
    `,
  },
};

const buttonSizes = {
  large: {
    height: "48px",
    fontSize: "14px",
    iconSize: "24px",
  },
  small: {
    height: "36px",
    fontSize: "12px",
    iconSize: "18px",
  },
};

const StyledButton = styled(Button)<ButtonFazzProps>`
  &&& {
    ${({ buttonType = "primary", danger, disabled, buttonSize = "small" }) => `
    ${
      buttonStyles[buttonType]?.[
        danger ? "danger" : disabled ? "disabled" : "default"
      ] || ""
    }
      height: ${buttonSizes[buttonSize]?.height};
      font-size: ${buttonSizes[buttonSize]?.fontSize}; 
      border: none;
      box-shadow: none;
      min-width: 80px;
      font-weight: 700;
      display: flex;
      align-items: center;
      border-radius: 12px;

      > .icon { // Target the icon element within the button
        font-size: ${buttonSizes[buttonSize]?.iconSize}; // Apply icon size
        margin-right: 8px;
      }
    `}
  }
`;

export default function ButtonFazz({
  children,
  leftIcon,
  ...props
}: ButtonFazzProps) {
  return (
    <StyledButton {...props}>
      {leftIcon && <span className="icon">{leftIcon}</span>}
      {children}
    </StyledButton>
  );
}
