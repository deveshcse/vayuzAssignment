import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import ServiceSection from "./ServiceSection";
import ContactSection from "./ContactSection";

const Layout = () => {
  return (
    <div className="flex  h-full w-full ">
      <Sidebar />
      <div className="w-full">
        <Header />
        <HeroSection />
        <HistorySection />
        < ServiceSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;


//bg-[#131313]