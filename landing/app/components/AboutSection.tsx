'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Image from 'next/image'; 

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-orange rounded-2xl z-0"></div>
          
          <div className="relative z-10 w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">

             <Image 
               src="/destaque.png" 
               alt="Nossa confeiteira preparando doces com carinho"
               fill
               className="object-cover hover:scale-105 transition-transform duration-700"
               sizes="(max-width: 768px) 100vw, 50vw"
             />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">
            Nossa História
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-brown">
            Mãos que criam com <span className="text-brand-orange">amor</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            O que começou como uma brincadeira na cozinha de casa, preparando bolos para os aniversários dos filhos, virou uma paixão e profissão.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Aqui na <strong>A Lojinha Sabor e Arte</strong>, não usamos pré-misturas industriais. Cada brigadeiro é enrolado à mão, cada massa é batida no dia e o recheio tem aquele gostinho de panela que traz memórias da infância.
          </p>

          <div className="flex items-center gap-2 text-brand-brown font-bold pt-4">
            <div className="p-2 bg-red-100 rounded-full text-red-500">
              <Heart size={20} fill="currentColor" />
            </div>
            <span>Feito por quem ama o que faz.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}