import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
    
getItem('Home', '1', <SettingOutlined />),

  getItem('Account', 'sub1', <SettingOutlined />, [
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
  ]),

  getItem('Pay', 'sub2', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),

  getItem('Receive', 'sub3', <SettingOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),

  getItem('Loan', 'sub4', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),


  getItem('Cards', 'sub5', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),

  getItem('Developer Tools', 'sub6', <SettingOutlined />),
  getItem('Integrations', 'sub7', <SettingOutlined />),



  { type: 'divider' },

  getItem('Setting', 'sub8', <SettingOutlined />),
  getItem('FAQ', 'sub9', <SettingOutlined />),
  getItem('Request a feature', 'sub10', <SettingOutlined />),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8','sub9', 'sub10'];

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
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={items}
    />
  );
};

export default Menuside;