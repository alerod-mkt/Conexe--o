import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Play, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Urgency Badge */}
            <Badge 
              variant="secondary" 
              className="inline-flex items-center bg-secondary text-primary font-bold px-6 py-3 rounded-full mb-8 text-base animate-bounce-gentle"
            >
              <Clock className="w-4 h-4 mr-2" />
              URGENTE: Apenas 43 Vagas Restantes
            </Badge>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Pare de <span className="text-secondary">Implorar, Brigar</span> e Controlar
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-blue-100">
              Como o <span className="text-secondary">Truque da Briga Zero</span> Transforma Você na Esposa Que Ele Admira e Deseja em Apenas 7 Dias
            </h2>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              <strong>2.547 Mulheres Cristãs</strong> já pararam de brigar e começaram a ser admiradas usando este método de 7 atitudes
            </p>
            
            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto italic">
              Mesmo se você já tentou de tudo e sente que virou "a chata da casa"...
            </p>
            
            {/* Hero CTA */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-amber-600 text-primary font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                QUERO TRANSFORMAR MEU CASAMENTO
              </Button>
              <p className="text-sm text-blue-200 flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">89%</div>
                <p className="text-blue-200">Viram mudanças nos primeiros 7 dias</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">2.547</div>
                <p className="text-blue-200">Mulheres já transformaram seus casamentos</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">7 Dias</div>
                <p className="text-blue-200">Para eliminar brigas completamente</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-blue-200" />
        </motion.div>
      </div>
    </section>
  );
}
