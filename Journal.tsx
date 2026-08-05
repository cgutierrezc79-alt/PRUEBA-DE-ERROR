/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/coco-rose/types';
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  Gift, 
  Heart, 
  Info, 
  MessageCircle, 
  Minus, 
  Plus, 
  Ruler, 
  ShieldCheck, 
  ShoppingBag, 
  Smartphone, 
  Sparkles, 
  Star, 
  Store, 
  Truck, 
  X 
} from 'lucide-react';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  // Primary Item / Fallback
  const displayItems = items.length > 0 ? items : [{
    id: 'demo-1',
    name: 'Falda Plisada Kawaii Beige',
    tagline: 'Plisado suave • Cintura alta',
    description: 'Falda estilo balletcore plisada con forro interior suave.',
    price: 89,
    category: 'Blusas' as const,
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600&auto=format&fit=crop',
    features: ['Cintura alta', 'Plisado permanente', 'Forro anti-transparencia'],
    selectedSize: 'M',
    selectedColor: 'Beige'
  }];

  // Checkout State
  const [selectedSize, setSelectedSize] = useState<string>(displayItems[0]?.selectedSize || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [shippingMethod, setShippingMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [isGift, setIsGift] = useState<boolean>(false);
  const [couponInput, setCouponInput] = useState<string>('LOLLIPOP10');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'yape' | 'whatsapp'>('card');
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [showSizeModal, setShowSizeModal] = useState<boolean>(false);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  // Form Fields
  const [fullName, setFullName] = useState<string>('Valeria Coquette');
  const [email, setEmail] = useState<string>('vale@email.com');
  const [phone, setPhone] = useState<string>('987 654 321');
  const [address, setAddress] = useState<string>('Jr. Abancay 456, dpto 2B');
  const [reference, setReference] = useState<string>('Frente al parque, puerta rosada');
  const [deliveryNote, setDeliveryNote] = useState<string>('Tocar timbre 2B');
  const [department, setDepartment] = useState<string>('Moquegua');
  const [province, setProvince] = useState<string>('Ilo');
  const [district, setDistrict] = useState<string>('Ilo');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(true);

  // Order Reference Number
  const [orderId] = useState<string>(`OR-${Math.floor(1000 + Math.random() * 9000)}`);

  // Financial Calculations
  const rawSubtotal = displayItems.reduce((sum, item) => sum + item.price, 0) * quantity;
  const discountAmount = isCouponApplied ? rawSubtotal * 0.10 : 0;
  const shippingCost = shippingMethod === 'delivery' ? 12 : 0;
  const giftWrapCost = isGift ? 5 : 0;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shippingCost + giftWrapCost);

  const handleApplyCoupon = () => {
    if (couponInput.trim().toUpperCase() === 'LOLLIPOP10') {
      setIsCouponApplied(true);
    } else if (couponInput.trim().length > 0) {
      setIsCouponApplied(true);
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderCompleted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#2A2A2A] selection:bg-[#FFD6E8]/60 relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FCE7F3] to-[#FFF5F8] pt-24 pb-20 px-4 md:px-8">
      
      {/* background aesthetic elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[80px] left-[6%] w-2 h-2 rounded-full bg-white shadow-sm opacity-60" />
        <div className="absolute top-[220px] right-[8%] w-3 h-3 rounded-full bg-white shadow-sm opacity-40" />
        <div className="absolute top-[520px] left-[3%] w-1.5 h-1.5 rounded-full bg-[#E9D5FF] opacity-60" />
        <div className="absolute top-[860px] right-[5%] w-2 h-2 rounded-full bg-[#FFD6E8] opacity-70" />
      </div>

      <div className="mx-auto max-w-[1120px] relative z-10">

        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 font-body text-[12px] font-semibold text-[#1A1A1A] bg-white px-4 py-2 rounded-full border border-[#FFD6E8] hover:bg-[#FFF5F8] transition-all shadow-sm mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#FF8FAB]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span>Volver al Catálogo</span>
          <span>🎀</span>
        </button>

        {/* Step Indicator Header */}
        <div className="mb-8 flex items-center justify-between bg-white/80 backdrop-blur p-4 md:p-5 rounded-[24px] border border-[#FFD6E8] shadow-[0_4px_16px_rgba(255,214,232,0.4)]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎀</span>
            <div>
              <h1 className="font-title font-bold text-lg md:text-xl text-[#1A1A1A]">Finalizar Compra Shop Store</h1>
              <p className="font-body text-xs text-[#2A2A2A]/60">Proceso de pago coquette seguro • Envíos a todo el Perú</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#FFF5F8] px-3.5 py-1.5 rounded-full border border-[#FFD6E8] text-[11px] font-body font-medium text-[#FF8FAB]">
            <ShieldCheck size={14} />
            <span>Transacción Encriptada</span>
          </div>
        </div>

        {/* ORDER COMPLETED VIEW (Step 3) */}
        {orderCompleted ? (
          <div className="animate-fade-in-up pb-10">
            <div className="bg-white rounded-[32px] border border-[#FFD6E8]/80 shadow-[0_24px_64px_-16px_rgba(255,108,163,0.25)] overflow-hidden text-center relative">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#FFD6E8] via-[#E9D5FF] to-[#FFD6E8]" />
              
              <div className="p-7 md:p-12 pb-8">
                <div className="w-[76px] h-[76px] rounded-full bg-[#FFF5F8] border border-dashed border-[#FFB5D0] grid place-items-center mx-auto relative mb-4">
                  <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#FFD6E8] to-[#FF8FAB] text-white grid place-items-center shadow-[0_8px_20px_-6px_rgba(255,143,171,0.5)]">
                    <Check size={28} strokeWidth={3} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-[#FFD6E8] grid place-items-center text-[10px]">
                    🎀
                  </div>
                </div>

                <h2 className="font-title text-2xl md:text-4xl font-extrabold leading-tight text-[#1A1A1A]">
                  ¡Gracias por tu compra! 🎀
                </h2>

                <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#FFF5F8] border border-[#FFD6E8] text-[12px] font-body font-medium text-[#1A1A1A]">
                  <span>Pedido</span>
                  <span className="font-bold font-title text-[#FF8FAB]">#{orderId}</span>
                  <span className="w-px h-3 bg-[#FFD6E8]" />
                  <span className="opacity-70">{displayItems[0]?.name || 'Prenda'} • Talla {selectedSize}</span>
                </div>

                <p className="font-title text-lg md:text-xl mt-6 font-bold text-[#1A1A1A]">
                  Te queda hermoso, princesa 🎀✨
                </p>

                <p className="font-body text-xs md:text-sm text-[#2A2A2A]/70 mt-2 max-w-[480px] mx-auto leading-relaxed">
                  Te escribiremos por WhatsApp para coordinar los detalles de entrega. Revisa tu correo <strong className="text-[#1A1A1A]">{email}</strong> con la confirmación y guía de cuidado balletcore.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-left max-w-[680px] mx-auto">
                  <div className="flex gap-3 bg-[#FFF5F8] rounded-[20px] p-3.5 border border-[#FFD6E8] shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#FFD6E8] grid place-items-center text-base shrink-0">
                      💬
                    </div>
                    <div>
                      <div className="font-title font-bold text-xs text-[#1A1A1A]">Atención WhatsApp</div>
                      <div className="font-body text-[11px] text-[#2A2A2A]/60 leading-tight mt-0.5">Coordinación directa de envío</div>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-[#FFF5F8] rounded-[20px] p-3.5 border border-[#FFD6E8] shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#FFD6E8] grid place-items-center text-base shrink-0">
                      📦
                    </div>
                    <div>
                      <div className="font-title font-bold text-xs text-[#1A1A1A]">Empaque Kawaii</div>
                      <div className="font-body text-[11px] text-[#2A2A2A]/60 leading-tight mt-0.5">
                        {isGift ? 'Con moño satén + tarjeta especial' : 'Empaque coquette rosado protegido'}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-[#FFF5F8] rounded-[20px] p-3.5 border border-[#FFD6E8] shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#FFD6E8] grid place-items-center text-base shrink-0">
                      🔄
                    </div>
                    <div>
                      <div className="font-title font-bold text-xs text-[#1A1A1A]">Cambios 7 días</div>
                      <div className="font-body text-[11px] text-[#2A2A2A]/60 leading-tight mt-0.5">Garantía por talla con etiqueta</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center items-center">
                  <a 
                    href={`https://wa.me/51987654321?text=Hola%20Shop!%20Mi%20pedido%20es%20${orderId}%20-${encodeURIComponent(displayItems[0]?.name || 'Prenda')}%20Talla%20${selectedSize}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto h-[48px] px-8 rounded-full bg-[#FFD6A8] border border-[#FFD6E8] font-title font-bold text-xs uppercase tracking-wider text-[#1A1A1A] inline-flex items-center justify-center gap-2 hover:bg-[#ffc98f] transition shadow-[0_8px_20px_-8px_rgba(255,214,168,0.7)]"
                  >
                    <MessageCircle size={18} />
                    <span>Continuar por WhatsApp</span>
                  </a>

                  <button 
                    onClick={onBack}
                    className="w-full md:w-auto h-[48px] px-8 rounded-full bg-white border border-dashed border-[#FFB5D0] font-title font-semibold text-xs uppercase tracking-wider text-[#1A1A1A] inline-flex items-center justify-center gap-2 hover:bg-[#FFF5F8] transition"
                  >
                    <span>Volver al Catálogo</span>
                    <span>🎀</span>
                  </button>
                </div>

                <div className="mt-6 font-body text-[11px] text-[#2A2A2A]/50">
                  ¿Dudas adicionales? Atención Lunes a Sábado 10am - 7pm 🎀
                </div>
              </div>

              <div className="bg-[#FFF5F8] border-t border-dashed border-[#FFD6E8] px-6 py-3.5 flex flex-wrap items-center justify-center gap-3 text-[11px] font-body">
                <span className="opacity-60">Compra protegida por</span>
                <span className="font-semibold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FFD6E8] shadow-sm">
                  <ShieldCheck size={12} className="text-[#FF8FAB]" />
                  <span>Shop Safe • Coquette Store</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE CHECKOUT STEPS FORM */
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
            
            {/* LEFT COLUMN: Steps 1 & 2 */}
            <div className="space-y-6">

              {/* STEP 1: Tu Carrito / Prenda Selected */}
              <div className="bg-white rounded-[28px] border border-[#FFD6E8] shadow-[0_8px_24px_rgba(255,214,232,0.4)] p-5 md:p-7 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-dashed border-[#FFD6E8]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white font-title font-bold text-xs grid place-items-center">
                      1
                    </div>
                    <h2 className="font-title font-bold text-base md:text-lg text-[#1A1A1A]">Tu Selección</h2>
                    <span className="text-xs">🎀</span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#FFF5F8] border border-[#FFD6E8] font-body font-medium text-[#1A1A1A]">
                    {displayItems.length} {displayItems.length === 1 ? 'prenda' : 'prendas'}
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {displayItems.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex gap-4 p-3.5 bg-[#FFF5F8]/60 rounded-2xl border border-[#FFD6E8] relative">
                      <div className="w-20 h-24 md:w-24 md:h-28 rounded-xl overflow-hidden bg-[#FFE4EC] border border-[#FFD6E8] shrink-0 relative">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        <span className="absolute top-1 left-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded-full text-[8px] font-bold text-[#1A1A1A] border border-[#FFD6E8]">
                          ♥
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h3 className="font-title font-bold text-sm md:text-base text-[#1A1A1A] leading-snug">{item.name}</h3>
                              <p className="font-body text-[11px] text-[#2A2A2A]/60 mt-0.5">{item.tagline || item.category}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-title font-extrabold text-sm md:text-base text-[#1A1A1A]">S/ {item.price * quantity}.00</span>
                            </div>
                          </div>

                          {/* Selected Tags */}
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-[#FFD6E8] text-[10px] font-bold font-body text-[#1A1A1A]">
                              Talla: {selectedSize}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E9D5FF] border border-[#FFD6E8] text-[10px] font-bold font-body text-[#1A1A1A]">
                              Color: {item.selectedColor || 'Beige'}
                            </span>
                            <button 
                              type="button"
                              onClick={() => setShowSizeModal(true)}
                              className="text-[10px] font-body text-[#C87D8E] hover:underline font-semibold"
                            >
                              Cambiar talla 🎀
                            </button>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-dashed border-[#FFD6E8]/70">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-body uppercase text-[#2A2A2A]/50">Cant:</span>
                            <div className="flex items-center rounded-full border border-[#FFD6E8] bg-white px-2 py-0.5 shadow-sm">
                              <button 
                                type="button" 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-5 h-5 grid place-items-center hover:bg-[#FFF5F8] rounded-full transition"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-6 text-center text-xs font-bold font-title">{quantity}</span>
                              <button 
                                type="button" 
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-5 h-5 grid place-items-center bg-[#1A1A1A] text-white rounded-full hover:bg-black transition"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>

                          <button 
                            type="button"
                            onClick={() => setShowSizeGuide(true)}
                            className="inline-flex items-center gap-1 text-[10px] font-body font-semibold text-[#FF8FAB] bg-white px-2.5 py-1 rounded-full border border-[#FFD6E8] hover:bg-[#FFF5F8] transition"
                          >
                            <Ruler size={12} />
                            <span>Guía de tallas</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 2: Datos de Contacto y Envío */}
              <form onSubmit={handleCompleteOrder} className="space-y-6">
                <div className="bg-white rounded-[28px] border border-[#FFD6E8] shadow-[0_8px_24px_rgba(255,214,232,0.4)] p-5 md:p-7 space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-dashed border-[#FFD6E8]">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white font-title font-bold text-xs grid place-items-center">
                      2
                    </div>
                    <h2 className="font-title font-bold text-base md:text-lg text-[#1A1A1A]">Información de Entrega</h2>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3">
                    <h3 className="font-title font-bold text-xs uppercase tracking-wider text-[#1A1A1A]">1. Datos de Contacto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Nombre Completo</label>
                        <input 
                          type="text" 
                          required
                          value={fullName} 
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Valeria Coquette"
                          className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-4 text-xs font-body bg-[#FFF5F8] outline-none focus:border-[#1A1A1A] transition text-[#1A1A1A]"
                        />
                      </div>
                      <div>
                        <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Email</label>
                        <input 
                          type="email" 
                          required
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="vale@email.com"
                          className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-4 text-xs font-body bg-[#FFF5F8] outline-none focus:border-[#1A1A1A] transition text-[#1A1A1A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Celular / WhatsApp</label>
                      <div className="mt-1 flex gap-2">
                        <div className="h-[42px] px-3.5 rounded-full bg-[#FFF5F8] border border-[#FFD6E8] flex items-center gap-1.5 text-xs font-body font-bold text-[#1A1A1A]">
                          🇵🇪 +51
                        </div>
                        <input 
                          type="tel" 
                          required
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="987 654 321"
                          className="flex-1 h-[42px] rounded-full border border-[#FFD6E8] px-4 text-xs font-body bg-[#FFF5F8] outline-none focus:border-[#1A1A1A] transition text-[#1A1A1A]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-title font-bold text-xs uppercase tracking-wider text-[#1A1A1A]">2. Método de Entrega</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button 
                        type="button"
                        onClick={() => setShippingMethod('delivery')}
                        className={`text-left rounded-2xl border p-3.5 flex gap-3 transition relative overflow-hidden ${
                          shippingMethod === 'delivery'
                            ? 'bg-[#FFF5F8] border-[#FFB5D0] ring-2 ring-[#FFD6E8]'
                            : 'bg-white border-[#FFD6E8] hover:border-[#FFB5D0]'
                        }`}
                      >
                        <div className={`mt-0.5 w-4 h-4 rounded-full border-2 grid place-items-center shrink-0 ${
                          shippingMethod === 'delivery' ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' : 'border-[#FFD6E8]'
                        }`}>
                          {shippingMethod === 'delivery' && <Check size={10} />}
                        </div>
                        <div>
                          <div className="font-title font-bold text-xs text-[#1A1A1A] flex items-center gap-1.5">
                            <Truck size={14} className="text-[#FF8FAB]" />
                            <span>Delivery a Domicilio</span>
                          </div>
                          <div className="font-body text-[11px] text-[#2A2A2A]/60 mt-0.5">24-48h Lima y Provincias</div>
                          <div className="mt-1.5 inline-block px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-white text-[10px] font-bold font-body">
                            + S/ 12.00
                          </div>
                        </div>
                      </button>

                      <button 
                        type="button"
                        onClick={() => setShippingMethod('pickup')}
                        className={`text-left rounded-2xl border p-3.5 flex gap-3 transition relative overflow-hidden ${
                          shippingMethod === 'pickup'
                            ? 'bg-[#F5F0FF] border-[#E9D5FF] ring-2 ring-[#E9D5FF]'
                            : 'bg-white border-[#FFD6E8] hover:border-[#E9D5FF]'
                        }`}
                      >
                        <div className={`mt-0.5 w-4 h-4 rounded-full border-2 grid place-items-center shrink-0 ${
                          shippingMethod === 'pickup' ? 'border-[#6B21A8] bg-[#6B21A8] text-white' : 'border-[#FFD6E8]'
                        }`}>
                          {shippingMethod === 'pickup' && <Check size={10} />}
                        </div>
                        <div>
                          <div className="font-title font-bold text-xs text-[#1A1A1A] flex items-center gap-1.5">
                            <Store size={14} className="text-[#C4B5FD]" />
                            <span>Recojo en Tienda</span>
                          </div>
                          <div className="font-body text-[11px] text-[#2A2A2A]/60 mt-0.5">Ilo - Calle Moquegua 123</div>
                          <div className="mt-1.5 inline-block px-2.5 py-0.5 rounded-full bg-[#E9D5FF] text-[#6B21A8] text-[10px] font-bold font-body">
                            Gratis 🎀
                          </div>
                        </div>
                      </button>
                    </div>

                    {shippingMethod === 'delivery' && (
                      <div className="space-y-3 pt-2 animate-fade-in-up">
                        <div>
                          <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Dirección</label>
                          <input 
                            type="text" 
                            required={shippingMethod === 'delivery'}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Jr. Abancay 456, dpto 2B"
                            className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-4 text-xs font-body bg-[#FFF5F8] outline-none focus:border-[#1A1A1A] transition text-[#1A1A1A]"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Referencia (opcional)</label>
                            <input 
                              type="text" 
                              value={reference}
                              onChange={(e) => setReference(e.target.value)}
                              placeholder="Frente al parque, puerta rosada"
                              className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-4 text-xs font-body bg-[#FFF5F8] outline-none focus:border-[#1A1A1A] transition text-[#1A1A1A]"
                            />
                          </div>
                          <div>
                            <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Nota de Entrega</label>
                            <input 
                              type="text" 
                              value={deliveryNote}
                              onChange={(e) => setDeliveryNote(e.target.value)}
                              placeholder="Tocar timbre o dejar con portero"
                              className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-4 text-xs font-body bg-[#FFF5F8] outline-none focus:border-[#1A1A1A] transition text-[#1A1A1A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Dep.</label>
                            <select 
                              value={department} 
                              onChange={(e) => setDepartment(e.target.value)}
                              className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-3 text-xs font-body bg-[#FFF5F8] outline-none text-[#1A1A1A]"
                            >
                              <option value="Moquegua">Moquegua</option>
                              <option value="Lima">Lima</option>
                              <option value="Arequipa">Arequipa</option>
                              <option value="Tacna">Tacna</option>
                            </select>
                          </div>
                          <div>
                            <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Prov.</label>
                            <select 
                              value={province} 
                              onChange={(e) => setProvince(e.target.value)}
                              className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-3 text-xs font-body bg-[#FFF5F8] outline-none text-[#1A1A1A]"
                            >
                              <option value="Ilo">Ilo</option>
                              <option value="Mariscal Nieto">Mariscal Nieto</option>
                              <option value="Lima">Lima</option>
                            </select>
                          </div>
                          <div>
                            <label className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#2A2A2A]/60">Dist.</label>
                            <select 
                              value={district} 
                              onChange={(e) => setDistrict(e.target.value)}
                              className="mt-1 w-full h-[42px] rounded-full border border-[#FFD6E8] px-3 text-xs font-body bg-[#FFF5F8] outline-none text-[#1A1A1A]"
                            >
                              <option value="Ilo">Ilo</option>
                              <option value="Pacocha">Pacocha</option>
                              <option value="El Algarrobal">El Algarrobal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Gift Wrap Toggle */}
                  <div className={`rounded-2xl border p-3.5 flex gap-3 transition ${
                    isGift ? 'bg-[#FFF0F6] border-[#FFB5D0] ring-2 ring-[#FFD6E8]' : 'bg-[#FFF5F8]/40 border-dashed border-[#FFD6E8]'
                  }`}>
                    <button 
                      type="button"
                      onClick={() => setIsGift(!isGift)}
                      className={`mt-0.5 w-5 h-5 rounded-full border-2 grid place-items-center shrink-0 transition ${
                        isGift ? 'bg-[#FF8FAB] border-[#FF8FAB] text-white' : 'border-[#FFD6E8] bg-white'
                      }`}
                    >
                      {isGift && <Check size={12} />}
                    </button>
                    <div>
                      <div className="font-title font-bold text-xs text-[#1A1A1A] flex items-center gap-1.5">
                        <Gift size={14} className="text-[#FF8FAB]" />
                        <span>Empaque para regalo coquette (+ S/ 5.00)</span>
                      </div>
                      <p className="font-body text-[11px] text-[#2A2A2A]/60 mt-0.5">
                        Incluye caja especial con moño satén rosa, tarjeta personalizada con mensaje manuscrito y stickers Y2K 🎀
                      </p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-title font-bold text-xs uppercase tracking-wider text-[#1A1A1A]">3. Método de Pago</h3>
                    <div className="space-y-2.5">
                      <button 
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`w-full text-left rounded-2xl border p-3.5 flex items-center justify-between transition ${
                          paymentMethod === 'card' ? 'bg-[#FFF5F8] border-[#FFB5D0] ring-2 ring-[#FFD6E8]' : 'bg-white border-[#FFD6E8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-[#FFD6E8] grid place-items-center shrink-0">
                            <CreditCard size={16} className="text-[#1A1A1A]" />
                          </div>
                          <div>
                            <div className="font-title font-bold text-xs text-[#1A1A1A]">Tarjeta Crédito / Débito</div>
                            <div className="font-body text-[10px] text-[#2A2A2A]/60">MercadoPago • Pago seguro instantáneo</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-body font-semibold px-2 py-0.5 rounded-full bg-[#E9D5FF] text-[#6B21A8]">
                          Recomendado
                        </span>
                      </button>

                      <button 
                        type="button"
                        onClick={() => setPaymentMethod('yape')}
                        className={`w-full text-left rounded-2xl border p-3.5 flex items-center justify-between transition ${
                          paymentMethod === 'yape' ? 'bg-[#FFF5F8] border-[#FFB5D0] ring-2 ring-[#FFD6E8]' : 'bg-white border-[#FFD6E8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-[#FFD6E8] grid place-items-center shrink-0">
                            <Smartphone size={16} className="text-[#FF8FAB]" />
                          </div>
                          <div>
                            <div className="font-title font-bold text-xs text-[#1A1A1A]">Yape / Plin</div>
                            <div className="font-body text-[10px] text-[#2A2A2A]/60">Te enviamos el QR para escanear</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-body font-semibold px-2 py-0.5 rounded-full bg-[#FFF5F8] border border-[#FFD6E8]">
                          Rápido
                        </span>
                      </button>

                      <button 
                        type="button"
                        onClick={() => setPaymentMethod('whatsapp')}
                        className={`w-full text-left rounded-2xl border p-3.5 flex items-center justify-between transition ${
                          paymentMethod === 'whatsapp' ? 'bg-[#FFF5F8] border-[#FFB5D0] ring-2 ring-[#FFD6E8]' : 'bg-white border-[#FFD6E8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-[#FFD6E8] grid place-items-center shrink-0">
                            <MessageCircle size={16} className="text-[#6B21A8]" />
                          </div>
                          <div>
                            <div className="font-title font-bold text-xs text-[#1A1A1A]">Pago por WhatsApp</div>
                            <div className="font-body text-[10px] text-[#2A2A2A]/60">Coordinación personalizada con asesora</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-body font-semibold px-2 py-0.5 rounded-full bg-white border border-[#FFD6E8]">
                          Chat
                        </span>
                      </button>
                    </div>

                    <label className="flex items-start gap-2.5 pt-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        required
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-0.5 accent-[#1A1A1A]" 
                      />
                      <span className="font-body text-[11px] leading-snug text-[#2A2A2A]/70">
                        Acepto la <strong className="text-[#1A1A1A]">política de cambios coquette</strong>: 7 días para cambios por talla con prenda en estado original con etiqueta.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <button 
                  type="submit"
                  className="w-full h-[52px] rounded-full font-title font-bold text-xs uppercase tracking-wider bg-[#FFD6A8] text-[#1A1A1A] border border-[#FFD6E8] shadow-[0_8px_20px_-8px_rgba(255,214,168,0.7)] hover:bg-[#ffc98f] transition flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} />
                  <span>Confirmar y Pagar S/ {grandTotal.toFixed(2)}</span>
                  <span>🎀</span>
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: Order Summary & Promo Card */}
            <div className="space-y-4 lg:sticky lg:top-[96px]">
              
              {/* Order Summary Box */}
              <div className="bg-white rounded-[28px] border border-[#FFD6E8] shadow-[0_8px_24px_rgba(255,214,232,0.4)] p-5 md:p-6 space-y-4">
                <h3 className="font-title font-bold text-base text-[#1A1A1A] pb-3 border-b border-dashed border-[#FFD6E8] flex items-center justify-between">
                  <span>Resumen de Orden</span>
                  <span className="text-xs">🎀</span>
                </h3>

                {/* Applied Item Preview */}
                <div className="space-y-3 pb-3 border-b border-dashed border-[#FFD6E8]">
                  {displayItems.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="w-12 h-14 rounded-xl overflow-hidden bg-[#FFE4EC] border border-[#FFD6E8] shrink-0">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-title font-bold text-xs text-[#1A1A1A] truncate">{item.name}</h4>
                        <p className="font-body text-[10px] text-[#2A2A2A]/60">Talla: {selectedSize} • Cant: {quantity}</p>
                      </div>
                      <span className="font-title font-bold text-xs text-[#1A1A1A]">S/ {item.price * quantity}.00</span>
                    </div>
                  ))}
                </div>

                {/* Coupon Code Section */}
                <div className="space-y-2 pt-1">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Sparkles size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF8FAB]" />
                      <input 
                        type="text" 
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                        placeholder="Cupón coquette"
                        className="w-full h-[38px] pl-9 pr-3 rounded-full border border-[#FFD6E8] text-xs font-body font-medium bg-[#FFF5F8] outline-none text-[#1A1A1A]"
                      />
                    </div>
                    <button 
                      type="button"
                      onClick={handleApplyCoupon}
                      className="h-[38px] px-4 rounded-full bg-[#1A1A1A] text-white text-[11px] font-title font-bold hover:bg-black transition"
                    >
                      Aplicar
                    </button>
                  </div>

                  {isCouponApplied && (
                    <div className="flex items-center gap-1.5 text-[10px] font-body font-semibold text-[#9D174D] bg-[#FFF0F6] border border-[#FFD6E8] rounded-full px-3 py-1">
                      <Check size={12} className="text-[#FF8FAB]" />
                      <span>Cupón LOLLIPOP10 aplicado (-10%) 🎀</span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-xs font-body pt-2 border-t border-dashed border-[#FFD6E8]">
                  <div className="flex justify-between text-[#2A2A2A]/70">
                    <span>Subtotal ({quantity} {quantity === 1 ? 'item' : 'items'})</span>
                    <span className="font-bold text-[#1A1A1A]">S/ {rawSubtotal}.00</span>
                  </div>

                  {isCouponApplied && (
                    <div className="flex justify-between text-[#9D174D] font-medium">
                      <span>Descuento Cupón</span>
                      <span className="font-bold">- S/ {discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#2A2A2A]/70">
                    <span>Envío ({shippingMethod === 'delivery' ? 'Delivery' : 'Recojo'})</span>
                    <span className="font-bold text-[#1A1A1A]">
                      {shippingCost === 0 ? 'Gratis 🎀' : `S/ ${shippingCost}.00`}
                    </span>
                  </div>

                  {isGift && (
                    <div className="flex justify-between text-[#2A2A2A]/70">
                      <span>Empaque Regalo Balletcore</span>
                      <span className="font-bold text-[#1A1A1A]">S/ {giftWrapCost}.00</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="pt-3 border-t border-dashed border-[#FFD6E8] flex items-center justify-between">
                  <div>
                    <span className="font-title font-bold text-base text-[#1A1A1A]">Total Final</span>
                    <div className="font-body text-[10px] text-[#2A2A2A]/50">Incluye impuestos y garantía coquette</div>
                  </div>
                  <span className="font-title font-extrabold text-xl text-[#1A1A1A]">S/ {grandTotal.toFixed(2)}</span>
                </div>

                {/* Safety Badge */}
                <div className="pt-2 text-center text-[10px] font-body text-[#2A2A2A]/60 flex items-center justify-center gap-1.5 bg-[#FFF5F8] p-2.5 rounded-2xl border border-[#FFD6E8]">
                  <ShieldCheck size={14} className="text-[#FF8FAB]" />
                  <span>Compra 100% protegida • Cambios por talla 7 días</span>
                </div>
              </div>

              {/* Assistance Card */}
              <div className="bg-white rounded-[24px] border border-dashed border-[#FFB5D0] p-4 flex gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#FFF5F8] border border-[#FFD6E8] grid place-items-center text-sm shrink-0">
                  💌
                </div>
                <div className="font-body text-[11px] leading-relaxed text-[#2A2A2A]/70">
                  <strong className="font-title text-[#1A1A1A] block">¿Preguntas sobre la talla o tu orden?</strong>
                  Escríbenos por WhatsApp y te ayudamos con fotos reales del fit en vivo 🎀
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* SIZE GUIDE MODAL */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/30 backdrop-blur-sm animate-fade-in-up">
          <div className="relative bg-white w-full max-w-[440px] rounded-[28px] border border-[#FFD6E8] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-dashed border-[#FFD6E8]">
              <div className="flex items-center gap-2">
                <Ruler size={16} className="text-[#FF8FAB]" />
                <h4 className="font-title font-bold text-base text-[#1A1A1A]">Guía de Tallas Coquette 🎀</h4>
              </div>
              <button 
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="w-7 h-7 rounded-full bg-[#FFF5F8] border border-[#FFD6E8] grid place-items-center hover:bg-[#FFD6E8] transition"
              >
                <X size={14} />
              </button>
            </div>

            <div className="bg-[#FFF5F8] p-3 rounded-2xl border border-[#FFD6E8] text-[11px] font-body text-[#2A2A2A]/70 flex items-start gap-2">
              <Info size={14} className="text-[#FF8FAB] shrink-0 mt-0.5" />
              <span>Mide tu cintura a la altura del ombligo. Si estás entre dos tallas, te recomendamos elegir la mayor para un fit holgado y cómodo.</span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#FFD6E8]">
              <table className="w-full text-xs text-left font-body">
                <thead className="bg-[#FFF5F8] text-[10px] uppercase font-semibold text-[#2A2A2A]/60">
                  <tr>
                    <th className="p-2.5">Talla</th>
                    <th className="p-2.5">Cintura</th>
                    <th className="p-2.5">Cadera</th>
                    <th className="p-2.5">Largo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FFD6E8]">
                  {[
                    ['XS', '60-62 cm', '86-88 cm', '42 cm'],
                    ['S', '64-66 cm', '90-92 cm', '43 cm'],
                    ['M', '68-72 cm', '94-98 cm', '44 cm'],
                    ['L', '74-78 cm', '100-104 cm', '45 cm'],
                  ].map(([sz, waist, hip, len]) => (
                    <tr key={sz} className={sz === selectedSize ? 'bg-[#FFF0F6] font-bold text-[#1A1A1A]' : 'bg-white'}>
                      <td className="p-2.5 font-title font-bold">{sz}</td>
                      <td className="p-2.5">{waist}</td>
                      <td className="p-2.5">{hip}</td>
                      <td className="p-2.5">{len}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button 
              type="button"
              onClick={() => setShowSizeGuide(false)}
              className="w-full h-[42px] rounded-full bg-[#1A1A1A] text-white font-title font-bold text-xs uppercase tracking-wider hover:bg-black transition"
            >
              Entendido 🎀
            </button>
          </div>
        </div>
      )}

      {/* CHANGE SIZE MODAL */}
      {showSizeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/30 backdrop-blur-sm animate-fade-in-up">
          <div className="relative bg-white w-full max-w-[400px] rounded-[28px] border border-[#FFD6E8] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-dashed border-[#FFD6E8]">
              <h4 className="font-title font-bold text-base text-[#1A1A1A]">Selecciona tu Talla 🎀</h4>
              <button 
                type="button"
                onClick={() => setShowSizeModal(false)}
                className="w-7 h-7 rounded-full bg-[#FFF5F8] border border-[#FFD6E8] grid place-items-center hover:bg-[#FFD6E8] transition"
              >
                <X size={14} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {['XS', 'S', 'M', 'L'].map((sizeOption) => (
                <button 
                  key={sizeOption}
                  type="button"
                  onClick={() => setSelectedSize(sizeOption)}
                  className={`h-[46px] rounded-2xl border font-title font-bold text-sm transition ${
                    selectedSize === sizeOption 
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md' 
                      : 'bg-white border-[#FFD6E8] hover:border-[#FFB5D0] text-[#1A1A1A]'
                  }`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>

            <button 
              type="button"
              onClick={() => setShowSizeModal(false)}
              className="w-full h-[46px] rounded-full bg-[#FFD6A8] text-[#1A1A1A] font-title font-bold text-xs uppercase tracking-wider border border-[#FFD6E8] hover:bg-[#ffc98f] transition shadow-sm"
            >
              Confirmar Talla {selectedSize} 🎀
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Checkout;
