'use client';

import { motion } from 'framer-motion';
import { ChefHat, Clock, Truck } from 'lucide-react';

const features = [
  {
    icon: <ChefHat size={32} />,
    title: "100% Artesanal",
    text: "Nada de industrializados. Receitas de família feitas do zero."
  },
  {
    icon: <Clock size={32} />,
    title: "Sempre Fresquinho",
    text: "Produção diária para garantir que você receba o melhor sabor."
  },
  {
    icon: <Truck size={32} />,
    title: "Entrega Cuidadosa",
    text: "Seu pedido chega intacto e lindo, pronto para presentear."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}