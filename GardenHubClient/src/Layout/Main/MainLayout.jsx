import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Components/Loader/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  const isOutletLoading = navigation.state === "loading"; // only detects when Outlet is loading

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="min-h-[70vh]">
        {isOutletLoading ? <Loader /> : <Outlet />}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
