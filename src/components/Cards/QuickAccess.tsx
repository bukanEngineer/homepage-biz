import { Card, Button, Flex } from "antd";
import {
  ApiOutlined,
  TeamOutlined,
  SendOutlined,
  PullRequestOutlined,
  AlertOutlined,
} from "@ant-design/icons";

interface QuickAccessButtonProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
}

const QuickAccessButton: React.FC<QuickAccessButtonProps> = ({
  icon,
  iconColor,
  label,
}) => (
  <div
    style={{
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      width: "124px",
    }}
  >
    <Button
      size="large"
      shape="circle"
      icon={icon}
      style={{ border: "0", color: iconColor }}
    />
    <p>{label}</p>
  </div>
);

const QuickAccess: React.FC = () => {
  const buttonsData: QuickAccessButtonProps[] = [
    { label: "Deposit", icon: <ApiOutlined />, iconColor: "#0C45E1" },
    { label: "Withdrawal", icon: <AlertOutlined />, iconColor: "#0C45E1" },
    { label: "Payout Form", icon: <SendOutlined />, iconColor: "#0C45E1" },
    {
      label: "Payment Link",
      icon: <PullRequestOutlined />,
      iconColor: "#0C45E1",
    },
    { label: "Team Management", icon: <TeamOutlined />, iconColor: "#0C45E1" },
  ];

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
