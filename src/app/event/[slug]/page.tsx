import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import EventDetails from "@/components/EventDetails";
import SidebarCategories from "@/components/SidebarCategories";
import MobileHeader from "@/components/HeaderMobile";

const Event = () => {
  return (
    <div>
      <MobileHeader />
      <div className="relative scale-1">
        <Navbar />
        <NavMobile />
        <SidebarCategories />
      </div>
      <EventDetails />
    </div>
  );
};

export default Event;
