import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import SidebarCategories from "@/components/SidebarCategories";
import HeaderMobile from "@/components/HeaderMobile";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <HeaderMobile />
      <div className="relative">
        <Navbar />
        <NavMobile />
        <SidebarCategories />
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
