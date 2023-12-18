import { Row, Col, Space, Card, Flex } from "antd";
import QuickAccess from "../components/Cards/QuickAccess";
import TaskList from "../components/Cards/TaskList";
import AccountCards from "../components/Cards/AccountCards";
import { useState } from "react";

const Homepage = () => {
  const [loading] = useState(true);
  return (
    <Flex vertical>
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
