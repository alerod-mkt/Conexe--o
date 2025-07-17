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
      result: "Zero brigas há 6 meses"
    },
    {
      name: "Cristina",
      age: "41 anos, casada há 15 anos",
      initial: "C",
      color: "green",
      testimony: "Eu chorava todo dia achando que meu casamento tinha acabado. Hoje meu marido me manda mensagens românticas no meio do trabalho.",
      result: "Intimidade restaurada em 2 semanas"
    },
    {
      name: "Fernanda",
      age: "36 anos, casada há 8 anos",
      initial: "F",
      color: "purple",
      testimony: "Parei de implorar e comecei a ser admirada. Meu marido agora me surpreende com jantares românticos sem eu pedir.",
      result: "Paixão renovada em 1 mês"
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
                      <div className={`w-12 h-12 bg-${testimonial.color}-500 rounded-full flex items-center justify-center text-white font-bold`}>
                        {testimonial.initial}
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
