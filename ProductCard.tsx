"use client";

import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/lib/coco-rose/types';

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bienvenido a Aura. Estoy aqui para ayudarte a elegir prendas y objetos con alma tactil que resuenen con tu estilo. ¿En que puedo ayudarte?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);
    try {
      const res = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: inputValue, sessionId: 'default' }) });
      const data = await res.json();
      if (data.response) setMessages(prev => [...prev, { role: 'model', text: data.response, timestamp: Date.now() }]);
      else setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, no pude procesar tu consulta. Intenta de nuevo.', timestamp: Date.now() }]);
    } catch { setMessages(prev => [...prev, { role: 'model', text: 'Error de conexion. Intenta de nuevo.', timestamp: Date.now() }]); }
    finally { setIsThinking(false); }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#FDF2F4] rounded-2xl shadow-2xl shadow-[#2D2124]/10 w-[90vw] sm:w-[380px] h-[550px] mb-6 flex flex-col overflow-hidden border border-[#EACED3] animate-slide-up-fade">
          <div className="bg-[#F8E7EA] p-5 border-b border-[#EACED3] flex justify-between items-center">
            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-[#C87D8E] rounded-full animate-pulse"></div><span className="font-serif italic text-[#2D2124] text-lg font-medium">Asistente Aura</span></div>
            <button onClick={() => setIsOpen(false)} className="text-[#A48990] hover:text-[#2D2124] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FDF2F4]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#2D2124] text-[#FDF2F4]' : 'bg-white border border-[#EACED3] text-[#695459] shadow-sm'}`}>{msg.text}</div>
              </div>
            ))}
            {isThinking && (<div className="flex justify-start"><div className="bg-white border border-[#EACED3] p-4 rounded-xl flex gap-1.5 items-center shadow-sm"><div className="w-1.5 h-1.5 bg-[#C87D8E] rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-[#C87D8E] rounded-full animate-bounce delay-75"></div><div className="w-1.5 h-1.5 bg-[#C87D8E] rounded-full animate-bounce delay-150"></div></div></div>)}
          </div>
          <div className="p-4 bg-[#F8E7EA] border-t border-[#EACED3]">
            <div className="flex gap-2 relative">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} placeholder="Escribe tu consulta..." className="flex-1 bg-white border border-[#EACED3] focus:border-[#C87D8E] rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-[#A48990] text-[#2D2124]" />
              <button onClick={handleSend} disabled={!inputValue.trim() || isThinking} className="bg-[#2D2124] text-[#FDF2F4] px-4 rounded-xl hover:bg-[#453035] transition-colors disabled:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-[#2D2124] text-[#FDF2F4] w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-105 transition-all duration-500 z-50 border border-[#EACED3]/40">
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg> : <span className="font-serif italic text-lg">Ai</span>}
      </button>
    </div>
  );
}