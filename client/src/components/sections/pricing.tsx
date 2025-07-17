import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Target, DollarSign, Shield, CreditCard, Clock, Users } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "TRUQUE DA BRIGA ZERO",
      subtitle: "ESSENCIAL",
      originalPrice: "47,00",
      currentPrice: "17,00",
      features: [
        "Guia Completo do Truque da Briga Zero (7 atitudes transformadoras)",
        "Roteiro diário passo a passo",
        "Exemplos práticos de cada atitude",
        "Acesso VITALÍCIO (para sempre)"
      ],
      excludedFeatures: [
        "WhatsApp da Reconquista (50 mensagens que fazem ele sorrir)",
        "Protocolo Pós-Briga (como reconquistar depois de discussão)",
        "Manual da Esposa Irresistível (15 atitudes irresistíveis)",
        "Código da Admiração (como falar dos defeitos sem criticar)"
      ],
      popular: false,
      buttonText: "🔥 QUERO O ESSENCIAL - R$ 17,00"
    },
    {
      name: "TRUQUE DA BRIGA ZERO",
      subtitle: "COMPLETO",
      originalPrice: "97,00",
      currentPrice: "27,00",
      features: [
        "Guia Completo do Truque da Briga Zero (7 atitudes transformadoras)",
        "WhatsApp da Reconquista (50 mensagens que fazem ele sorrir)",
        "Protocolo Pós-Briga (como reconquistar depois de discussão)",
        "Manual da Esposa Irresistível (15 atitudes irresistíveis)",
        "Código da Admiração (como falar dos defeitos sem criticar)",
        "Suporte por email exclusivo",
        "Acesso VITALÍCIO (para sempre)"
      ],
      excludedFeatures: [],
      popular: true,
      buttonText: "🔥 QUERO O COMPLETO - R$ 27,00"
    }
  ];

  const valueComparison = [
    { item: "Guia Completo do Truque da Briga Zero", price: "R$ 47,00" },
    { item: "WhatsApp da Reconquista", price: "R$ 27,00" },
    { item: "Protocolo Pós-Briga", price: "R$ 17,00" },
    { item: "Manual da Esposa Irresistível", price: "R$ 37,00" },
    { item: "Código da Admiração", price: "R$ 27,00" }
  ];

  const guaranteeFeatures = [
    { icon: <DollarSign className="w-6 h-6" />, text: "Se não funcionar, você recebe 100% do dinheiro de volta" },
    { icon: <Clock className="w-6 h-6" />, text: "Sem pergunta, sem enrolação" },
    { icon: <Check className="w-6 h-6" />, text: "Pode testar por 7 dias completos" },
    { icon: <Shield className="w-6 h-6" />, text: "O risco é meu, não seu" }
  ];

  return (
    <section className="py-20 bg-white">
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
              <Target className="inline w-12 h-12 mr-4 text-primary" />
              Escolha Seu Nível de <span className="text-primary">Transformação</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`card-hover relative ${plan.popular ? 'border-2 border-secondary bg-gradient-to-br from-secondary/5 to-orange-50' : 'border-2 border-neutral-200'} rounded-3xl p-8`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-secondary text-primary font-bold px-6 py-2 rounded-full">
                        ⭐ MAIS POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    <div className={`text-center mb-6 ${plan.popular ? 'mt-4' : ''}`}>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                      <h4 className={`text-xl font-semibold mb-4 ${plan.popular ? 'text-secondary' : 'text-neutral-600'}`}>
                        {plan.subtitle}
                      </h4>
                      <div className="mb-4">
                        <span className="text-2xl text-neutral-500 line-through">De R$ {plan.originalPrice}</span>
                        <div className={`text-4xl font-bold ${plan.popular ? 'text-secondary' : 'text-primary'}`}>
                          R$ {plan.currentPrice}
                        </div>
                        <span className="text-neutral-600">PAGAMENTO ÚNICO</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="text-accent mt-1 w-5 h-5 shrink-0" />
                          <span className={feature.includes('VITALÍCIO') ? 'font-bold' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {plan.excludedFeatures.length > 0 && (
                      <div className="space-y-3 mb-8 opacity-60">
                        {plan.excludedFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <X className="text-red-500 mt-1 w-5 h-5 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button 
                      className={`w-full font-bold text-lg py-4 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        plan.popular 
                          ? 'bg-secondary hover:bg-amber-600 text-primary shadow-lg' 
                          : 'bg-primary hover:bg-blue-800 text-white'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Value Comparison */}
          <motion.div 
            className="bg-neutral-100 rounded-2xl p-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8 flex items-center justify-center">
              <DollarSign className="w-8 h-8 mr-2" />
              COMPARAÇÃO DE VALORES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-neutral-800 mb-4">Se você fosse comprar tudo separado:</h4>
                <ul className="space-y-2 text-neutral-700">
                  {valueComparison.map((item, index) => (
                    <li key={index}>• {item.item}: {item.price}</li>
                  ))}
                  <li className="font-bold text-lg border-t pt-2">TOTAL: R$ 155,00</li>
                </ul>
              </div>
              <div className="text-center">
                <Card className="bg-accent text-white p-6">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-bold mb-2">Mas hoje você pega tudo por</h4>
                    <div className="text-4xl font-bold">R$ 27,00</div>
                    <p className="mt-2">É tipo ganhar 4 bônus de graça!</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div 
            className="bg-gradient-to-r from-accent/10 to-green-50 border border-accent/20 rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-2" />
                GARANTIA INCONDICIONAL DE 7 DIAS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {guaranteeFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-accent mb-2 flex justify-center">{feature.icon}</div>
                    <p className="text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Why This Promotion */}
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-primary/10 border border-primary/20 rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Por que tô fazendo essa promoção?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Quero que mais mulheres cristãs tenham casamentos felizes</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Quanto mais casais restaurados, mais glória para Deus</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Seu testemunho vai inspirar outras mulheres</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Facilities */}
          <motion.div 
            className="bg-white border-2 border-accent/20 rounded-2xl p-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center justify-center">
                <CreditCard className="w-8 h-8 mr-2 text-accent" />
                FACILIDADES DE PAGAMENTO
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-neutral-700">Pagamento 100% seguro (cartão, PIX, boleto)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-neutral-700">Acesso imediato após confirmação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-neutral-700">Funciona em qualquer dispositivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-neutral-700">Suporte técnico incluído</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
