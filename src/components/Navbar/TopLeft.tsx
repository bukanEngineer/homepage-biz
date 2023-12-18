import { Flex, Tooltip, Button, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const TopLeft = () => {
  return (
    <Flex gap="small" align="center" style={{flexGrow: 1}}>
      <div style={{fontSize: "24px", fontWeight: "bold", flexGrow: 1}}>
        Welcome back, Jennie!
      </div>

      <Tooltip title="Ask fazzbiz team">
        <Button
          shape="circle"
          icon={<QuestionCircleOutlined />}
          style={{ background: "white" }}
        />
      </Tooltip>
      <Divider type="vertical" style={{ borderInline: "1px solid #E0E0E0", marginInline: 0 }} />
    </Flex>
  );
};

export default TopLeft;
