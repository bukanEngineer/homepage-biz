import styled from "@emotion/styled";
import { Button } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  colorScheme: "critical" | "positive";
};
function MyButton({ children, colorScheme }: Props) {
  return <StyledButton>{children}</StyledButton>;
}

export default MyButton;

const StyledButton = styled(Button)`
  background-color: green;
`;
