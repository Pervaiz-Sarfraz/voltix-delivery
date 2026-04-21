import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero3.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Eco-Friendly Logistics Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-outfit font-extrabold leading-[1.1] tracking-tight text-slate-900"
          >
            Delivery Reimagined. <br />
            <span className="gradient-text">Fast & Green.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
          >
            Voltix Delivery is the smart choice for modern urban logistics. 
            We provide seamless last-mile solutions for businesses while 
            empowering delivery partners with zero-emission fleets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary">
              Book a Delivery
            </button>
            <button className="btn-outline">
              Become a Partner
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-4 pt-12 border-t border-slate-200"
          >
            <div>
              <p className="text-3xl font-outfit font-bold text-slate-900">15m</p>
              <p className="text-sm text-slate-400 font-medium">Avg. Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-outfit font-bold text-slate-900">50k+</p>
              <p className="text-sm text-slate-400 font-medium">Active Shipments</p>
            </div>
            <div>
              <p className="text-3xl font-outfit font-bold text-slate-900">0%</p>
              <p className="text-sm text-slate-400 font-medium">Carbon Emission</p>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full -z-10 scale-75 animate-pulse" />
          <img
            src={heroImage}
            alt="Voltix Delivery Service"
            className="w-full h-auto drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
