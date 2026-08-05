"use client";

import { useState, useEffect } from 'react';
import CocoRoseLogo from './CocoRoseLogo';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ onNavClick, cartCount, onOpenCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onOpenCart();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled || mobileMenuOpen
          ? 'bg-[#FFF5F8]/90 backdrop-blur-md py-2.5 shadow-[0_4px_20px_rgba(255,214,232,0.35)] border-b border-[#FFD6E8]'
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); onNavClick(e, ''); }}
            className="flex items-center gap-2.5 z-50 relative group"
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <CocoRoseLogo size={40} color="#900C27" showText={false} />
            </div>
            <span className="text-lg md:text-xl font-title font-bold tracking-wider text-[#1A1A1A] group-hover:text-[#900C27] transition-colors">
              COCO ROSE
            </span>
            <span className="hidden sm:inline-block text-[9px] font-semibold uppercase tracking-[0.15em] bg-[#E9D5FF] text-[#1A1A1A] px-2 py-0.5 rounded-full border border-[#FFD6E8]">
              Shop
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1A1A1A]">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#C87D8E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD6E8] hover:after:w-full after:transition-all">Catalogo</a>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#C87D8E] transition-colors py-1 relative bg-red-100/50 px-2.5 py-0.5 rounded-full border border-red-200 flex items-center gap-1">
              <span>🔥 Sale</span>
            </a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#C87D8E] transition-colors py-1 relative">Nosotros</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#C87D8E] transition-colors py-1 relative">Diario</a>
          </div>

          <div className="flex items-center gap-4 z-50 relative">
            <button
              onClick={handleCartClick}
              className="text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-90 hover:scale-105 transition-all hidden sm:flex items-center gap-2 bg-[#FFD6A8] text-[#1A1A1A] px-4 py-2.5 rounded-full border border-[#FFD6E8] shadow-[0_4px_12px_rgba(255,214,232,0.5)] font-title"
            >
              <span>🛒 Carrito</span>
              <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#FFF5F8] flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </button>

            <button
              className="block md:hidden focus:outline-none text-[#1A1A1A] p-2 bg-white rounded-full border border-[#FFD6E8] shadow-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-gradient-to-b from-[#FFF5F8] to-[#FCE7F3] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center space-y-6 text-lg font-title font-bold text-[#1A1A1A]">
          <span className="text-3xl">🎀</span>
          <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#C87D8E] transition-colors">Blusas, Tops, Jeans & Mas</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#C87D8E] transition-colors">Nosotros</a>
          <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#C87D8E] transition-colors">Diario & Ensayos</a>
          <button
            onClick={handleCartClick}
            className="hover:scale-105 transition-all text-xs uppercase tracking-widest font-title mt-6 bg-[#FFD6A8] text-[#1A1A1A] px-8 py-3.5 rounded-full border border-[#FFD6E8] shadow-md flex items-center gap-2"
          >
            <span>🛒 Ver Carrito ({cartCount})</span>
          </button>
        </div>
      </div>
    </>
  );
}