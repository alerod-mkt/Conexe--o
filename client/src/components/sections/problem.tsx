import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TriangleAlert, X } from "lucide-react";

export default function ProblemSection() {
  const phases = [
    {
      number: 1,
      title: "FASE 1: A Esposa Cobradora",
      color: "red",
      items: [
        "Você cobra atenção, carinho e mudanças constantemente",
        "Ele começa a se sentir criticado e controlado",
        "As conversas viram discussões sobre o que está errado"
      ]
    },
    {
      number: 2,
      title: "FASE 2: A Esposa Controladora",
      color: "orange",
      items: [
        "Você sente que precisa controlar tudo senão nada funciona",
        "Ele se afasta e você implora por um abraço, um beijo, um 'eu te amo'",
        "Você vira mais mãe que esposa, mais chefe que companheira"
      ]
    },
    {
      number: 3,
      title: "FASE 3: A Esposa Invisível",
      color: "gray",
      items: [
        "Ele te evita, sai sem falar nada, prefere ficar no celular",
        "Você se sente rejeitada, não desejada, como se fosse invisível",
        "O casamento vira sociedade: dividem contas mas não dividem sonhos"
      ]
    }
  ];

  const stats = [
    { icon: "📊", number: "7 em 10", description: "esposas cristãs imploram por atenção do marido" },
    { icon: "💔", number: "85%", description: "já passaram pela sensação de 'carregar o casamento sozinha'" },
    { icon: "😢", number: "92%", description: "não conseguem parar de brigar mesmo sabendo que está errado" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="destructive" className="inline-flex items-center px-4 py-2 rounded-full mb-4">
              <TriangleAlert className="w-4 h-4 mr-2" />
              A Triste Realidade
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
              <span className="stats-number">89%</span> das Mulheres Cristãs: O Problema Que Está{" "}
              <span className="text-red-600">Destruindo</span> Casamentos Brasileiros
            </h2>
          </motion.div>

          {/* Problem Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-red-50 border-red-200 text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                    <p className="text-neutral-700">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Three Phases */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-12">
              As 3 Fases da Deterioração do Casamento:
            </h3>
            
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`card-hover bg-gradient-to-r from-${phase.color}-50 to-${phase.color === 'orange' ? 'yellow' : phase.color}-50 border-${phase.color}-200 p-8`}>
                  <CardContent className="p-0">
                    <div className="flex items-start gap-6">
                      <div className={`bg-${phase.color}-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0`}>
                        {phase.number}
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold text-${phase.color}-700 mb-4`}>{phase.title}</h4>
                        <ul className="space-y-2 text-neutral-700">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <X className={`text-${phase.color}-500 mt-1 w-4 h-4 shrink-0`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-semibold text-neutral-900 mb-8">E você? Em qual fase está?</p>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              QUERO SAIR DESSA SITUAÇÃO AGORA
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
