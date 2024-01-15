import ButtonFazz from "../components/ButtonFazz";
import { ChromeOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p style={{ paddingBottom: 16 }}>This is the about page.</p>
      <ButtonFazz buttonType="primary" leftIcon={<ChromeOutlined />}>
        Click Me
      </ButtonFazz>
    </div>
  );
};

export default About;
