import React from "react";
import { Card, List } from "antd";

const data = [
  {
    title: "Top Up Your SGD Cash Account",
    description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },

  {
    title: "Top Up Your xxx Cash Account",
    description: "Low balance may cause disruption to your payouts"
  },
];

const TaskList: React.FC = () => (
  <Card
    title="Pending Task"
    bodyStyle={{ width: "100%", paddingTop: "12px", paddingBottom: "12px" }}
  >
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">Deposit</a>]}>
          <List.Item.Meta
            title={item.title}
            description= {item.description}
          />
        </List.Item>
      )}
    />
  </Card>
);

export default TaskList;
