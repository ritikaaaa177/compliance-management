import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/RootPage";
import Dashboard from "../Pages/Dashboard";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  //
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  //
  // },
]);

export { router };
