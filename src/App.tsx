import React, { useState } from "react";
import { Layout, theme, Menu, Row, Col, Space, Flex } from "antd";
import Menuside from "./components/MenuSide/MenuSide";
import MenuTop from "./components/Navbar/MenuTop";
import { Button, Divider, Tooltip } from "antd";
import { Avatar, Card, Skeleton, Switch } from "antd";
import ThemeConfig from "./themeConfig";
import { StyledLogoContainer } from "./components/MenuSide/StyledLogo";
import TaskList from "./components/Cards/TaskList";
import QuickAccess from "./components/Cards/QuickAccess";
import { QuestionCircleOutlined } from "@ant-design/icons";
import AccountCards from "./components/Cards/AccountCards";

const { Content, Footer, Sider, Header } = Layout;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const sidebarWidth = 256;
  return (
    <ThemeConfig>
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
            <img src="src/components/logo.png" alt="logo" />
          </StyledLogoContainer>
          <Menuside />
        </Sider>

        <Layout style={{ marginLeft: sidebarWidth }}>
          <Header
            style={{
              paddingInline: 24,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: "80px",
              position: "sticky",
              width: "100%",
              top: 0,
              backgroundColor: "white",
              borderBottom: "1px solid #E0E0E0",
              zIndex: 1,
            }}
          >
            <span style={{ flexGrow: 1, fontSize: "24px", fontWeight: "bold" }}>
              Welcome back, Jennie!
            </span>

            <div>
              <Tooltip title="Ask fazzbiz team">
                <Button
                  shape="circle"
                  icon={<QuestionCircleOutlined />}
                  style={{ background: "white" }}
                />
              </Tooltip>
            </div>

            <Divider
              type="vertical"
              style={{ borderInline: "1px solid #E0E0E0" }}
            />

            <MenuTop />
          </Header>

          <Content
            style={{
              margin: "24px 24px",
            }}
          >
            <Row style={{ paddingBottom: 24 }}>
              <Col span={24}>
                <img
                  src="src/components/marketingBanner.png"
                  alt="marketing banner"
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={14}>
                <AccountCards/>
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
          <Footer
            style={{
              padding: 0,
              marginInline: "24px",
              marginBottom: "24px",
              fontWeight: 400,
              color: "#757575"
            }}
          >
            Consumer advisory - XFERS PTE. LTD. is the holder of a Major Payment
            Institution license for e-money issuance under the new Payment
            Services Act. The electronically stored monetary value issued by
            XFERS PTE. LTD. is regarded as "e-money" under Singapore law.
            Consumers (Users) are advised to read our terms of service
            carefully.
          </Footer>
        </Layout>
      </Layout>
    </ThemeConfig>
  );
};

export default App;
