import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error404 from "../Pages/Error404/Error404";
import tutiors from "../Pages/Tutors/tutiors";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:
    [
     {
        index:true,
       Component: Home,
    },
    {
        path: '/about',
        Component: AboutUs
    },
    {
      path: '/tutiors',
      Component: tutiors
    },
    {
      path: '/'
    }
    ]
  },
{
    path: '/login',
    Component: Login
},
{
    path: '/register',
    Component: Register
},
{
    path: '/*',
    Component: Error404
}
]);