import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Wrench, Smartphone } from "lucide-react";

export default function ProductDetailsSection() {
  const sevenAttitudes = [
    { day: 1, title: "Domingo do Perdão", description: "Como liberar mágoas sem ser capacho", color: "red" },
    { day: 2, title: "Segunda da Transparência", description: "Jeito de se abrir sem parecer fraca", color: "blue" },
    { day: 3, title: "Terça do Amor", description: "Gestos que despertam desejo instantâneo", color: "green" },
    { day: 4, title: "Quarta do Diálogo", description: "Conversas que conectam sem brigar", color: "yellow" },
    { day: 5, title: "Quinta do Respeito", description: "Jeito de exaltar ele sem bajular", color: "purple" },
    { day: 6, title: "Sexta da Gratidão", description: "Palavras que fazem ele se sentir herói", color: "indigo" },
    { day: 7, title: "Sábado da Valorização", description: "Atitudes que fazem ele se sentir rei", color: "emerald" }
  ];

  const tools = [
    {
      icon: <Wrench className="w-6 h-6 text-secondary" />,
      title: "FERRAMENTAS E RECURSOS",
      items: ["Roteiro Diário Passo a Passo", "Exemplos Práticos de Cada Atitude"]
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "ACESSO E SUPORTE",
      items: ["Área de Membros Exclusiva", "Suporte por Email 24h"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
              Olha Só <span className="text-primary">Tudo Que Você Vai Receber</span> Quando Pegar o Truque da Briga Zero
            </h2>
          </motion.div>

          {/* Main Content */}
          <Card className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <CardContent className="p-0">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="text-2xl font-bold text-primary mb-4 p-4">
                  <BookOpen className="w-6 h-6 mr-2" />
                  MATERIAL PRINCIPAL
                </Badge>
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-2">📖 Guia Completo do Truque da Briga Zero</h4>
                  <ul className="text-left space-y-2">
                    <li>• Explicação detalhada das 7 atitudes que eliminam brigas</li>
                    <li>• Como aplicar cada dia com exemplos práticos</li>
                    <li>• Transformação completa em apenas uma semana</li>
                  </ul>
                </div>
              </motion.div>

              {/* 7 Attitudes */}
              <div className="mb-8">
                <motion.h3 
                  className="text-2xl font-bold text-center text-primary mb-8 flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Target className="w-8 h-8 mr-2" />
                  AS 7 ATITUDES TRANSFORMADORAS
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sevenAttitudes.map((attitude, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`card-hover bg-gradient-to-br from-${attitude.color}-50 to-${attitude.color}-100 border-${attitude.color}-200 p-4`}>
                        <CardContent className="p-0">
                          <div className="text-center">
                            <div className={`w-12 h-12 bg-${attitude.color}-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3`}>
                              {attitude.day}
                            </div>
                            <h5 className={`font-bold text-${attitude.color}-700 mb-2 text-sm`}>{attitude.title}</h5>
                            <p className="text-xs text-neutral-600">{attitude.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools and Resources */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`bg-gradient-to-br ${index === 0 ? 'from-secondary/10 to-orange-50 border-secondary/20' : 'from-primary/10 to-blue-50 border-primary/20'} p-6`}>
                      <CardContent className="p-0">
                        <h4 className={`font-bold ${index === 0 ? 'text-secondary' : 'text-primary'} mb-4 flex items-center`}>
                          {tool.icon}
                          <span className="ml-2">{tool.title}</span>
                        </h4>
                        <ul className="space-y-2 text-neutral-700">
                          {tool.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
