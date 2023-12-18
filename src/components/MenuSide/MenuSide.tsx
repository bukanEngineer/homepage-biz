import React, { useState } from "react";
import {
  SendOutlined,
  SettingOutlined,
  HomeOutlined,
  BankOutlined,
  QuestionOutlined,
  CodeOutlined,
  ExperimentOutlined,
  LinkOutlined,
  BuildOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";


type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'| 'item',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Account', '2', <BankOutlined />, [
    getItem('Option', 'sub2-1'),
    getItem('Option', 'sub2-2'),
  ]),
  getItem('Pay', '3', <SendOutlined />, [
    getItem('Option', 'sub3-1'),
    getItem('Option', 'sub3-2'),
  ]),
  getItem('Receive', '4', <ContainerOutlined />, [
    getItem('Option', 'sub4-1'),
    getItem('Option', 'sub4-2'),
  ]),
  getItem('Loan', '5', <BuildOutlined />, [
    getItem('Option', 'sub5-1'),
    getItem('Option', 'sub6-2'),
  ]),
  getItem('Developer Tools', '6', <ExperimentOutlined />),
  getItem('Integrations', '7', <LinkOutlined />),

  { type: "divider" },
  getItem('Setting', '8', <SettingOutlined />),
  getItem('FAQ', '9', <QuestionOutlined />),
  getItem('Request a feature', '10', <CodeOutlined />),

];

// submenu keys of first level
const rootSubmenuKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Menuside: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256, border: 0}}
      items={items}
      defaultSelectedKeys={['1']}
    />
  );
};

export default Menuside;

