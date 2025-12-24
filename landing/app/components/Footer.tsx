'use client';

import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; 

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-brand-brown text-brand-cream pt-16 pb-8 relative overflow-hidden">
      
      <motion.a
        href="https://wa.me/5531984516947" 
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-cream/20 pb-12">
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange bg-white">
                <Image 
                   src="/logo.png" 
                   alt="Logo" 
                   fill 
                   className="object-cover" 
                />
             </div>
             <div>
                <h3 className="text-2xl font-serif font-bold text-brand-orange leading-none">
                    A Lojinha
                </h3>
                <span className="text-brand-cream text-lg">Sabor e Arte</span>
             </div>
          </div>

          <p className="text-brand-cream/80 max-w-xs text-sm leading-relaxed">
            Transformando açúcar e afeto em memórias inesquecíveis. Bolos e doces artesanais feitos com o coração.
          </p>
          
          <div className="flex gap-4 pt-2">
            <Link href="https://www.instagram.com/alojinhasaborearte" className="p-2 bg-brand-cream/10 rounded-full hover:bg-brand-orange transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="p-2 bg-brand-cream/10 rounded-full hover:bg-brand-orange transition-colors">
              <Phone size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6 text-brand-orange">Navegação</h4>
          <ul className="space-y-3 text-brand-cream/80">
            <li><Link href="/" className="hover:text-brand-orange transition-colors">Início</Link></li>
            <li><Link href="/cardapio" className="hover:text-brand-orange transition-colors">Cardápio Completo</Link></li>
            <li><Link href="/#about" className="hover:text-brand-orange transition-colors">Nossa História</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6 text-brand-orange">Contato</h4>
          <ul className="space-y-4 text-brand-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 text-brand-orange flex-shrink-0" size={20} />
              <span>
                Belo Horizonte, MG<br />
                (Atendemos toda a região)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-orange flex-shrink-0" size={20} />
              <span>(31) 98451-6947</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-cream/60">
        <p>© 2025 A Lojinha Sabor e Arte. Todos os direitos reservados.</p>
        
        <div className="flex items-center gap-6">
          <p>Desenvolvido por <span className="font-bold text-brand-orange">Zytech</span></p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-brand-cream transition-colors"
          >
            Voltar ao topo <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}