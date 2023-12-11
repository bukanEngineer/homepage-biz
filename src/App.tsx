import React, { useState } from "react";
import { Layout, theme, Menu, Row, Col, Space } from "antd";
import Menuside from "./components/MenuSide/MenuSide";
import Navbar from "./components/Navbar/Navbar";
import { Button, Card } from "antd";
import ThemeConfig from "./themeConfig";
import { StyledLogoContainer } from "./components/MenuSide/StyledLogo";

const { Content, Footer, Sider, Header } = Layout;

const App: React.FC = () => {
  return (
    <ThemeConfig>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          width={256}
          style={{ 
            minHeight: "100vh", 
            position: "relative",
            overflow: 'auto',
          }}>
          <StyledLogoContainer>
            <img src="src/components/logo.png" alt="logo" />
          </StyledLogoContainer>
          <Menuside />
        </Sider>

        <Layout>
          <Header
            style={{
              paddingInline: 0,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: "80px",
            }}
          >
            <p style={{ color: "white", height: "100%" }}>content</p>
            <Navbar />
          </Header>

          <Content
            style={{
              margin: "0 24px",
            }}
          >
             {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
            <Button type="primary">Ini Button</Button>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ThemeConfig>
  );
};

export default App;

// style={{minHeight: '100vh'}}
