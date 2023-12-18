import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Avatar, Flex} from "antd";
import { UserOutlined} from "@ant-design/icons";
import configProviderSettings from "../../themeConfig";
import { useState } from "react";

const { theme } = configProviderSettings;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const TopRight: React.FC = () => {
  const [userData] = useState({
    name: "Jennie Blackpink",
    role: "Owner",
  });

  const [companyData] = useState({
    name: "CompanyName Pte Ltd",
    location: "SG",
  });

  return (
    <Dropdown menu={{ items }} arrow>
      <a onClick={(e) => e.preventDefault()}>
        <Flex style={{ alignItems: "center", gap: 12 }}>
          <Avatar icon={<UserOutlined />} />
          <Flex vertical style={{ lineHeight: "normal", gap: 4 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: theme.token.colorTextBase,
              }}
            >
              {userData.name}
            </span>
            <span
              style={{ fontSize: 12, color: theme.token.colorTextSecondary }}
            >
               {companyData.name}
            </span>
            <span
              style={{ fontSize: 12, color: theme.token.colorTextSecondary }}
            >
              {companyData.location} • {userData.role}
            </span>
          </Flex>
          <DownOutlined style={{ color: theme.token.colorTextBase }} />
        </Flex>
      </a>
    </Dropdown>
  );
};

export default TopRight;