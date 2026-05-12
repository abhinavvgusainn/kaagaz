import { TimelineDemo } from "@/components/demos/timeline-demo";
import Navbar from "@/components/navbar";
import { div } from "motion/react-client";

const Story = () => {
  return (
    <div
      className="
        inset-0 
        overflow-clip 
        -z-10 h-full w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]"
    >
      <Navbar />

      <TimelineDemo />
    </div>
  );
};

export default Story;
