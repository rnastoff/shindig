"use client";

import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import SidebarCategories from "@/components/SidebarCategories";
import HeaderMobile from "@/components/HeaderMobile";
import CreateEvent from "@/components/CreateEvent";

const Create = () => {
  return (
    <div>
      <HeaderMobile />
      <div className="relative">
        <Navbar />
        <NavMobile />
        <SidebarCategories />
      </div>
      <CreateEvent />
    </div>
  );
};

export default Create;
