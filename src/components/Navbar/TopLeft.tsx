import { Flex, Tooltip, Button, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const TopLeft = () => {
  return (
    <Flex gap="small" align="center" style={{ flexGrow: 1 }}>
      <p
        style={{
          fontSize: "clamp(16px, 8vw, 24px)",
          fontWeight: "bold",
          flexGrow: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        Welcome back, Jennie!
      </p>

      <Tooltip title="Ask fazzbiz team">
        <Button
          shape="circle"
          icon={<QuestionCircleOutlined />}
          style={{ background: "white" }}
        />
      </Tooltip>
      <Divider
        type="vertical"
        style={{ borderInline: "1px solid #E0E0E0", marginInline: 0 }}
      />
    </Flex>
  );
};

export default TopLeft;
