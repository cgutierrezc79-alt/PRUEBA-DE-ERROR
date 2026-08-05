"use client";

import { useState } from 'react';
import { Product, JournalArticle, ViewState } from '@/lib/coco-rose/types';
import { useCocoRoseStore } from '@/lib/coco-rose/store';
import Navbar from '@/components/coco-rose/Navbar';
import Hero from '@/components/coco-rose/Hero';
import ProductGrid from '@/components/coco-rose/ProductGrid';
import About from '@/components/coco-rose/About';
import Journal from '@/components/coco-rose/Journal';
import WhatsAppButton from '@/components/coco-rose/WhatsAppButton';
import Footer from '@/components/coco-rose/Footer';
import ProductDetail from '@/components/coco-rose/ProductDetail';
import JournalDetail from '@/components/coco-rose/JournalDetail';
import CartDrawer from '@/components/coco-rose/CartDrawer';
import Checkout from '@/components/coco-rose/Checkout';

export default function Home() {
  const setCurrentProductName = useCocoRoseStore((s) => s.setCurrentProductName);
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      try { window.history.pushState(null, '', `#${targetId}`); } catch (_err) { /* ignore */ }
    }
  };

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {view.type !== 'checkout' && (
        <Navbar
          onNavClick={handleNavClick}
          cartCount={cartItems.length}
          onOpenCart={() => setIsCartOpen(true)}
        />
      )}

      <main className="flex-1">
        {view.type === 'home' && (
          <>
            <Hero />
            <ProductGrid
              onProductClick={(p) => { setCurrentProductName(p.name); window.scrollTo({ top: 0, behavior: 'smooth' }); setView({ type: 'product', product: p }); }}
              onAddToCart={addToCart}
            />
            <About />
            <Journal onArticleClick={(a) => { window.scrollTo({ top: 0, behavior: 'smooth' }); setView({ type: 'journal', article: a }); }} />
          </>
        )}
        {view.type === 'product' && (
          <ProductDetail
            product={view.product}
            onBack={() => { setView({ type: 'home' }); setTimeout(() => scrollToSection('products'), 50); }}
            onAddToCart={addToCart}
          />
        )}
        {view.type === 'journal' && (
          <JournalDetail
            article={view.article}
            onBack={() => setView({ type: 'home' })}
          />
        )}
        {view.type === 'checkout' && (
          <Checkout
            items={cartItems}
            onBack={() => setView({ type: 'home' })}
          />
        )}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}
      <WhatsAppButton />
      <a href="/api/download" download="coco-rose-final.zip" className="fixed bottom-20 right-4 z-50 bg-black text-white text-xs font-bold px-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-all">
        📥 DESCARGAR
      </a>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={() => { setIsCartOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); setView({ type: 'checkout' }); }}
      />
    </div>
  );
}