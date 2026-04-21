import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

const Banner1 = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 bg-white border-slate-200 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 opacity-50" />
          
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-8 leading-tight text-slate-900">
            Ready to Experience <br />
            <span className="gradient-text">Frictionless Logistics?</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of businesses that trust Voltix Delivery for their daily 
            shipping needs. Fast, sustainable, and fully transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              Book First Shipment <ArrowRight size={18} />
            </button>
            <button className="btn-outline flex items-center justify-center gap-2">
              <Package size={18} /> Business Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner1;
