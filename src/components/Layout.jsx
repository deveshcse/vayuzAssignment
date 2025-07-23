import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Layout = () => {
  return (
    <div className="bg-[#131313] flex  min-h-screen w-screen ">
      <Sidebar />
      <div className="w-full">
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
