import React from "react";
import { motion } from "framer-motion";
import { Bike, Shield, Battery, Gauge, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  { icon: <Shield size={24} />, title: "Full Insurance", desc: "Every Voltix delivery lease includes comprehensive insurance for rider and asset." },
  { icon: <Battery size={24} />, title: "Swap Network", desc: "Access our vast network of battery swap stations for zero charging downtime." },
  { icon: <Gauge size={24} />, title: "Partner App", desc: "Optimize your earnings with our real-time route and demand telematics." },
];

const Rider = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              WORK WITH VOLTIX
            </div>
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900">
              Fuel Free. <br />
              <span className="text-primary">Stress Free.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Join the future of urban delivery. Voltix Delivery provides the 
              ultimate electric vehicle fleet for delivery pros. 
              Maximize your take-home pay and help clean up our cities.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Apply to Partner</button>
              <button className="btn-outline flex items-center gap-2">
                View EV Fleet <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" />
             <img 
               src="https://images.unsplash.com/photo-1558981403-c5f91ed9c251?auto=format&fit=crop&q=80&w=1000" 
               className="rounded-[40px] shadow-2xl border-4 border-slate-50" 
               alt="Voltix Delivery Partner" 
             />
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 group bg-white border-slate-100 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform border border-slate-100">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-outfit font-bold mb-4 text-slate-900">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing/Access Section */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-16 italic text-slate-900">Simple Weekly Leasing.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Courier Duo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 border-primary/20 bg-primary/5 shadow-xl"
            >
              <p className="text-primary font-black uppercase tracking-widest text-sm mb-4">Courier Duo</p>
              <h4 className="text-5xl font-outfit font-black mb-8 text-slate-900">$39<span className="text-xl text-slate-400">/wk</span></h4>
              <ul className="text-left space-y-4 mb-12">
                {["Compact EV Scooter", "Free Routine Service", "1 Battery Swap/Day", "App Access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-primary" size={18} /> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full py-4 text-sm font-bold tracking-widest shadow-lg">I'M INTERESTED</button>
            </motion.div>

            {/* Logistics Pro */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 bg-white border-slate-100 shadow-lg"
            >
              <p className="text-slate-400 font-black uppercase tracking-widest text-sm mb-4">Logistics Pro</p>
              <h4 className="text-5xl font-outfit font-black mb-8 text-slate-900">$65<span className="text-xl text-slate-400">/wk</span></h4>
              <ul className="text-left space-y-4 mb-12">
                {["Cargo EV Scooter", "Heavy Duty Tyres", "Unlimited Swaps", "Priority Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                    <CheckCircle className="text-slate-300" size={18} /> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-outline w-full py-4 text-sm font-bold tracking-widest border-2">I'M INTERESTED</button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rider;
