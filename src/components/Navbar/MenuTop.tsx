import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Avatar, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";

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

const MenuTop: React.FC = () => (
  <Dropdown menu={{ items }} arrow>
    <a onClick={(e) => e.preventDefault()}>
      <Flex
        gap="small"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Avatar icon={<UserOutlined />} />
        <div>surya</div>
        <DownOutlined />
      </Flex>
    </a>
  </Dropdown>
);

export default MenuTop;
