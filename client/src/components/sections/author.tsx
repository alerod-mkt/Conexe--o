import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthorSection() {
  const credentials = [
    { number: "2.500+", label: "Mulheres transformadas" },
    { number: "8 anos", label: "De experiência" },
    { number: "ACCB", label: "Reconhecida pela associação" },
    { number: "Autora", label: '"Mulher Sábia, Lar Feliz"' }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <CardContent className="p-0">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Quem Sou Eu e Por Que Você Pode Confiar No Meu Método
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Author Image */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                    alt="Patrícia Oliveira - Conselheira Matrimonial" 
                    className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-primary">Patrícia Oliveira</h3>
                  <p className="text-neutral-600">Conselheira Matrimonial Cristã</p>
                </motion.div>
                
                {/* Author Story */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4 text-neutral-700">
                    <p className="text-lg">
                      <strong>MAS NEM SEMPRE FOI ASSIM...</strong>
                    </p>
                    <p>
                      Há 8 anos eu era exatamente como você. Casada, mãe de 2 filhos, frequentava a igreja há mais de 15 anos, mas meu casamento estava um desastre.
                    </p>
                    <p>
                      Eu brigava com meu marido por tudo: dinheiro, filhos, casa, trabalho. Sabe aquela sensação de que você virou "a chata da família"? Era eu.
                    </p>
                    <p>
                      <strong>FOI AÍ QUE DESCOBRI O SEGREDO:</strong>
                    </p>
                    <p>
                      Num retiro de casais, uma senhora de 70 anos me contou que em 50 anos de casamento nunca tinha brigado com o marido. E me ensinou as 7 atitudes que mudaram minha vida.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Credentials */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover bg-primary text-white text-center p-4">
                      <CardContent className="p-0">
                        <div className="text-xl md:text-2xl font-bold text-secondary">{credential.number}</div>
                        <p className="text-xs md:text-sm">{credential.label}</p>
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
