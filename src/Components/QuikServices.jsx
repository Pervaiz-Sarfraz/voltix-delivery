import React from "react";
import { motion } from "framer-motion";
import { Zap, Package, MapPin, Shield, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Zap className="text-primary" />,
    title: "Hyper-Speed Routing",
    desc: "AI-driven algorithms that find the fastest path through urban congestion.",
  },
  {
    icon: <Package className="text-accent" />,
    title: "Smart Fulfillment",
    desc: "Seamless integration with your e-commerce platform for instant shipping.",
  },
  {
    icon: <MapPin className="text-blue-500" />,
    title: "Live GPS Tracking",
    desc: "End-to-end visibility for both senders and receivers with precise ETAs.",
  },
  {
    icon: <Shield className="text-yellow-500" />,
    title: "Insured Transit",
    desc: "Rest easy knowing every package is covered by our comprehensive insurance.",
  },
  {
    icon: <Clock className="text-purple-500" />,
    title: "24/7 Availability",
    desc: "Round-the-clock logistics operations to keep your business moving.",
  },
  {
    icon: <TrendingUp className="text-green-500" />,
    title: "Scalable Growth",
    desc: "Add new urban hubs and delivery zones at the push of a button.",
  },
];

const QuikServices = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-outfit font-extrabold mb-6 text-slate-900"
          >
            Logistics Features <br />
            <span className="text-primary font-medium">Built for Speed.</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 bg-white border-slate-100 shadow-lg shadow-slate-200/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 shadow-inner">
                {React.cloneElement(feature.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-outfit font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuikServices;
