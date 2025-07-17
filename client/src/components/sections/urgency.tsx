import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, Package, Zap } from "lucide-react";
import CountdownTimer from "@/components/ui/countdown-timer";

export default function UrgencySection() {
  const urgencyPoints = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Promoção termina domingo à meia-noite",
      description: "Depois disso, o preço volta ao normal de R$ 97,00"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Só restam 43 unidades",
      description: "Neste preço promocional"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "23 pessoas vendo agora",
      description: "Não deixe essa oportunidade passar!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <Clock className="inline w-12 h-12 mr-4 text-yellow-300" />
              ATENÇÃO: Esta Promoção Tem <span className="text-yellow-300">Prazo Para Acabar!</span>
            </h2>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">PROMOÇÃO ACABA EM:</h3>
            <CountdownTimer />
          </motion.div>

          {/* Urgency Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {urgencyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <CardContent className="p-0 text-center">
                    <div className="text-yellow-300 mb-4">{point.icon}</div>
                    <h4 className="font-bold mb-2">{point.title}</h4>
                    <p className="text-red-100">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-slow"
            >
              🔥 QUERO GARANTIR MINHA VAGA AGORA - R$ 27,00
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
