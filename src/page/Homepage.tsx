import { Row, Col, Space, Card, Flex } from "antd";
import QuickAccess from "../components/Cards/QuickAccess";
import TaskList from "../components/Cards/TaskList";
import AccountCards from "../components/Cards/AccountCards";
import { useState } from "react";
import MyButton from "../components/Button";

const Homepage = () => {
  const [loading] = useState(true);
  return (
    <Flex vertical>
      <Row>
        <Col style={{ paddingBottom: 24 }} xxl={24} xl={24} lg={24} sm={0} xs={0}>
          <img src="marketingBanner.png" alt="marketing banner" style={{ width: "100%" }} />
        </Col>
        <MyButton colorScheme='critical'>asdasd</MyButton>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xxl={14} xl={14} lg={24} sm={24} xs={24}>
          <AccountCards />
        </Col>

        <Col xxl={10} xl={10} lg={24} sm={24} xs={24}>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <QuickAccess />
            <TaskList />

            <Card style={{ width: "100%" }} loading={loading}></Card>
          </Space>
        </Col>
      </Row>
    </Flex>
  );
};

export default Homepage;

// {
//   xs: '480px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
//   xxl: '1600px',
// }
