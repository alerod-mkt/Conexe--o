import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    marriageYears: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigada pelo seu contato. Responderemos em breve!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      marriageYears: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Ainda Tem Dúvidas? <span className="text-primary">Vamos Conversar!</span>
            </h2>
            <p className="text-xl text-neutral-600">
              Entre em contato e tire todas as suas dúvidas antes de começar sua transformação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Seu Nome *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Como você gostaria de ser chamada?"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Seu Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                      WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="marriageYears" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Há quantos anos casada?
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("marriageYears", value)}>
                      <SelectTrigger className="w-full border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-1">Menos de 1 ano</SelectItem>
                        <SelectItem value="1-5">1-5 anos</SelectItem>
                        <SelectItem value="6-10">6-10 anos</SelectItem>
                        <SelectItem value="11-15">11-15 anos</SelectItem>
                        <SelectItem value="more-15">Mais de 15 anos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Qual sua maior dificuldade no casamento? *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Conte um pouco sobre sua situação..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2 text-center">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-primary hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      ENVIAR MENSAGEM
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
