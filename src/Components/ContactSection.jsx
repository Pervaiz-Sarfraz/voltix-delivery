import React from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              <MessageSquare size={18} />
              <span className="text-sm font-black uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-outfit font-extrabold mb-8 text-slate-900 leading-tight">
              Scale Your Logistics <br />
              <span className="gradient-text">with Voltix.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              Ready to move to 100% electric deliveries? Our team is standing by 
              to help you integrate our smart logistics layer into your supply chain. 
              Let's build a cleaner future together.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-200">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Call us anytime</p>
                  <p className="text-lg font-outfit font-bold text-slate-900">+1 (800) VOLTIX-DLV</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-200">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email Support</p>
                  <p className="text-lg font-outfit font-bold text-slate-900">hello@voltix.delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 bg-white border-slate-200 relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">First Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" placeholder="Alex" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Phone Number</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" placeholder="+1..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" placeholder="alex@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Your Message</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors resize-none text-slate-900 font-medium" placeholder="How can we help your business?"></textarea>
              </div>
              <button type="button" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg shadow-xl tracking-widest font-black uppercase">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
