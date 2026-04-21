import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Eye, Scale } from "lucide-react";

const Term = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 shadow-sm border border-primary/20">
              <Shield size={18} />
              <span className="text-sm font-black uppercase tracking-widest">Legal Framework</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 text-slate-900">
              Terms & <span className="text-slate-400">Policies</span>.
            </h1>
            <p className="text-slate-600 text-lg font-medium">
              Detailed information on our governing regulations, privacy standards, 
              and user agreements.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              { 
                icon: <Scale className="text-primary" />, 
                title: "Terms of Service", 
                content: "By accessing the Voltix platform, you agree to abide by our standard operational procedures. This includes compliance with environmental asset regulations and adherence to our decentralized venture capital governance protocols." 
              },
              { 
                icon: <Eye className="text-accent" />, 
                title: "Privacy Policy", 
                content: "Your data security is paramount. Voltix employs end-to-end encryption and decentralized storage for all telematics and financial data. We never sell your personal information to third-party advertisers." 
              },
              { 
                icon: <FileText className="text-blue-500" />, 
                title: "Operator Disclosure", 
                content: "Logistics and delivery operations carry inherent risks. Please review our full handbook before commencing shifts. All equipment must be maintained according to Voltix safety standards." 
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 md:p-12 bg-white border-slate-100 shadow-xl"
              >
                <div className="flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-inner">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-outfit font-bold mb-4 text-slate-900">{section.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium italic">
                      "{section.content}"
                    </p>
                    <button className="text-primary text-sm font-black uppercase tracking-widest mt-8 border-b-2 border-primary/20 hover:border-primary transition-all">
                      Read Full Document
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center shadow-inner"
          >
            <p className="text-slate-400 text-sm font-bold italic tracking-wide">
              Last updated: April 21, 2026. For specific legal inquiries, please contact 
              our compliance department at legal@voltix.delivery
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Term;
