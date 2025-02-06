import CollCon from "@/components/Business/containers/collcon";
import HoldCon from "@/components/Business/containers/holdcon";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      {/* render container with atoms  */}
      <Navbar />
      <CollCon />
      <Footer />
    </div>
  );
};

export default index;
