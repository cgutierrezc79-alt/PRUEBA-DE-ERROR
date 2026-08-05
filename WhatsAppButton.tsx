"use client";

import { useState, useMemo } from 'react';
import { PRODUCTS } from '@/lib/coco-rose/constants';
import { Product } from '@/lib/coco-rose/types';
import { useCocoRoseStore } from '@/lib/coco-rose/store';
import ProductCard from './ProductCard';

const categories = [
  { name: 'Sale', emoji: '🔥', color: 'bg-red-100 text-red-700' },
  { name: 'Blusas', emoji: '👚', color: 'bg-pink-100 text-pink-700' },
  { name: 'Tops', emoji: '👙', color: 'bg-purple-100 text-purple-700' },
  { name: 'Jeans', emoji: '👖', color: 'bg-blue-100 text-blue-700' },
  { name: 'Pantalones', emoji: '👖', color: 'bg-amber-100 text-amber-700' },
  { name: 'Vestidos', emoji: '👗', color: 'bg-rose-100 text-rose-700' },
  { name: 'Chaquetas', emoji: '🧥', color: 'bg-stone-100 text-stone-700' },
  { name: 'Sueteres', emoji: '🧶', color: 'bg-orange-100 text-orange-700' },
];

const materialFilters = ['Todos los materiales', 'Algodon', 'Lino', 'Denim', 'Seda', 'Viscosa', 'Poliester'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export default function ProductGrid({ onProductClick, onAddToCart }: ProductGridProps) {
  const setCurrentProductName = useCocoRoseStore((s) => s.setCurrentProductName);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Todos los materiales');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid-3' | 'grid-4' | 'list'>('grid-3');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showWishlistOnly, setShowWishlistOnly] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedQuickSize, setSelectedQuickSize] = useState<string>('');
  const [selectedQuickColor, setSelectedQuickColor] = useState<string>('');
  const [addedMessage, setAddedMessage] = useState<boolean>(false);

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const processedProducts = useMemo(() => {
    let list = [...PRODUCTS];
    if (showWishlistOnly) list = list.filter(p => wishlist.includes(p.id));
    if (activeCategory) list = list.filter(p => p.category === activeCategory);
    if (selectedMaterial !== 'Todos los materiales') {
      const mat = selectedMaterial.toLowerCase();
      list = list.filter(p => p.material?.toLowerCase().includes(mat) || p.description?.toLowerCase().includes(mat) || p.features.some(f => f.toLowerCase().includes(mat)));
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || (p.material && p.material.toLowerCase().includes(q)));
    }
    if (onlyInStock) list = list.filter(p => p.inStock);
    switch (sortBy) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating': list.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'newest': list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    }
    return list;
  }, [activeCategory, selectedMaterial, searchQuery, sortBy, onlyInStock, showWishlistOnly, wishlist]);

  const handleOpenQuickView = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentProductName(product.name);
    setQuickViewProduct(product);
    setSelectedQuickSize(product.sizes?.[0] || '');
    setSelectedQuickColor(product.colors?.[0]?.name || '');
    setAddedMessage(false);
  };

  const handleQuickAddToCart = () => {
    if (!quickViewProduct || !onAddToCart) return;
    onAddToCart({ ...quickViewProduct, selectedSize: selectedQuickSize, selectedColor: selectedQuickColor });
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const getCategoryIcon = (cat: string) => {
    const found = categories.find(c => c.name === cat);
    return found?.emoji || '🎀';
  };

  return (
    <section id="products" className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-[#FCE7F3] via-[#FFF5F8] to-[#FCE7F3]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center text-center mb-10 space-y-3">
          <span className="font-label text-[10px] uppercase tracking-[0.12em] text-[#1A1A1A] bg-[#FFD6E8] px-4 py-1.5 rounded-full border border-[#FFD6E8] shadow-sm flex items-center gap-1.5"><span>🎀</span><span>CATALOGO</span></span>
          <h2 className="text-4xl md:text-6xl font-title font-extrabold text-[#1A1A1A] tracking-tight">Blusas, Tops, Jeans & Mas</h2>
          <p className="max-w-xl text-sm md:text-base text-[#6B5A60] font-normal leading-relaxed">Descubre nuestra coleccion con las mejores prendas para tu estilo unico.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 border-b border-dashed border-[#FFD6E8] pb-6">
          <button onClick={() => { setActiveCategory(''); setShowWishlistOnly(false); }} className={`px-5 py-2.5 rounded-full font-label text-[10px] uppercase tracking-[0.12em] transition-all duration-300 border flex items-center gap-1.5 ${!activeCategory && !showWishlistOnly ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md scale-105' : 'bg-white/90 text-[#6B5A60] hover:bg-white hover:text-[#1A1A1A] border-[#FFD6E8]'}`}>
            <span>Todas</span>
          </button>
          {categories.map(cat => (
            <button key={cat.name} onClick={() => { setActiveCategory(cat.name); setShowWishlistOnly(false); }} className={`px-5 py-2.5 rounded-full font-label text-[10px] uppercase tracking-[0.12em] transition-all duration-300 border flex items-center gap-1.5 ${activeCategory === cat.name && !showWishlistOnly ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md scale-105' : 'bg-white/90 text-[#6B5A60] hover:bg-white hover:text-[#1A1A1A] border-[#FFD6E8]'}`}>
              <span>{cat.emoji}</span><span>{cat.name}</span>
            </button>
          ))}
          <button onClick={() => setShowWishlistOnly(!showWishlistOnly)} className={`px-5 py-2.5 rounded-full font-label text-[10px] uppercase tracking-[0.12em] transition-all duration-300 flex items-center gap-2 border ${showWishlistOnly ? 'bg-[#FFD6E8] text-[#1A1A1A] border-[#FFD6E8] shadow-md scale-105' : 'bg-white/90 text-[#6B5A60] hover:bg-white border-[#FFD6E8]'}`}>
            <span>Favoritos</span><span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-white text-[9px] flex items-center justify-center font-bold">{wishlist.length}</span>
          </button>
        </div>

        {/* Search & Utility Bar */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 md:p-5 mb-8 border border-[#FFD6E8] shadow-[0_8px_24px_rgba(255,214,232,0.3)] space-y-3">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="relative w-full lg:max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#C87D8E]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Buscar blusa, top, jean, vestido..." className="w-full pl-11 pr-10 py-2.5 bg-[#FFF5F8] border border-[#FFD6E8] rounded-full text-xs font-normal outline-none focus:border-[#1A1A1A] text-[#1A1A1A] transition-all placeholder-[#6B5A60]" />
              {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B5A60] hover:text-[#1A1A1A]">✕</button>}
            </div>
            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5 w-full lg:w-auto text-xs">
              <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)} className="bg-[#FFF5F8] border border-[#FFD6E8] text-[#1A1A1A] px-3.5 py-2.5 rounded-full font-label text-[10px] outline-none cursor-pointer focus:border-[#1A1A1A]">{materialFilters.map(mat => <option key={mat} value={mat}>{mat}</option>)}</select>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="bg-[#FFF5F8] border border-[#FFD6E8] text-[#1A1A1A] px-3.5 py-2.5 rounded-full font-label text-[10px] outline-none cursor-pointer focus:border-[#1A1A1A]">
                <option value="featured">Destacados</option><option value="price-asc">Precio: Menor a Mayor</option><option value="price-desc">Precio: Mayor a Menor</option><option value="rating">Mejor Valorados</option><option value="newest">Novedades</option>
              </select>
              <label className="flex items-center gap-2 cursor-pointer px-3.5 py-2 bg-[#FFF5F8] rounded-full border border-[#FFD6E8] select-none text-[#6B5A60]">
                <input type="checkbox" checked={onlyInStock} onChange={(e) => setOnlyInStock(e.target.checked)} className="accent-[#1A1A1A] rounded cursor-pointer w-3.5 h-3.5" />
                <span className="font-label text-[9px] text-[#1A1A1A]">En Stock</span>
              </label>
              <div className="hidden sm:flex items-center gap-1 bg-[#FFF5F8] p-1 rounded-full border border-[#FFD6E8]">
                <button onClick={() => setViewMode('grid-3')} className={`p-1.5 rounded-full transition-colors ${viewMode === 'grid-3' ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-[#6B5A60]'}`}><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h4v18H3V3zm7 0h4v18h-4V3zm7 0h4v18h-4V3z"/></svg></button>
                <button onClick={() => setViewMode('grid-4')} className={`p-1.5 rounded-full transition-colors ${viewMode === 'grid-4' ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-[#6B5A60]'}`}><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2 3h4v18H2V3zm6 0h4v18H8V3zm6 0h4v18h-4V3zm6 0h4v18h-4V3z"/></svg></button>
                <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-[#6B5A60]'}`}><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg></button>
              </div>
            </div>
          </div>
          {(searchQuery || selectedMaterial !== 'Todos los materiales' || showWishlistOnly || onlyInStock) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-dashed border-[#FFD6E8] text-xs text-[#6B5A60]">
              <span className="font-label text-[10px] text-[#1A1A1A]">Filtros:</span>
              {showWishlistOnly && <span className="bg-[#FFD6E8] text-[#1A1A1A] px-3 py-0.5 rounded-full flex items-center gap-1 font-label text-[9px]">Favoritos<button onClick={() => setShowWishlistOnly(false)} className="hover:text-black">✕</button></span>}
              {selectedMaterial !== 'Todos los materiales' && <span className="bg-[#E9D5FF] text-[#1A1A1A] px-3 py-0.5 rounded-full flex items-center gap-1 font-label text-[9px]">Material: {selectedMaterial}<button onClick={() => setSelectedMaterial('Todos los materiales')} className="hover:text-black">✕</button></span>}
              {searchQuery && <span className="bg-[#FFD6A8] text-[#1A1A1A] px-3 py-0.5 rounded-full flex items-center gap-1 font-label text-[9px]">&quot;{searchQuery}&quot;<button onClick={() => setSearchQuery('')} className="hover:text-black">✕</button></span>}
              <button onClick={() => { setSearchQuery(''); setSelectedMaterial('Todos los materiales'); setShowWishlistOnly(false); setOnlyInStock(false); }} className="font-label text-[9px] text-[#C87D8E] underline hover:text-[#1A1A1A] ml-auto">Limpiar todo</button>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mb-6 font-label text-[10px] text-[#6B5A60]">
          <span>Mostrando {processedProducts.length} {processedProducts.length === 1 ? 'articulo' : 'articulos'}</span>
          {showWishlistOnly && <span className="text-[#C87D8E]">Lista de favoritos</span>}
        </div>

        {processedProducts.length === 0 ? (
          <div className="py-20 text-center bg-white/80 rounded-3xl border border-dashed border-[#FFD6E8] space-y-4 max-w-xl mx-auto my-8 p-8">
            <span className="text-4xl">🎀</span><h3 className="text-xl font-title font-bold text-[#1A1A1A]">No encontramos articulos</h3><p className="text-xs text-[#6B5A60]">Intenta cambiar los filtros de busqueda para ver mas opciones.</p>
            <button onClick={() => { setActiveCategory(''); setSearchQuery(''); setSelectedMaterial('Todos los materiales'); setShowWishlistOnly(false); setOnlyInStock(false); }} className="mt-4 px-6 py-3 bg-[#FFD6A8] text-[#1A1A1A] font-title font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#ffc88f] transition-all border border-[#FFD6E8]">Ver Todo el Catalogo</button>
          </div>
        ) : viewMode === 'list' ? (
          <div className="space-y-4">{processedProducts.map(product => (
            <div key={product.id} onClick={() => onProductClick(product)} className="bg-white p-5 rounded-3xl border border-[#FFD6E8] shadow-[0_8px_24px_rgba(255,214,232,0.4)] flex flex-col md:flex-row items-center gap-6 hover:shadow-[0_12px_32px_rgba(255,214,232,0.6)] transition-all cursor-pointer group">
              <div className="w-full md:w-44 aspect-square bg-[#FFF5F8] rounded-2xl overflow-hidden flex-shrink-0 relative border border-[#FFD6E8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}<img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {product.isNew && <span className="absolute top-2 left-2 bg-[#E9D5FF] text-[#1A1A1A] font-label text-[9px] px-2.5 py-0.5 rounded-full border border-[#FFD6E8]">Nuevo</span>}
                {product.isSale && <span className="absolute top-2 left-2 bg-red-500 text-white font-label text-[9px] px-2.5 py-0.5 rounded-full">SALE 🔥</span>}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3"><span className="font-label text-[10px] text-[#C87D8E] bg-[#FFF5F8] px-2.5 py-0.5 rounded-full border border-[#FFD6E8]">{getCategoryIcon(product.category)} {product.category}</span>{product.material && <span className="text-xs text-[#6B5A60]">• {product.material}</span>}</div>
                <h3 className="text-xl font-title font-bold text-[#1A1A1A] group-hover:text-[#C87D8E] transition-colors">{product.name}</h3><p className="text-xs text-[#6B5A60] font-normal leading-relaxed max-w-2xl">{product.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">{product.features.map((feat, idx) => <span key={idx} className="bg-[#FFF5F8] text-[#6B5A60] text-[10px] px-2.5 py-1 rounded-full border border-[#FFD6E8]">{feat}</span>)}</div>
              </div>
              <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-dashed border-[#FFD6E8]">
                <div className="text-right">
                  {product.isSale && product.originalPrice && <span className="text-sm text-[#6B5A60] line-through block">S/ {product.originalPrice.toFixed(2)}</span>}
                  <span className="text-2xl font-title font-extrabold text-[#1A1A1A]">S/ {product.price.toFixed(2)}</span>
                  {product.isSale && product.originalPrice && <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>}
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={(e) => handleOpenQuickView(product, e)} className="px-4 py-2 bg-white text-[#1A1A1A] hover:bg-[#FFF5F8] font-title font-semibold text-xs uppercase tracking-wider rounded-full transition-colors border border-[#FFD6E8]">Vistazo</button>
                  {onAddToCart && <button type="button" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }} className="px-5 py-2 bg-[#FFD6A8] text-[#1A1A1A] hover:bg-[#ffc88f] font-title font-bold text-xs uppercase tracking-wider rounded-full transition-colors border border-[#FFD6E8] flex items-center gap-1"><span>Anadir</span><span>🎀</span></button>}
                </div>
              </div>
            </div>
          ))}</div>
        ) : (
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${viewMode === 'grid-4' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 md:gap-8`}>{processedProducts.map(product => <ProductCard key={product.id} product={product} onClick={onProductClick} onQuickView={handleOpenQuickView} isWishlisted={wishlist.includes(product.id)} onToggleWishlist={toggleWishlist} />)}</div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setQuickViewProduct(null)}>
          <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#FFD6E8] grid grid-cols-1 md:grid-cols-2 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center transition-colors border border-[#FFD6E8] shadow-sm font-bold text-xs">✕</button>
            <div className="aspect-[4/5] bg-[#FFF5F8] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}<img src={quickViewProduct.imageUrl} alt={quickViewProduct.name} className="w-full h-full object-cover" />
              {quickViewProduct.material && <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-label text-[#1A1A1A] border border-[#FFD6E8]">{quickViewProduct.material}</div>}
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="font-label text-[10px] text-[#1A1A1A] bg-[#FFD6E8] px-3 py-1 rounded-full border border-[#FFD6E8]">{getCategoryIcon(quickViewProduct.category)} {quickViewProduct.category}</span>
                  <h3 className="text-2xl font-title font-bold text-[#1A1A1A] mt-2">{quickViewProduct.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    {quickViewProduct.isSale && quickViewProduct.originalPrice && <span className="text-base text-[#6B5A60] line-through">S/ {quickViewProduct.originalPrice.toFixed(2)}</span>}
                    <span className="text-2xl font-title font-extrabold text-[#1A1A1A]">S/ {quickViewProduct.price.toFixed(2)}</span>
                    {quickViewProduct.isSale && quickViewProduct.originalPrice && <span className="text-xs bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full font-bold border border-[#FFD6E8]">-{Math.round((1 - quickViewProduct.price / quickViewProduct.originalPrice) * 100)}%</span>}
                    {quickViewProduct.rating && <span className="text-xs bg-[#E9D5FF] text-[#1A1A1A] px-2.5 py-0.5 rounded-full font-bold border border-[#FFD6E8]">★ {quickViewProduct.rating} ({quickViewProduct.reviewsCount || 12})</span>}
                  </div>
                </div>
                <p className="text-xs text-[#6B5A60] leading-relaxed font-normal">{quickViewProduct.description}</p>
                {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-label text-[10px] text-[#1A1A1A]">Color: <span className="font-normal text-[#6B5A60]">{selectedQuickColor || quickViewProduct.colors[0].name}</span></span>
                    <div className="flex items-center gap-2">{quickViewProduct.colors.map((c, i) => (
                      <button key={i} onClick={() => setSelectedQuickColor(c.name)} className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${selectedQuickColor === c.name ? 'border-[#1A1A1A] scale-110' : 'border-[#FFD6E8]'}`} title={c.name}><span className="block w-full h-full rounded-full shadow-inner" style={{ backgroundColor: c.hex }} /></button>
                    ))}</div>
                  </div>
                )}
                {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-label text-[10px] text-[#1A1A1A]">Talla: <span className="font-normal text-[#C87D8E]">{selectedQuickSize}</span></span>
                    <div className="flex flex-wrap gap-2">{quickViewProduct.sizes.map((sz) => (
                      <button key={sz} onClick={() => setSelectedQuickSize(sz)} className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${selectedQuickSize === sz ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#6B5A60] border-[#FFD6E8] hover:border-[#1A1A1A]'}`}>{sz}</button>
                    ))}</div>
                  </div>
                )}
              </div>
              <div className="space-y-3 pt-4 border-t border-dashed border-[#FFD6E8]">
                {onAddToCart && <button onClick={handleQuickAddToCart} className="w-full py-3.5 bg-[#FFD6A8] text-[#1A1A1A] rounded-full font-title font-bold text-xs uppercase tracking-wider hover:bg-[#ffc88f] transition-all shadow-md border border-[#FFD6E8] flex items-center justify-center gap-2"><span>Anadir a la Bolsa — S/ {quickViewProduct.price.toFixed(2)}</span><span>🎀</span></button>}
                {addedMessage && <p className="text-xs text-center text-[#1A1A1A] font-medium bg-[#E9D5FF] py-2 rounded-full border border-[#FFD6E8] animate-bounce">✓ Anadido con exito! 🎀</p>}
                <a
                  href={`https://wa.me/51907824320?text=${encodeURIComponent(`Hola, me interesa saber más sobre ESTA prenda: ${quickViewProduct.name}, ¿me brindan información por favor? 🎀`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white rounded-full font-title font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>Pedir por WhatsApp</span>
                </a>
                <button onClick={() => { const prod = quickViewProduct; setQuickViewProduct(null); onProductClick(prod); }} className="w-full py-2 text-xs text-[#C87D8E] hover:text-[#1A1A1A] font-title font-semibold text-center block">Ver Ficha Completa del Producto →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
