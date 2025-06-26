import { createBrowserRouter } from "react-router"; 
import MainLayout from "../Layout/Main/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import NotFound from "../Pages/NotFound/NotFound";
import Explore from "../Pages/Explore/Explore";
import ShareTipForm from "../Pages/ShareTip/ShareTipForm";
import TrendingDetails from "../Components/TrendingTips/TrendingDetails";
import MyTip from "../Pages/MyTip/MyTip";
import Update from "../Pages/Update/Update";
import Faq from "../Pages/Faq/Faq";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      {
        path: "browsetips",
        element: <BrowseTips />,
        loader: () =>
          fetch("https://garden-hub-server-six.vercel.app/shareTips"),
      },
      { path: "explore", element: <Explore /> },
      {
        path: "shareTips/:id",
        element: <TrendingDetails />,
        loader: () =>
          fetch("https://garden-hub-server-six.vercel.app/shareTips"),
      },
      {
        path: "updated/:id",
        element: <Update />,
        loader: () =>
          fetch("https://garden-hub-server-six.vercel.app/shareTips"),
      },
      { path: "faq", element: <Faq /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <MyTip />,
        loader: () =>
          fetch("https://garden-hub-server-six.vercel.app/shareTips"),
      },
      { path: "sharetip", element: <ShareTipForm /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
