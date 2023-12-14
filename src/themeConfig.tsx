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
        colorPrimary: '#0C45E1',
        borderRadius: 8,
        fontFamily: 'Lato',   
      
      },

      components: {
        Button: {
          algorithm: true,
          colorBgContainer: '#E2E9FB',
        },
      }

      
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