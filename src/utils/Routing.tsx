import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <div>Welcome to the App</div>,
      },
      {
        path: "/about",
        element: <div>About the App</div>,
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      }
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
