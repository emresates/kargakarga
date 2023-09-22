import Header from "@/components/mobilecombcomponents/header";
import Inputs from "@/components/mobilecombcomponents/inputs";
import Navbar from "@/components/mobilecombcomponents/navbar";
import React from "react";

const MobileCombustionContainer = () => {
  return (
    <div className="flex h-screen w-screen" style={{backgroundColor: "#ECECEC"}}>
      <Navbar />
      <div className="w-[87%]">
        <Header />
        <Inputs />
      </div>
    </div>
  );
};

export default MobileCombustionContainer;
