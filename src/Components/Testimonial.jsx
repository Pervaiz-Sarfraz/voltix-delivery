import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Reed",
    role: "Logistics Manager, UrbanFlow",
    text: "Voltix Delivery has completely transformed our last-mile efficiency. The speed of integration and the reliability of their electric fleet is unmatched.",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Founder, GreenRetail",
    text: "As a sustainable brand, we needed a delivery partner that shared our values. Voltix provides 100% emission-free shipping with incredible real-time tracking.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "E-commerce Director, SwiftShip",
    text: "The scalability of the Voltix platform allowed us to expand into three new cities in just one month. Their tech-first approach to logistics is the future.",
    image: "https://i.pravatar.cc/150?u=marcus"
  }
];

const Testimonial = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6"
          >
            <Quote size={24} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 italic text-slate-900">
            Trusted by Leaders <br />
            <span className="gradient-text">Across the Globe.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center relative bg-white border-slate-100 shadow-lg shadow-slate-200/50"
            >
              <div className="absolute top-6 right-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <img 
                src={item.image} 
                className="w-20 h-20 rounded-full border-2 border-primary/20 mb-6 object-cover" 
                alt={item.name} 
              />
              <p className="text-slate-600 italic leading-relaxed mb-8">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-outfit font-bold text-lg text-slate-900">{item.name}</h4>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
