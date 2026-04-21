import React from "react";
import { motion } from "framer-motion";

const partners = ["Amazon", "Shopify", "DHL", "Uber", "FedEx", "Walmart"];

const Growth = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-12">
          Powering Logistics for the Global Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-outfit font-black text-slate-900 tracking-tighter"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Growth;
