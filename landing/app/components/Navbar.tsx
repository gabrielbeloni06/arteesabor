'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Cardápio', href: '/cardapio' },
    { name: 'Sobre Nós', href: '/#about' },
    { name: 'Contato', href: '/#footer' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-brand-orange/20 group-hover:border-brand-orange transition-colors bg-white">
               <Image 
                 src="/logo.png" 
                 alt="Logo A Lojinha Sabor e Arte" 
                 fill 
                 className="object-cover"
               />
            </div>
            
            <div className="flex flex-col leading-tight">
                <span className="text-brand-brown font-serif font-bold text-lg md:text-xl tracking-tight">
                    A Lojinha
                </span>
                <span className="text-brand-orange text-sm md:text-base font-medium -mt-1">
                    Sabor e Arte
                </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-brand-orange font-medium transition-colors relative group text-sm uppercase tracking-wide"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            
            <motion.a 
              href="https://wa.me/5531984516947"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-brand-brown hover:bg-green-50 hover:text-green-600 rounded-full transition-colors cursor-pointer"
              title="Fale conosco no WhatsApp"
            >
              <MessageCircle size={24} />
              <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </motion.a>

            <button 
              className="md:hidden p-2 text-brand-brown"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[80px] left-0 right-0 bg-white shadow-lg z-40 overflow-hidden md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50 p-2 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/cardapio" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-brand-orange text-white py-3 rounded-full font-bold mt-4">
                    Ver Cardápio
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}