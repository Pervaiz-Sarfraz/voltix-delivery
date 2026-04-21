import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 uppercase tracking-wider">
              Service & Support
            </div>
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 text-slate-900">
              Connect with <br />
              <span className="gradient-text">Voltix</span>.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-lg">
              Have a question about a shipment, interested in partnering, or 
              need business logistics advice? Our team is always on standby.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Mail className="text-primary" />, title: "Support Email", details: "help@voltix.delivery", label: "24/7 Operations" },
                { icon: <Phone className="text-accent" />, title: "Customer Hotline", details: "+1 (800) VOLTIX-DLV", label: "Instant Support" },
                { icon: <MapPin className="text-blue-500" />, title: "Operations Hub", details: "Level 14, Logistics Plaza, Silicon Valley, CA", label: "HQ & Distribution" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-outfit font-bold mb-1 text-slate-900">{item.title}</h4>
                    <p className="text-slate-700 text-lg mb-1 font-semibold">{item.details}</p>
                    <p className="text-sm text-slate-400 uppercase font-black tracking-widest">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 md:p-16 bg-white border-slate-200 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
            <h3 className="text-3xl font-outfit font-bold mb-8 flex items-center gap-3 text-slate-900">
              <MessageSquare className="text-primary" /> Send an Inquiry
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" placeholder="Alex Rivera" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Phone</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors text-slate-900 font-medium" placeholder="+1..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors appearance-none text-slate-900 font-medium">
                  <option>Delivery Support</option>
                  <option>Business Partnership</option>
                  <option>Become a Rider</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Your Message</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary/50 transition-colors resize-none text-slate-900 font-medium" placeholder="How can we assist with your delivery needs?"></textarea>
              </div>
              <button type="button" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg shadow-xl tracking-widest font-black uppercase">
                Send Request <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
