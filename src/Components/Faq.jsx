import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How do I book a Voltix Delivery?",
    answer: "You can book an instant delivery via our web platform or mobile app. Simply enter your pickup and drop-off locations, select your vehicle type, and a courier will be assigned immediately.",
  },
  {
    question: "Do you offer enterprise shipping rates?",
    answer: "Yes, we provide tiered pricing for high-volume business partners. Contact our solutions team to receive a custom quote based on your monthly delivery volume.",
  },
  {
    question: "What vehicle types are available in your fleet?",
    answer: "Our 100% electric fleet includes E-Cargo scooters for small to medium packages and larger EV vans for bulk logistics and fulfillment operations.",
  },
  {
    question: "How is my package insured during transit?",
    answer: "Every shipment on the Voltix network is protected by our standard transit insurance, covering up to $500 per package. Additional coverage is available for high-value items.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-slate-50 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <HelpCircle size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Logistics FAQ</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-slate-900">
            Everything You Need <br />
            <span className="text-slate-400">to Know.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card border-slate-200 transition-all duration-300 ${
                activeIndex === i ? "bg-white ring-1 ring-primary/20 shadow-xl shadow-slate-900/5" : "hover:bg-white/60 bg-white/40"
              }`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
              >
                <span className="text-xl font-outfit font-bold pr-8 text-slate-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  className={`p-2 rounded-full transition-colors ${
                    activeIndex === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg border-t border-slate-100 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
