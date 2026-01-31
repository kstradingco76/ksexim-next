import React from "react";

import Slider from "@/components/slider/Slider";
import Pcards from "@/components/pcards/Pcards";
import Ccards from "@/components/ccards/Ccards";

const page = () => {
  return (
    <div>
      <Slider />
      <Pcards />
      <Ccards />
    </div>
  );
};

export default page;
