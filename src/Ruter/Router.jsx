import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error404 from "../Components/Error404/Error404";
import tutiors from "../Pages/Tutors/tutiors";
import tuitions from "../Pages/Tuitions/tuitions";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "./AdminRoute";
import TutorRequest from "../Dashboard/UserPage/TutorRequest";
import PostedRequest from "../Dashboard/UserPage/PostedRequest";
import UpdateProfile from "../Dashboard/UserPage/UpdateProfile";
import PandingJobRequest from "../Dashboard/AdminPage/PandingJobRequest";
import PandingUserRequest from "../Dashboard/AdminPage/PandingUserRequest";
import UserManagement from "../Dashboard/AdminPage/UserManagement";
import JobRequest from "../Dashboard/TutorPage/JobRequest";
import JobPosted from "../Dashboard/TutorPage/JobPosted";
import TutorProfile from "../Dashboard/TutorPage/TutorProfile";


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
      path: '/tuitions',
      Component: tuitions
    }
    ]
  },
  {
    path: '/dashboard',
    // Component: DashboardLayout,
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
    children:[
      {
        index:true,
        Component: DashboardHome,
      },
      {
        path: '/dashboard/tutorrequest',
        Component: TutorRequest,
      },
      {
        path: '/dashboard/sPosted',
        Component: PostedRequest
      },
      {
        path: '/dashboard/userprofile',
        Component:UpdateProfile
      },
      {
        path: '/dashboard/pjrequest',
        element:<AdminRoute><PandingJobRequest /></AdminRoute>
      },
      {
        path: '/dashboard/purequest',
        element: <AdminRoute><PandingUserRequest /></AdminRoute>
      },
      {
        path: '/dashboard/users-management',
        element:<AdminRoute><UserManagement /></AdminRoute> 
      },
      {
        path: '/dashboard/jobrequest',
        element: <JobRequest />
      },
      {
        path: '/dashboard/postedrequesr',
        element: <JobPosted />
      },
      {
        path: '/dashboard/tutorprofile',
        element: <TutorProfile />
      },
      {
        path: '/dashboard/*',
        Component: Error404
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