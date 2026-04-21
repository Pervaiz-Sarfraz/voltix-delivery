import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Navigation } from "lucide-react";

const features = [
  "Smart Route Optimization",
  "Zero Fuel Costs with EV Fleet",
  "Live Earning Dashboard",
  "Flexible Delivery Slots"
];

const Banner2 = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-75" />
            <img 
              src="/src/assets/rider1.jpg" 
              alt="Voltix Delivery Partner" 
              className="rounded-3xl shadow-2xl border border-slate-100 grayscale-[50%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 glass-card p-6 bg-white border-slate-200 hidden md:block shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Navigation size={24} />
                </div>
                <div>
                  <p className="font-outfit font-bold text-lg text-slate-900">Active Route</p>
                  <p className="text-sm text-slate-400 font-medium">2.4km to Destination</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 text-slate-900">
            Ride with the <br />
            <span className="text-primary">Green Delivery Fleet.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Join the Voltix community of delivery professionals. We provide 
            premium electric vehicles and advanced apps to help you maximize 
            your earnings while protecting the environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="btn-primary">Become a Partner</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner2;
