import React from 'react';
import CustomersFeedback from '@/components/customersFeedback';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import OurServices from '@/components/ourservices';
import CookiePolicy from '@/components/cookies';

const HomeContainer = () => {
  return (
    <>
      <CookiePolicy />
      <Header />
      <Hero />
      <OurServices />
      <CustomersFeedback />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeContainer;
