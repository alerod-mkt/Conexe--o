import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, AlertTriangle, Clock } from "lucide-react";

export default function UrgencyLostDaysSection() {
  const timeFrames = [
    {
      period: "Daqui a 30 dias:",
      consequence: "Ele vai estar ainda mais distante e você ainda mais frustrada",
      icon: "⚠️",
      color: "yellow"
    },
    {
      period: "Daqui a 6 meses:",
      consequence: "Seus filhos vão crescer vendo um lar sem amor e admiração",
      icon: "⚠️",
      color: "orange"
    },
    {
      period: "Daqui a 1 ano:",
      consequence: "Vocês vão ser dois estranhos morando na mesma casa",
      icon: "⚠️",
      color: "red"
    }
  ];

  const lossCategories = [
    {
      icon: "💔",
      type: "Emocionalmente:",
      loss: "A sensação de ser desejada e admirada pelo seu marido"
    },
    {
      icon: "💔",
      type: "Fisicamente:",
      loss: "Beijos, abraços e intimidade que acontecem naturalmente"
    },
    {
      icon: "💔",
      type: "Espiritualmente:",
      loss: "A paz no lar que Deus planejou para sua família"
    },
    {
      icon: "💔",
      type: "Pessoalmente:",
      loss: "A confiança de ser a mulher dos sonhos dele"
    }
  ];

  const dailyHabits = [
    "Ele se acostuma mais com a distância",
    "Você se acostuma mais com a rejeição",
    "Seus filhos se acostumam mais com as brigas"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
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
              <Clock className="w-4 h-4 mr-2" />
              Urgente
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
              Por Que <span className="text-red-600">Cada Dia Perdido</span> É Uma Oportunidade Que Nunca Volta
            </h2>
          </motion.div>

          {/* Hard Truths */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">
              VERDADES DIFÍCEIS MAS NECESSÁRIAS:
            </h3>
            <div className="space-y-6">
              {timeFrames.map((timeFrame, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-r from-${timeFrame.color}-100 to-${timeFrame.color}-50 border-${timeFrame.color}-200 p-6`}>
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{timeFrame.icon}</div>
                        <div>
                          <h4 className={`font-bold text-${timeFrame.color}-700 text-lg`}>
                            {timeFrame.period}
                          </h4>
                          <p className="text-neutral-700">{timeFrame.consequence}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What You're Losing Now */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">
              O Que Você Está Perdendo AGORA:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lossCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border-red-200 p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{category.icon}</div>
                        <div>
                          <h4 className="font-bold text-red-600 mb-1">{category.type}</h4>
                          <p className="text-neutral-700">{category.loss}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Daily Habits */}
          <motion.div 
            className="bg-red-100 border border-red-300 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-center text-red-700 mb-6">
              A CADA DIA QUE PASSA:
            </h3>
            <ul className="space-y-3">
              {dailyHabits.map((habit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3 text-neutral-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  {habit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Final Question */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold text-neutral-900 mb-8">
              Você realmente quer esperar mais?
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              NÃO! QUERO MUDAR ISSO AGORA
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}