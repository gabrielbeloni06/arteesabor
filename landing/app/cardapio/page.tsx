'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer'; 
import InstagramSection from '../components/InstagramSection';
import { MessageCircle, Sparkles, ChefHat } from 'lucide-react';
import Image from 'next/image';

const menuItems = {
  bolos: [
    { 
      id: 1,
      name: "Bolo de Morango e Chocolate", 
      desc: "Massa fofinha de chocolate, recheio cremoso e morangos frescos selecionados.",
      image: "/prod1.png",
      tag: "O Clássico"
    },
    { 
      id: 2,
      name: "Bolo Temático (Cruzeiro)", 
      desc: "Exemplo de personalização: Com decoração exclusiva em chantininho.",
      image: "/prod2.png", 
      tag: "Personalizado"
    },
    { 
      id: 3,
      name: "Bolo de KitKat", 
      desc: "Bolo com KitKat e ninho generoso que transborda ao cortar. Sucesso absoluto.",
      image: "/prod3.png", 
      tag: "Mais Pedido"
    },
    { 
      id: 4,
      name: "Bolo de Aniversário", 
      desc: "Aquele exclusivo, fino e delicado.",
      image: "/prod4.png", 
      tag: "Delicado"
    },
  ],
  doces: [
    { 
      id: 5,
      name: "Brigadeiros", 
      desc: "Feitos com chocolate, o básico que todos gostam.",
      image: "/doce1.png", 
      tag: "Festas"
    },
    { 
      id: 6,
      name: "Brownie", 
      desc: "Doce tradicional feito com chocolate e bastante carinho.",
      image: "/doce2.png", 
      tag: "Clássico"
    },
    { 
      id: 7,
      name: "Doces Gourmet", 
      desc: "Mix de doces finos. Uma opção perfeita para presentear em datas especiais.",
      image: "/doce3.png", 
      tag: "Presente Ideal"
    },
  ],
  salgados: [
    { 
      id: 8,
      name: "Empada De Frango", 
      desc: "A tradicional empada de frango, impossível não gostar.",
      image: "/sal1.png", 
      tag: "Lanche Perfeito"
    },
    { 
      id: 9,
      name: "Croissant", 
      desc: "Massa leve e amanteigada, com camadas crocantes por fora e macias por dentro.",
      image: "/sal2.png", 
      tag: "Delícia"
    },
  ],
  natal: [
    { 
      id: 10,
      name: "Antepassos", 
      desc: "Antepastos frescos e saborosos, preparados artesanalmente para acompanhar pães e torradas.",
      image: "/nat1.png", 
      tag: "Sazonal"
    },
    { 
      id: 11,
      name: "Brownie Crush", 
      desc: "Brownie cremoso por dentro, com casquinha crocante por fora e sabor intenso de chocolate. Feito na hora para o Natal.",
      image: "/nat2.png", 
      tag: "Edição Limitada"
    },
  ]
};

type Category = 'bolos' | 'doces' | 'salgados' | 'natal';

export default function CardapioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('bolos');

  return (
    <main className="min-h-screen bg-[#FFF8F0] pt-28">
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">
                Portfólio & Encomendas
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-brown mb-6 font-serif">
               Galeria de Delícias
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
               Aqui estão alguns dos nossos trabalhos favoritos para você se inspirar. <br/>
               <span className="font-bold text-brand-orange">Não encontrou o que queria?</span> Não se preocupe! 
               Fazemos tudo personalizado do seu jeito.
            </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mb-10 sticky top-24 z-30 bg-[#FFF8F0]/95 backdrop-blur-md py-4 border-b border-orange-100/50">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {[
            { id: 'bolos', label: '🍰 Bolos & Tortas' },
            { id: 'doces', label: '🍬 Doces Finos' },
            { id: 'salgados', label: '🥧 Salgados' },
            { id: 'natal', label: '🎄 Especial de Natal' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-6 py-2 rounded-full font-bold transition-all text-sm md:text-base border ${
                activeCategory === cat.id
                  ? 'bg-brand-brown border-brand-brown text-white shadow-lg transform scale-105'
                  : 'bg-white border-orange-200 text-gray-600 hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mb-24">
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {menuItems[activeCategory].map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <div className="h-72 w-full relative overflow-hidden bg-gray-100">
                    <Image 
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-brown shadow-sm flex items-center gap-1">
                        <Sparkles size={12} className="text-brand-orange" /> {item.tag}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative">
                  
                  <div className="mb-6 flex-grow">
                    <h3 className="font-bold text-2xl text-brand-brown mb-3 font-serif leading-tight">
                        {item.name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        {item.desc}
                    </p>
                  </div>
                  
                  <a 
                    href={`https://wa.me/5531984516947?text=Olá! Adorei a foto do ${item.name} no site. Gostaria de saber valores e se dá para fazer algo parecido!`}
                    target="_blank"
                    className="w-full mt-auto bg-brand-orange text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 active:scale-95"
                  >
                    <MessageCircle size={20} />
                    Quero um assim!
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-brand-brown rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <ChefHat className="absolute top-[-20px] left-[-20px] w-40 h-40 rotate-12" />
                <Sparkles className="absolute bottom-[-20px] right-[-20px] w-40 h-40 -rotate-12" />
             </div>

             <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">Não achou o que procurava?</h2>
                <p className="text-brand-cream/90 text-lg">
                    Essa galeria é apenas uma pequena parte do que fazemos. Se você tem uma ideia, uma foto de referência ou um desejo específico, me chame! Adoro criar novidades.
                </p>
                <a 
                    href="https://wa.me/5531984516947?text=Olá! Tenho uma ideia de doce/bolo diferente e queria um orçamento."
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-brand-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                    <MessageCircle size={20} />
                    Fazer Pedido Personalizado
                </a>
             </div>
        </motion.div>

      </div>

      <InstagramSection />
      <Footer />
    </main>
  );
}