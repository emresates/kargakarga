import Header from "@/components/mobilecombcomponents/header";
import Inputs from "@/components/mobilecombcomponents/inputs";
import Navbar from "@/components/mobilecombcomponents/navbar";
import React from "react";

const MobileCombustionContainer = () => {
  return (
    <div
      className="flex h-auto w-screen"
      style={{ backgroundColor: "#ECECEC" }}
    >
      <Navbar />
      <div className="w-full overflow-hidden">
        <Header />
        <Inputs />
      </div>
    </div>
  );
};

export default MobileCombustionContainer;
