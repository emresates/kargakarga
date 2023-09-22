import React from "react";
import CustomersFeedback from "@/components/landingpagecomponents/customersFeedback";
import Faq from "@/components/landingpagecomponents/faq";
import Footer from "@/components/landingpagecomponents/footer";
import Hero from "@/components/landingpagecomponents/hero";
import OurServices from "@/components/landingpagecomponents/ourservices";
import CookiePolicy from "@/components/landingpagecomponents/cookies";
import Team from "@/components/landingpagecomponents/team";
import MidSection from "@/components/landingpagecomponents/midSection";

// NOTES: Form döndüsü eklenecek

const HomeContainer = () => {
  return (
    <div className="overflow-hidden">
      <CookiePolicy />
      <Hero />
      <OurServices />
      <Team />
      <CustomersFeedback />
      <MidSection />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomeContainer;
