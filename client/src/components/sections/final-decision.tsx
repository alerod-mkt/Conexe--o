import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, X, Zap, Crown } from "lucide-react";

export default function FinalDecisionSection() {
  const options = [
    {
      title: "OPÇÃO 1: Não Fazer Nada",
      subtitle: "(Caminho da Dor)",
      icon: <X className="w-8 h-8 text-red-500" />,
      color: "red",
      consequences: [
        "Daqui 1 mês: Mais brigas, mais distância, mais sofrimento",
        "Daqui 6 meses: Casamento frio, você se sentindo rejeitada",
        "Daqui 1 ano: Dois estranhos morando na mesma casa"
      ]
    },
    {
      title: "OPÇÃO 2: Continuar Tentando Sozinha",
      subtitle: "(Caminho da Luta)",
      icon: <Target className="w-8 h-8 text-orange-500" />,
      color: "orange",
      consequences: [
        "Mais tempo perdido com métodos que não funcionam",
        "Mais frustrações e lágrimas no travesseiro",
        "Mais anos sem ser admirada e desejada"
      ]
    },
    {
      title: "OPÇÃO 3: Usar o Truque da Briga Zero",
      subtitle: "(Caminho da Transformação)",
      icon: <Crown className="w-8 h-8 text-secondary" />,
      color: "green",
      consequences: [
        "Zero brigas em 7 dias",
        "Ele te procurando para conversar em 10 dias",
        "Intimidade e paixão renovadas em 15 dias"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="inline-flex items-center bg-secondary text-primary px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Momento de Decidir
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <Target className="inline w-12 h-12 mr-4 text-secondary" />
              DECISÃO FINAL: <span className="text-secondary">Qual Caminho Você Vai Escolher?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`${
                  index === 2 
                    ? 'bg-gradient-to-br from-accent/20 to-green-900/20 border-accent border-2' 
                    : 'bg-white/10 backdrop-blur-sm border-white/20'
                } h-full p-6 relative`}>
                  {index === 2 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-secondary text-primary font-bold px-6 py-2 rounded-full">
                        ⭐ RECOMENDADO
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="mb-4">{option.icon}</div>
                      <h3 className={`text-xl font-bold mb-2 ${index === 2 ? 'text-secondary' : 'text-white'}`}>
                        {option.title}
                      </h3>
                      <p className={`${index === 2 ? 'text-green-200' : 'text-neutral-300'}`}>
                        {option.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {option.consequences.map((consequence, conseqIndex) => (
                          <li key={conseqIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              index === 2 ? 'bg-accent' : 'bg-red-400'
                            }`} />
                            <span className={index === 2 ? 'text-green-100' : 'text-neutral-300'}>
                              {consequence}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold mb-4">A ESCOLHA É SUA.</p>
            <p className="text-xl text-blue-200 mb-8">
              Mas lembre-se: esta promoção termina domingo à meia-noite e o preço volta ao normal.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-secondary hover:bg-amber-600 text-primary font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 SIM, QUERO TRANSFORMAR MEU CASAMENTO AGORA! - R$ 27,00
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}