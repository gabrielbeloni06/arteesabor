'use client';

import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import Image from 'next/image'; 

export default function InstagramSection() {
  
  const feedImages = [
    { src: "/insta1.png", alt: "Bolo de Cenoura com cobertura" },
    { src: "/insta2.png", alt: "Caixa de docinhos gourmet" },
    { src: "/insta3.png", alt: "Bastidores da produção de Natal" },
    { src: "/insta4.png", alt: "Feedback de cliente feliz" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider text-sm mb-2">
            <Instagram size={18} />
            <span>@alojinhasaborearte</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-brown">
            Acompanhe nossas delícias <br/> em tempo real
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Bastidores, fornadas saindo na hora e feedback de clientes. Siga nosso Instagram e fique com água na boca.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {feedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-sm border border-gray-100"
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw" 
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white z-10">
                <Instagram size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        <a 
          href="https://www.instagram.com/alojinhasaborearte" 
          target="_blank"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all hover:-translate-y-1"
        >
          Seguir no Instagram <ArrowUpRight size={18} />
        </a>

      </div>
    </section>
  );
}