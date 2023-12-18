// App.tsx
import BaseLayout from "./layout/BaseLayout";
import { ConfigProvider } from "antd";
import configProviderSettings from "./themeConfig.tsx";



const App = () => (
  <ConfigProvider theme={configProviderSettings.theme}>
      <BaseLayout />
  </ConfigProvider>
);

export default App;

// Not using return ()
// This is useful when you want to have a more complex function body or when you need to include multiple statements.