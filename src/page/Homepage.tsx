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

      {/* xs={24} sm={16} md={16} lg={14} xl={10} */}
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
