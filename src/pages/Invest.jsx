import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Shield, Globe, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    title: "On-Demand Delivery",
    target: "SMEs & Local Shops",
    benefit: "Under 30m delivery",
    min: "$19/mo",
    status: "Instant Setup",
    progress: 100
  },
  {
    title: "E-Commerce Logistics",
    target: "Direct-to-Consumer Brands",
    benefit: "End-to-End Fulfillment",
    min: "Custom Quote",
    status: "Scale Ready",
    progress: 100
  },
  {
    title: "Dark Store Network",
    target: "Quick-commerce operators",
    benefit: "Urban Hub Access",
    min: "$499/mo",
    status: "Expansion Phase",
    progress: 85
  }
];

const Invest = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 text-slate-900"
              >
                Logistics that <br />
                <span className="gradient-text">Grow</span> with You.
              </motion.h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Voltix Delivery provides scalable, eco-friendly logistics solutions 
                for modern businesses. From local startups to global enterprises, 
                our green fleet is ready to deploy at a moment's notice.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <div className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-center shadow-sm">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Daily Packages</p>
                <p className="text-2xl font-outfit font-black text-primary">125k+</p>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-center shadow-sm">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">On-Time Rate</p>
                <p className="text-2xl font-outfit font-black text-accent">99.8%</p>
              </div>
            </motion.div>
          </div>

          <h2 className="text-2xl font-outfit font-bold mb-10 text-slate-900 flex items-center gap-3">
            <Truck className="text-primary" /> Logistics Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((op, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-1 pb-8 bg-white border-slate-100"
              >
                <div className="h-48 bg-slate-100 rounded-2xl mb-8 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-transparent opacity-40" />
                   <div className="absolute bottom-4 left-6">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                        {op.status}
                      </span>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 backdrop-blur-sm cursor-pointer">
                      <p className="text-slate-900 font-bold flex items-center gap-2">
                        View Solution <ArrowUpRight size={18} />
                      </p>
                   </div>
                </div>
                <div className="px-6 space-y-6 text-slate-900">
                  <div>
                    <h3 className="text-2xl font-outfit font-bold mb-2">{op.title}</h3>
                    <p className="text-slate-400 text-sm font-medium">{op.target}</p>
                  </div>
                  <div className="flex justify-between items-end border-y border-slate-100 py-4">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Key Benefit</p>
                      <p className="text-xl font-outfit font-bold">{op.benefit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 uppercase font-bold">Starting At</p>
                      <p className="text-xl font-outfit font-bold">{op.min}</p>
                    </div>
                  </div>
                  <button className="btn-primary w-full shadow-md">Request Quote</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-outfit font-bold mb-8 text-slate-900">Secure Logistics, Guaranteed.</h2>
            <div className="space-y-8">
              {[
                { icon: <Shield className="text-primary" />, title: "Full Cargo Insurance", desc: "Every shipment on the Voltix network is protected by comprehensive transit insurance." },
                { icon: <Package className="text-accent" />, title: "Smart Fulfillment", desc: "Automated warehouse management system that integrates seamlessly with your store." },
                { icon: <Globe className="text-blue-500" />, title: "City-Wide Network", desc: "Strategically located urban hubs ensure we can reach any destination within minutes." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-outfit font-bold mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-12 bg-white border-slate-200 relative shadow-2xl">
             <h3 className="text-2xl font-outfit font-bold mb-6 text-slate-900">Business Inquiry</h3>
             <form className="space-y-4">
                <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" />
                <input type="email" placeholder="Business Email" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" />
                <div className="flex items-center gap-2 py-4">
                  <input type="checkbox" className="w-5 h-5 accent-primary" />
                  <span className="text-sm text-slate-400 font-medium">I am interested in enterprise-level logistics solutions.</span>
                </div>
                <button type="button" className="btn-primary w-full py-4 uppercase tracking-widest text-sm letter-spacing">Contact Sales</button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
