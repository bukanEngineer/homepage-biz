import { Flex, Tooltip, Button, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const TopLeft = () => {
  return (
    <Flex
      gap="small"
      align="center"
      justify="space-between"
      style={{ flexGrow: 1 }}
    >
      <p
        style={{
          fontSize: "clamp(1rem, 0.8548rem + 0.6452vw, 1.5rem)",
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        Welcome back, Jennie!
      </p>
      <Flex align="center" gap={8}>
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
    </Flex>
  );
};

export default TopLeft;

// // white-space to nowrap to prevent line breaks,
// overflow to hidden to hide any overflow,
// text-overflow to ellipsis to add the ellipsis at the end of the visible content.
