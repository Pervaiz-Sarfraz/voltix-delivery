import { motion } from "framer-motion";
import { Zap, Package, MapPin, Truck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "On-Demand Courier",
    desc: "Instant pickup and delivery for your urgent documents and small packages across the city.",
    color: "from-primary/10",
  },
  {
    icon: <Package className="text-accent" size={32} />,
    title: "E-Commerce Fulfillment",
    desc: "Scale your online business with our smart warehousing and automated delivery solutions.",
    color: "from-accent/10",
  },
  {
    icon: <MapPin className="text-blue-500" size={32} />,
    title: "Last-Mile Expert",
    desc: "Optimized urban distribution networks that guarantee delivery in record-breaking time.",
    color: "from-blue-500/10",
  },
  {
    icon: <Truck className="text-purple-500" size={32} />,
    title: "Voltix Fleet",
    desc: "Enterprise-grade EV logistics fleet leasing designed for high-volume urban commerce.",
    color: "from-purple-500/10",
  },
];

const ServiceSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-slate-900"
            >
              Logistics for a{" "}
              <span className="text-primary">Sustainable Future.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              Voltix Delivery combines advanced routing AI with 100% electric
              transport to provide the fastest and cleanest shipping experience
              available.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="btn-outline">Browse Solutions</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
