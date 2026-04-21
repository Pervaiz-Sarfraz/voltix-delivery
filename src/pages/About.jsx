import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 text-slate-900">
              The Engine of <br />
              <span className="gradient-text">Clean Commerce</span>.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
              Voltix Delivery was born from a simple realization: urban delivery 
              is broken. It's noisy, polluting, and inefficient. We're rebuilding 
              it from the ground up using 100% electric energy and AI-driven logic.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-outfit font-bold text-slate-900">4.5M+</p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Packages Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-outfit font-bold text-slate-900">2.5k+</p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Active EV Fleets</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl border border-slate-100" 
              alt="About Voltix Delivery" 
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-outfit font-bold mb-4 text-slate-900">Our Logistics Pillars</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We operate at the intersection of technology and sustainability to 
            provide a service that's as fast as it is clean.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="text-primary" />, title: "Hyper-Speed", desc: "Optimizing the 'final mile' to ensure zero delays in urban delivery cycles." },
            { icon: <Shield className="text-yellow-500" />, title: "Safety First", desc: "Advanced protection for our riders and full insurance for your cargo." },
            { icon: <Globe className="text-blue-500" />, title: "Zero Emission", desc: "A 100% electric fleet means your shipping is net-zero by default." },
            { icon: <Target className="text-purple-500" />, title: "Precision", desc: "AI-driven demand forecasting and real-time package telematics." },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center bg-white border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {value.icon}
              </div>
              <h3 className="text-xl font-outfit font-bold mb-4 text-slate-900">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
