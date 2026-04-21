import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Voltix" className="h-10 w-auto" />
            <span className="text-2xl font-outfit font-extrabold tracking-tighter text-slate-900">
              VOLTIX <span className="text-primary">DELIVERY</span>
            </span>
          </NavLink>
          <p className="text-slate-600 leading-relaxed max-w-xs">
            Sustainable last-mile logistics powered by electricity.
            Voltix Delivery is reimagining how the world moves goods—fast,
            green, and reliable.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, color: "#10b981" }}
                className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-outfit font-bold mb-8 text-slate-900">Platform</h4>
          <ul className="flex flex-col gap-4">
            {[
              { name: "About Us", path: "/about" },
              { name: "How it Works", path: "/Service" },
              { name: "Fleet Solutions", path: "/Rider" },
              { name: "Impact Report", path: "/impact" },
              { name: "Business Solutions", path: "/invest" }
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all font-bold" />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-outfit font-bold mb-8 text-slate-900">Support</h4>
          <ul className="flex flex-col gap-4">
            {[
              { name: "Contact Support", path: "/contact" },
              { name: "Terms & Conditions", path: "/term" },
              { name: "Privacy Policy", path: "/term" },
              { name: "Operator FAQ", path: "/Rider" }
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-outfit font-bold mb-8 text-slate-900">Contact Us</h4>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 text-slate-600">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <p>123 Innovation Drive, Silicon Valley, CA 94025, USA</p>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <Phone className="text-primary shrink-0" size={20} />
              <p>+1 (800) VOLTIX-DLV</p>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <Mail className="text-primary shrink-0" size={20} />
              <p>hello@voltix.delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} Voltix Delivery Technologies. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Privacy</a>
          <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Terms</a>
          <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
