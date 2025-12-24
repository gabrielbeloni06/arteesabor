'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-20 flex items-center justify-center bg-[#FFF8F0] overflow-hidden">
      
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[5%] text-6xl opacity-10 select-none z-0"
      >
        🍰
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] text-8xl opacity-10 select-none z-0"
      >
        🍫
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-300 rounded-full blur-[120px] opacity-20 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6 md:space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm"
          >
            <span>✨</span> 100% Artesanal
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
            Doçura que vira <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Memória
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
            Bolos artísticos, doces finos e salgados feitos com ingredientes selecionados. 
            O verdadeiro carinho de mãe em cada pedaço.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            
            <Link href="/cardapio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Ver Cardápio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <a 
              href="https://wa.me/5531984516947?text=Olá! Gostaria de fazer uma encomenda personalizada." 
              target="_blank"
              className="w-full sm:w-auto"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 rounded-full font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-green-600"/>
                Fazer Encomenda
              </motion.button>
            </a>

          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
               <div className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                  <Image src="/a.png" alt="Cliente 1" fill className="object-cover" />
               </div>
               <div className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                  <Image src="/b.png" alt="Cliente 2" fill className="object-cover" />
               </div>
               <div className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                  <Image src="/c.png" alt="Cliente 3" fill className="object-cover" />
               </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">4.9/5</span> de avaliações dos clientes
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end mt-10 md:mt-0"
        >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-2xl border-[6px] border-white/50 backdrop-blur-sm overflow-hidden"
            >
                <Image 
                  src="/bolo.png" 
                  alt="Bolo Destaque" 
                  fill 
                  className="object-cover"
                  priority 
                />
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-10 right-0 md:-right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-20"
            >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-sm">Mais Pedido</p>
                    <p className="text-xs text-gray-500">Bolos Personalizados</p>
                </div>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
}