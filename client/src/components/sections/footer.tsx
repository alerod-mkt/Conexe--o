import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Shield } from "lucide-react";

export default function FooterSection() {
  const quickLinks = [
    { name: "Sobre Patrícia", href: "#" },
    { name: "Depoimentos", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contato", href: "#" }
  ];

  const legalLinks = [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Política de Reembolso", href: "#" },
    { name: "Suporte Técnico", href: "#" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:bg-blue-700" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:bg-pink-600" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", color: "hover:bg-red-600" }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">Truque da Briga Zero</h3>
              <p className="text-neutral-300 mb-6">
                Transformando casamentos através de princípios bíblicos e métodos comprovados. 
                Mais de 2.500 mulheres já conquistaram a admiração e o respeito de seus maridos.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`bg-primary ${social.color} text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Links Úteis</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-secondary">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-neutral-700 pt-8 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 mb-4 md:mb-0">
                © 2024 Truque da Briga Zero. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4 text-neutral-400">
                <Shield className="w-5 h-5" />
                <span>Site 100% Seguro | Pagamento Protegido</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
