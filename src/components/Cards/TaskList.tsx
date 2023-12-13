import React from 'react';
import { Card, List } from 'antd';

const data = [
  {
    title: 'Top Up Your SGD Cash Account',
  },
  {
    title: 'Top Up Your xxx Cash Account',
  },
];

const TaskList: React.FC = () => (
  <Card title="Pending Task" bodyStyle={{ width: "100%", paddingTop: '12px', paddingBottom: '12px'}}>
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item
      actions={[<a key="list-loadmore-edit">Deposit</a>]}>
        <List.Item.Meta
          title= {item.title}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"

        />
      </List.Item>
    )}
  />
  </Card>
);

export default TaskList;