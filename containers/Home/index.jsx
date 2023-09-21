import React from "react";
import CustomersFeedback from "@/components/customersFeedback";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurServices from "@/components/ourservices";
import CookiePolicy from "@/components/cookies";
import Team from "@/components/team";
import MidSection from "@/components/midSection";

// NOTES: Form döndüsü eklenecek
// Mobil uyumlu olacak
// Key problemleri çözülecek

const HomeContainer = () => {
  return (
    <div className="overflow-hidden">
      <CookiePolicy />
      <Header />
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
