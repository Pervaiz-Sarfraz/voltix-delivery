import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, desc, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-8 group relative overflow-hidden bg-white hover:bg-slate-50 transition-colors"
    >
      {/* Decorative gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-outfit font-bold mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
