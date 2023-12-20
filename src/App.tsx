// App.tsx
import BaseLayout from "./layout/BaseLayout";
import { ConfigProvider } from "antd";
import configProviderSettings from "./style/themeConfig.tsx";
import About from "./page/About.tsx";
import Account from "./page/Account.tsx";
import Homepage from "./page/Homepage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        index: true,
      },

      {
        path: "/About",
        element: <About />,
      },

      {
        path: "/Account",
        element: <Account />,
      },
    ],
  },
]);

const App = () => (
  <ConfigProvider theme={configProviderSettings.theme}>
    <RouterProvider router={router} />
  </ConfigProvider>
);

export default App;

// Not using return ()
// This is useful when you want to have a more complex function body or when you need to include multiple statements.
