import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Flame, Zap, Cross, Check } from "lucide-react";

export default function SolutionSection() {
  const differentials = [
    {
      icon: <Flame className="w-8 h-8 text-secondary" />,
      title: "Elimina Conflitos Pela Raiz",
      items: [
        "Não ensina a 'administrar' brigas, ensina a ELIMINÁ-LAS",
        "Cada dia tem uma atitude específica",
        "Em 7 dias você nunca mais vai brigar por bobagem"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Desperta Admiração Automática",
      items: [
        "Não é sobre 'engolir sapo' ou aceitar tudo calada",
        "É sobre agir de forma que ele naturalmente te admire",
        "Mexe com o design divino do coração masculino"
      ]
    },
    {
      icon: <Cross className="w-8 h-8 text-secondary" />,
      title: "Baseado em Princípios Bíblicos",
      items: [
        "Cada atitude fundamentada na Palavra de Deus",
        "Sabedoria divina testada e aprovada",
        "Alinhado com como Deus criou os homens"
      ]
    }
  ];

  const results = [
    { text: "Zero brigas", timeframe: "em 7 dias" },
    { text: "Ele te procura para conversar", timeframe: "em 10 dias" },
    { text: "Intimidade emocional e física", timeframe: "em 15 dias" },
    { text: "Ele te trata como rainha", timeframe: "em 21 dias" },
    { text: "Casamento que é exemplo de amor", timeframe: "em 30 dias" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
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
            <Badge className="inline-flex items-center bg-accent text-white px-4 py-2 rounded-full mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              A Solução
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Descobri o Único Método que Transforma{" "}
              <span className="text-secondary">Brigas em Pura Admiração</span> e Desejo em 7 Dias
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Sem terapia de casal ou conselhos genéricos
            </p>
          </motion.div>

          {/* Method Introduction */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-secondary mb-4">O Truque da Briga Zero</h3>
            <p className="text-xl text-blue-100">
              O método revolucionário que elimina conflitos pela raiz e desperta admiração automática
            </p>
          </motion.div>

          {/* Differentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <CardContent className="p-0">
                    <div className="mb-4">{differential.icon}</div>
                    <h4 className="text-xl font-bold mb-4">{differential.title}</h4>
                    <ul className="space-y-2 text-blue-100">
                      {differential.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm">• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Results Timeline */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-secondary">
              O Que Você Consegue Com Este Método:
            </h3>
            <div className="space-y-4">
              {results.map((result, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg">
                    <strong>{result.text}</strong> {result.timeframe}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
