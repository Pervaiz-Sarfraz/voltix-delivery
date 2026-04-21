import React from "react";
import { motion } from "framer-motion";
import { Leaf, Package, Wind, Zap } from "lucide-react";

const impactStats = [
  { label: "Carbon Saved", value: "12,500+", unit: "Metric Tons", icon: <Leaf className="text-primary" /> },
  { label: "Green Deliveries", value: "2.4M", unit: "Completed", icon: <Package className="text-primary" /> },
  { label: "Urban Space", value: "15,000", unit: "Sq meters reclaimed", icon: <Wind className="text-blue-500" /> },
  { label: "Energy Used", value: "100%", unit: "Renewable Source", icon: <Zap className="text-yellow-500" /> },
];

const Impact = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 text-slate-900">
              Purity in <br />
              <span className="gradient-text">Logistics.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every package delivered by Voltix represents a step towards 
              cleaner air and quieter streets. We're on a mission to completely 
              eliminate tailpipe emissions from the urban last-mile delivery loop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 flex flex-col items-center bg-white border-slate-100"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                  {stat.icon}
                </div>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                <h2 className="text-4xl md:text-5xl font-outfit font-black mb-1 text-slate-900">{stat.value}</h2>
                <p className="text-primary font-bold">{stat.unit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-100 sm:my-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-outfit font-bold mb-8 italic text-slate-900">Better Cities, Smarter Deliveries.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Urban logistics is responsible for a massive share of city traffic and air pollution. 
                Voltix Delivery uses electric micro-mobility vehicles that are not only 
                emission-free but also significantly smaller and quieter than traditional delivery vans.
              </p>
              <p>
                Our real-time impact dashboard allows business partners to see the 
                exact amount of CO2 their specific deliveries have saved, making 
                sustainability a verifiable part of their supply chain.
              </p>
            </div>
            <button className="btn-primary mt-12">View Impact Ledger</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 3 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 bg-white border-slate-100 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-xl shadow-inner" 
              alt="Nature Impact" 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
