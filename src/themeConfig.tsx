// ThemeConfig.tsx
import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

interface ThemeConfigProps {
  children: ReactNode;
}

const ThemeConfig: React.FC<ThemeConfigProps> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        // colorBgContainer: '#f6ffed',
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default ThemeConfig;

// components: {
//     Button: {
//       colorPrimary: '#00b96b',
//       algorithm: true, // Enable algorithm
//     },
//     Input: {
//       colorPrimary: '#eb2f96',
//       algorithm: true, // Enable algorithm
//     },
//   },