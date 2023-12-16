import React, { useState } from "react";
import { Layout, Row, Col, Space, Card } from "antd";
import Menuside from "./components/MenuSide/MenuSide";
import { StyledLogoContainer } from "./components/MenuSide/StyledLogo";
import TaskList from "./components/Cards/TaskList";
import QuickAccess from "./components/Cards/QuickAccess";
import AccountCards from "./components/Cards/AccountCards";
import Navbar from "./components/Navbar/Navbar";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [loading] = useState(true);

  const sidebarWidth = 256;

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        width={sidebarWidth}
        style={{
          minHeight: "100vh",
          position: "fixed",
          zIndex: 1,
          borderRight: "1px solid #E0E0E0",
          overflow: "hidden",
        }}
      >
        <StyledLogoContainer>
          <img src="logo.png" alt="logo" />
        </StyledLogoContainer>
        <Menuside />
      </Sider>

      <Layout style={{ marginLeft: sidebarWidth }}>
        <Navbar />
        <Content
          style={{
            margin: "24px 24px",
          }}
        >
          <Row style={{ paddingBottom: 24 }}>
            <Col span={24}>
              <img
                src="marketingBanner.png"
                alt="marketing banner"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={14}>
              <AccountCards />
            </Col>

            <Col span={10}>
              <Space
                direction="vertical"
                size="middle"
                style={{ display: "flex" }}
              >
                <QuickAccess />
                <TaskList />

                <Card style={{ width: "100%" }} loading={loading}></Card>
              </Space>
            </Col>
          </Row>
        </Content>
        <Footer>
          Consumer advisory - XFERS PTE. LTD. is the holder of a Major Payment
          Institution license for e-money issuance under the new Payment
          Services Act. The electronically stored monetary value issued by XFERS
          PTE. LTD. is regarded as "e-money" under Singapore law. Consumers
          (Users) are advised to read our terms of service carefully.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
