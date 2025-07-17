import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const stats = [
    { number: "2.547", label: "mulheres já conseguiram eliminar brigas" },
    { number: "89%", label: "viram mudanças nos primeiros 7 dias" },
    { number: "94%", label: "relatos de melhora na intimidade em 15 dias" }
  ];

  const testimonials = [
    {
      name: "Mariana",
      age: "34 anos, casada há 10 anos",
      initial: "M",
      color: "blue",
      testimony: "Em 7 dias as brigas simplesmente sumiram. Meu marido voltou a me procurar para conversar e hoje ele me trata como rainha.",
      result: "Zero brigas há 6 meses",
      avatar: (
        <svg width="64" height="64" viewBox="0 0 64 64" className="w-16 h-16 rounded-full shadow-lg">
          <defs>
            <linearGradient id="skin1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdbcb4" />
              <stop offset="100%" stopColor="#f4a3a8" />
            </linearGradient>
            <linearGradient id="hair1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b4513" />
              <stop offset="100%" stopColor="#a0522d" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="32" fill="#e3f2fd" />
          <ellipse cx="32" cy="48" rx="24" ry="18" fill="url(#skin1)" />
          <circle cx="32" cy="28" r="16" fill="url(#skin1)" />
          <ellipse cx="32" cy="18" rx="20" ry="14" fill="url(#hair1)" />
          <ellipse cx="28" cy="26" rx="1.5" ry="2" fill="#2d3748" />
          <ellipse cx="36" cy="26" rx="1.5" ry="2" fill="#2d3748" />
          <path d="M30 32 Q32 34 34 32" stroke="#d45087" strokeWidth="2" fill="none" />
          <ellipse cx="32" cy="36" rx="1" ry="0.5" fill="#2d3748" />
          <path d="M26 24 Q28 22 30 24" stroke="#2d3748" strokeWidth="1" fill="none" />
          <path d="M34 24 Q36 22 38 24" stroke="#2d3748" strokeWidth="1" fill="none" />
        </svg>
      )
    },
    {
      name: "Cristina",
      age: "41 anos, casada há 15 anos",
      initial: "C",
      color: "green",
      testimony: "Eu chorava todo dia achando que meu casamento tinha acabado. Hoje meu marido me manda mensagens românticas no meio do trabalho.",
      result: "Intimidade restaurada em 2 semanas",
      avatar: (
        <svg width="64" height="64" viewBox="0 0 64 64" className="w-16 h-16 rounded-full shadow-lg">
          <defs>
            <linearGradient id="skin2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7b2b2" />
              <stop offset="100%" stopColor="#e8a5a5" />
            </linearGradient>
            <linearGradient id="hair2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a5568" />
              <stop offset="100%" stopColor="#2d3748" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="32" fill="#f0fdf4" />
          <ellipse cx="32" cy="48" rx="24" ry="18" fill="url(#skin2)" />
          <circle cx="32" cy="28" r="16" fill="url(#skin2)" />
          <ellipse cx="32" cy="16" rx="22" ry="16" fill="url(#hair2)" />
          <ellipse cx="28" cy="26" rx="1.5" ry="2" fill="#2d3748" />
          <ellipse cx="36" cy="26" rx="1.5" ry="2" fill="#2d3748" />
          <path d="M30 32 Q32 34 34 32" stroke="#d45087" strokeWidth="2" fill="none" />
          <ellipse cx="32" cy="36" rx="1" ry="0.5" fill="#2d3748" />
          <path d="M26 24 Q28 22 30 24" stroke="#2d3748" strokeWidth="1" fill="none" />
          <path d="M34 24 Q36 22 38 24" stroke="#2d3748" strokeWidth="1" fill="none" />
          <circle cx="25" cy="30" r="2" fill="#fca5a5" opacity="0.6" />
          <circle cx="39" cy="30" r="2" fill="#fca5a5" opacity="0.6" />
        </svg>
      )
    },
    {
      name: "Fernanda",
      age: "36 anos, casada há 8 anos",
      initial: "F",
      color: "purple",
      testimony: "Parei de implorar e comecei a ser admirada. Meu marido agora me surpreende com jantares românticos sem eu pedir.",
      result: "Paixão renovada em 1 mês",
      avatar: (
        <svg width="64" height="64" viewBox="0 0 64 64" className="w-16 h-16 rounded-full shadow-lg">
          <defs>
            <linearGradient id="skin3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbb6ce" />
              <stop offset="100%" stopColor="#f687b3" />
            </linearGradient>
            <linearGradient id="hair3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="32" fill="#fef3ff" />
          <ellipse cx="32" cy="48" rx="24" ry="18" fill="url(#skin3)" />
          <circle cx="32" cy="28" r="16" fill="url(#skin3)" />
          <ellipse cx="32" cy="17" rx="20" ry="15" fill="url(#hair3)" />
          <ellipse cx="28" cy="26" rx="1.5" ry="2" fill="#2d3748" />
          <ellipse cx="36" cy="26" rx="1.5" ry="2" fill="#2d3748" />
          <path d="M30 32 Q32 34 34 32" stroke="#d45087" strokeWidth="2" fill="none" />
          <ellipse cx="32" cy="36" rx="1" ry="0.5" fill="#2d3748" />
          <path d="M26 24 Q28 22 30 24" stroke="#2d3748" strokeWidth="1" fill="none" />
          <path d="M34 24 Q36 22 38 24" stroke="#2d3748" strokeWidth="1" fill="none" />
          <circle cx="25" cy="30" r="2" fill="#fca5a5" opacity="0.6" />
          <circle cx="39" cy="30" r="2" fill="#fca5a5" opacity="0.6" />
          <path d="M28 20 Q32 18 36 20" stroke="#b45309" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
              As Provas Que Este Método <span className="text-accent">Realmente Funciona</span>
            </h2>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold stats-number mb-2">{stat.number}</div>
                  <p className="text-neutral-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`card-hover bg-gradient-to-br from-${testimonial.color}-50 to-${testimonial.color}-100 border-${testimonial.color}-200 p-6 h-full`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-600">{testimonial.age}</p>
                      </div>
                    </div>
                    <div className="text-yellow-500 mb-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-neutral-700 font-serif italic mb-4">
                      "{testimonial.testimony}"
                    </p>
                    <div className="bg-accent text-white text-sm px-3 py-1 rounded-full inline-flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {testimonial.result}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Studies and Validations */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-8">
              📋 ESTUDOS E VALIDAÇÕES:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-bold text-blue-700 mb-2">Instituto Brasileiro de Relacionamentos:</h4>
                  <p className="text-neutral-700">87% das brigas conjugais são evitáveis com comunicação adequada</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-bold text-purple-700 mb-2">Pesquisa USP sobre Casamentos:</h4>
                  <p className="text-neutral-700">Admiração mútua é o principal fator de satisfação matrimonial</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-bold text-green-700 mb-2">Estudo Bíblico Harvard:</h4>
                  <p className="text-neutral-700">Princípios bíblicos reduzem conflitos conjugais em 73%</p>
                </CardContent>
              </Card>
            </div>
            
            <motion.div 
              className="bg-accent text-white rounded-2xl p-6 mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-2">GARANTIA DE RESULTADOS:</h4>
              <p className="text-lg">Se você aplicar por 7 dias e não ver mudanças, devolvemos 100% do seu dinheiro</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
