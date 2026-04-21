import React from "react";
import { motion } from "framer-motion";
import { Globe, Leaf, Zap } from "lucide-react";

const stats = [
  { icon: <Globe size={24} />, label: "Service Areas", value: "24 Cities" },
  { icon: <Leaf size={24} />, label: "CO2 Offset", value: "1.2k Tons" },
  { icon: <Zap size={24} />, label: "Avg. Delivery", value: "18 Min" }
];

const Banner3 = () => {
  return (
    <section className="section-padding bg-slate-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-extrabold mb-8 text-slate-900">
            Measured <span className="gradient-text">Impact</span>. <br />
            Seamless Deliveries.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We believe that logistics shouldn't cost the Earth. 
            Voltix Delivery provides a data-driven approach to urban shipping, 
            ensuring your packages arrive on time while our planet breathes easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col items-center bg-white shadow-md border-slate-100"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-outfit font-bold mb-2 text-slate-900">{stat.value}</h4>
              <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner3;
