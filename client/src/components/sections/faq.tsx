import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Este método funciona mesmo se meu marido for muito teimoso?",
      answer: "Sim! Na verdade, funciona melhor com homens teimosos porque eles respondem rápido quando param de se sentir atacados. As 7 atitudes foram testadas exatamente com maridos difíceis."
    },
    {
      question: "Vou conseguir aplicar em 7 dias ou vai ser muito difícil?",
      answer: "É super simples! Cada dia tem apenas 1 atitude específica. Você recebe o passo a passo exato do que fazer, como fazer e quando fazer. É impossível errar."
    },
    {
      question: "E se eu for tímida ou não souber como conversar com ele?",
      answer: "Perfeito! O método foi criado exatamente para mulheres tímidas. Você tem scripts prontos do que falar, como falar e quando falar. Tudo mastigadinho para você só aplicar."
    },
    {
      question: "Funciona mesmo em casamentos com problemas há muito tempo?",
      answer: "Sim! Quanto mais tempo de problema, mais rápido é o resultado. Maridos que estão cansados de brigas respondem super rápido quando veem que você mudou de verdade."
    },
    {
      question: "O que acontece se não der certo comigo?",
      answer: "Você tem 7 dias para testar. Se não funcionar (o que é quase impossível), devolvemos 100% do seu dinheiro. Sem pergunta, sem enrolação."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
              <HelpCircle className="inline w-12 h-12 mr-4 text-primary" />
              Perguntas Que <span className="text-primary">Sempre Me Fazem</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full text-left p-6 h-auto flex justify-between items-center hover:bg-neutral-50"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg font-semibold text-neutral-900 flex-1">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </Button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-neutral-700">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
