import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import EventDetails from "@/components/EventDetails";
import SidebarLine from "@/components/SidebarLine";
import MobileHeader from "@/components/MobileHeader";

const Event = () => {
  return (
    <div>
      <MobileHeader />
      <div className="relative scale-1">
        <Navbar />
        <NavMobile />
        <SidebarLine />
      </div>
      <EventDetails />
    </div>
  );
};

export default Event;
