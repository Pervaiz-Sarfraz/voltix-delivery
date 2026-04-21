import React from "react";
import { motion } from "framer-motion";
import Banner1 from "../Components/Banner1";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import QuikServices from "../Components/QuikServices";
import Testimonial from "../Components/Testimonial";

const Service = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      {/* Header Section */}
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 uppercase tracking-[0.2em]">
              Our Core Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 text-slate-900 leading-tight">
              Enterprise-Grade <br />
              <span className="gradient-text">Logistics Services.</span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
              From last-mile courier services to full-scale e-commerce fulfillment, 
              Voltix Delivery provides the infrastructure your business needs 
              to scale at speed.
            </p>
          </motion.div>
        </div>
      </section>

      <QuikServices />
      
      <div className="space-y-12 mb-24">
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Testimonial />
      </div>
    </div>
  );
};

export default Service;
