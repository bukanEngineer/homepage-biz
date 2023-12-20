import { Layout } from "antd";
import Menuside from "../components/MenuSide/MenuSide";
import MenuTop from "../components/Navbar/TopRight";
import styled from "@emotion/styled";
import TopLeft from "../components/Navbar/TopLeft";
import configProviderSettings from "../style/themeConfig";
import { Outlet } from "react-router";

const { theme } = configProviderSettings;

export const StyledLogoContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const { Header, Content, Footer, Sider } = Layout;

const BaseLayout = () => {
  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        width={256}
        style={{ position: "fixed", minHeight: "100vh" }}
      >
        <StyledLogoContainer>
          <img src="logo.png" alt="company logo" />
        </StyledLogoContainer>
        <Menuside />
      </Sider>
      <Layout style={{ marginLeft: 256 }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            position: "sticky",
            zIndex: 1,
            top: 0,
          }}
        >
          <TopLeft />
          <MenuTop />
        </Header>
        <Content style={{ margin: 24 }}>
          <Outlet />
        </Content>
        <Footer style={{ color: theme.token.colorTextSecondary }}>
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

export default BaseLayout;
