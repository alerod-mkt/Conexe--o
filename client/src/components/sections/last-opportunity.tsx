import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gem, Heart, Clock } from "lucide-react";

export default function LastOpportunitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="inline-flex items-center bg-secondary text-primary px-6 py-3 rounded-full mb-8 text-lg font-bold">
              <Gem className="w-5 h-5 mr-2" />
              ÚLTIMA OPORTUNIDADE DE GARANTIR SEU DESCONTO!
            </Badge>
            
            <motion.div 
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl">
                Mulheres cristãs merecem ser admiradas e desejadas pelos seus maridos.
              </p>
              
              <p className="text-xl md:text-2xl">
                Você merece um casamento que glorifica a Deus, não apenas brigas que destroem o lar.
              </p>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mx-auto max-w-2xl">
                <CardContent className="p-0">
                  <p className="text-lg font-semibold text-secondary">
                    Não deixe conflitos destrutivos continuarem roubando a paz da sua família.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-secondary hover:bg-amber-600 text-primary font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl mb-8"
              >
                🔥 QUERO GARANTIR MINHA TRANSFORMAÇÃO AGORA! - R$ 27,00
              </Button>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-serif italic text-blue-100 mb-4">
                  "A mulher sábia edifica a sua casa, mas a insensata, com as próprias mãos, a derruba."
                </p>
                <p className="text-sm text-blue-200">- Provérbios 14:1</p>
              </motion.div>
              
              <p className="text-xl font-bold text-secondary mb-8">
                O tempo de construir um casamento de admiração e desejo é AGORA.
              </p>
              
              <Button 
                size="lg"
                className="bg-accent hover:bg-green-600 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-slow"
              >
                🚀 QUERO MINHA UNIDADE PROMOCIONAL! - R$ 27,00
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}