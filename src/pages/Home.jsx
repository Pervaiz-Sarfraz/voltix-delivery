import React from "react";
import Banner1 from "../Components/Banner1";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import ContactSection from "../Components/ContactSection";
import Growth from "../Components/Growth";
import Hero from "../Components/Hero";
import ServiceSection from "../Components/ServiceSection";
import Testimonial from "../Components/Testimonial";
import Faq from "../Components/Faq";

function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Faq />
      <Growth />
      <Testimonial />
      <ContactSection />
    </>
  );
}

export default Home;
