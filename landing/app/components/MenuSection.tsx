'use client';

import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Bolo de Morango', 
    description: 'A receita clássica da mãe: massa fofinha com aquela cobertura irresistível.',
    tag: 'Mais Vendido',
    image: '/prod1.png' 
  },
  {
    id: 2,
    name: 'Bolo de KitKat',
    description: 'Bolo com KitKat e ninho generoso que transborda ao cortar. Sucesso absoluto.',
    tag: 'Favorito',
    image: '/prod3.png' 
  },
  {
    id: 3,
    name: 'Brigadeiros',
    description: 'Feitos com chocolate, o básico que todos gostam.',
    tag: null,
    image: '/doce1.png' 
  },
  {
    id: 4,
    name: 'Empada de Frango',
    description: 'A tradicional empada de frango, impossível não gostar.',
    tag: 'Salgado',
    image: '/sal1.png' 
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-brand-cream relative">
      
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-orange font-bold tracking-wider uppercase text-sm"
        >
          Nosso Cardápio
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-brand-brown mt-2"
        >
          Destaques do <span className="text-brand-orange">Cardápio</span>
        </motion.h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <motion.div 
            key={product.id}
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all border border-orange-50 group flex flex-col h-full"
          >
            <div className="h-56 w-full relative overflow-hidden rounded-2xl mb-4 bg-orange-50">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              {product.tag && (
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-orange shadow-sm flex items-center gap-1 z-10">
                  <Star size={12} fill="currentColor" /> {product.tag}
                </div>
              )}
            </div>

            <div className="space-y-2 flex-grow flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xl text-gray-800">{product.name}</h3>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {product.description}
              </p>

              <a 
                href={`https://wa.me/5531984516947?text=Vi o destaque ${product.name} no site e quero encomendar!`}
                target="_blank"
                className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-brand-orange transition-colors"
              >
                <ShoppingBag size={18} />
                Encomendar
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-16">
        <Link 
          href="/cardapio"
          className="text-brand-brown font-bold border-b-2 border-brand-orange hover:text-brand-orange transition-colors pb-1 text-lg inline-block cursor-pointer"
        >
          Ver cardápio completo →
        </Link>
      </div>

    </section>
  );
}