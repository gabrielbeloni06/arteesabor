'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ChristmasBanner() {
  return (
    <section className="py-12 px-6">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 text-9xl opacity-10 rotate-12">🎄</div>
        <div className="absolute bottom-0 left-0 text-9xl opacity-10 -rotate-12">🎁</div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Edição Limitada
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">Agenda de Natal Aberta!</h2>
            <p className="text-red-100 text-lg max-w-lg">
              Garanta chocotones trufados e sobremesas para sua ceia antes que as vagas acabem.
            </p>
          </div>
          
          <Link 
            href="/cardapio"
            className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105 whitespace-nowrap inline-block"
          >
            Ver Cardápio de Natal
          </Link>
        </div>
      </motion.div>
    </section>
  );
}