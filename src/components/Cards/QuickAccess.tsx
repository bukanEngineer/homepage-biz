import { Card, Button, Flex } from "antd";
import React, { MouseEvent } from "react";
import {
  ApiOutlined,
  TeamOutlined,
  SendOutlined,
  PullRequestOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import configProviderSettings from "../../themeConfig";
import styled from "@emotion/styled";

const { theme } = configProviderSettings;

const QuickAccesButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 124px;
`;

interface QuickAccessButtonProps {
  icon: React.ReactNode;
  label: string;
  iconcolor?: string;
}

const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.boxShadow = "0px 2px 4px 0px rgba(51, 51, 51, 0.16)";
};

const handleMouseOut = (e: MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.boxShadow = "none";
};

const QuickAccessButton: React.FC<QuickAccessButtonProps> = ({
  icon,
  label,
  iconcolor,
}) => (
  <QuickAccesButtonContainer>
    <Button
      shape="circle"
      icon={icon}
      style={{ border: "0", width: "48px", height: "48px", color: iconcolor || theme.token.colorPrimary,  }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
    <p>{label}</p>
  </QuickAccesButtonContainer>
);

const QuickAccess: React.FC = () => {
  const buttonsData: QuickAccessButtonProps[] = [
    { label: "Deposit", icon: <ApiOutlined /> },
    { label: "Withdrawal", icon: <AlertOutlined /> },
    { label: "Payout Form", icon: <SendOutlined /> },
    { label: "Payment Link", icon: <PullRequestOutlined /> },
    { label: "Team Management", icon: <TeamOutlined /> },
  ];

  // Define Button Row in UI

  const rowButtons = buttonsData.slice(0, 3);
  const secondRowButtons = buttonsData.slice(3, 5);

  return (
    <Card title="Quick Access" style={{ width: "100%" }}>
      <Flex
        style={{
          justifyContent: "flex-start",
          paddingBottom: "16px",
          gap: "4px",
        }}
      >
        {rowButtons.map((button, index) => (
          <QuickAccessButton key={index} {...button} />
        ))}
      </Flex>

      <Flex style={{ justifyContent: "flex-start", gap: "4px" }}>
        {secondRowButtons.map((button, index) => (
          <QuickAccessButton key={index} {...button} />
        ))}
      </Flex>
    </Card>
  );
};

export default QuickAccess;
