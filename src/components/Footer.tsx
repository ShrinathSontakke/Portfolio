import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative z-10 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white mb-4 md:mb-0"
          >
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {[
              { icon: <Github />, href: "#" },
              { icon: <Linkedin />, href: "#" },
              { icon: <Twitter />, href: "#" },
              { icon: <Mail />, href: "mailto:your.email@example.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}