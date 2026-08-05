"use client";

import { useState } from 'react';
import CocoRoseLogo from './CocoRoseLogo';

interface FooterProps { onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void; }

export default function Footer({ onLinkClick }: FooterProps) {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => { setSubscribeStatus('success'); setEmail(''); }, 1200);
  };

  return (
    <footer className="bg-gradient-to-b from-[#FFF5F8] to-[#FCE7F3] pt-20 pb-12 px-6 text-[#6B5A60] border-t border-dashed border-[#FFD6E8]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3"><CocoRoseLogo size={60} color="#900C27" showText={false} /><h4 className="text-2xl font-title font-extrabold text-[#1A1A1A]">Coco Rose</h4></div>
          <p className="max-w-xs font-normal text-xs leading-relaxed text-[#6B5A60]">Boutique Shop  Store. Prendas femeninas y versátiles para la mujer que busca estilo, confort y seguridad sin complicarse. Porque verte bien nunca fue tan fácil.</p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label text-[10px] uppercase tracking-[0.12em] font-bold text-[#1A1A1A] mb-4">Catalogo</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#1A1A1A] transition-colors">Todos los Productos</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#1A1A1A] transition-colors">🔥 Sale</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#1A1A1A] transition-colors">👚 Blusas</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#1A1A1A] transition-colors">👗 Vestidos</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label text-[10px] uppercase tracking-[0.12em] font-bold text-[#1A1A1A] mb-4">Nosotros</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#1A1A1A] transition-colors">Nuestra Historia</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#1A1A1A] transition-colors">Sostenibilidad</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#1A1A1A] transition-colors">Diario Coquette</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-label text-[10px] uppercase tracking-[0.12em] font-bold text-[#1A1A1A] mb-4">Boletin Informativo 🎀</h4>
          <p className="text-xs text-[#6B5A60] mb-3">Recibe ofertas exclusivas y lanzamientos en tu correo.</p>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="tu.correo@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'} className="bg-white border border-[#FFD6E8] px-4 py-2.5 rounded-2xl text-xs outline-none focus:border-[#1A1A1A] transition-all placeholder-[#6B5A60]/60 text-[#1A1A1A] disabled:opacity-50" />
            <button onClick={handleSubscribe} disabled={subscribeStatus !== 'idle' || !email} className="self-start px-5 py-2 bg-[#FFD6A8] text-[#1A1A1A] font-title font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#ffc98f] transition-all disabled:opacity-50 disabled:cursor-default border border-[#FFD6E8] shadow-sm flex items-center gap-1.5">
              <span>{subscribeStatus === 'idle' && 'Suscribirse'}{subscribeStatus === 'loading' && 'Suscribiendo...'}{subscribeStatus === 'success' && 'Suscrito con Amor!'}</span><span>🎀</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1800px] mx-auto mt-16 pt-6 border-t border-dashed border-[#FFD6E8] flex flex-col md:flex-row justify-between items-center text-[10px] font-label uppercase tracking-[0.12em] text-[#6B5A60]">
        <p>© Coco Rose • Shop  Store</p>
        <p className="mt-2 md:mt-0">Diseño • Confort • Boutique Vibe ✨</p>
      </div>
    </footer>
  );
}