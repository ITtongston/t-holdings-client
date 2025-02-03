import CollCon from "@/components/Business/containers/collcon";
import HoldCon from "@/components/Business/containers/holdcon";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      {/* render container with atoms  */}
      <CollCon />
    </div>
  );
};

export default index;
