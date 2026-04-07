import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, MapPin, Heart, Share2, Camera, Instagram, Facebook, Globe, MessageCircle, Phone, Mail, Calendar, Check, ArrowRight, User, Clock, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const PORTFOLIO = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1594553939348-c00268f4984c?auto=format&fit=crop&q=80&w=800',
];

const REVIEWS = [
  {
    id: 1,
    user: 'Mariana & Pedro',
    date: '15 de Janeiro, 2026',
    rating: 5,
    comment: 'O Studio Lumière superou todas as nossas expectativas. As fotos ficaram maravilhosas e o atendimento foi impecável do início ao fim. Recomendo de olhos fechados!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 2,
    user: 'Juliana & Ricardo',
    date: '10 de Dezembro, 2025',
    rating: 5,
    comment: 'Profissionais incríveis! Capturaram cada detalhe do nosso casamento com muita sensibilidade. O álbum ficou um sonho.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
];

export const SupplierProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState('portfolio');

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=2000" 
          alt="Supplier Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Destaque</span>
                <div className="flex items-center gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-gold" />)}
                  <span className="text-sm font-bold ml-2 text-white">4.9 (128 avaliações)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">Studio Lumière</h1>
              <div className="flex items-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span>Fotografia de Casamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-all">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Tabs */}
            <div className="border-b border-zinc-100">
              <div className="flex gap-8">
                {['portfolio', 'sobre', 'serviços', 'avaliações'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-4 text-sm font-bold uppercase tracking-widest transition-all relative",
                      activeTab === tab ? "text-gold" : "text-zinc-400 hover:text-zinc-600"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'portfolio' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PORTFOLIO.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                    >
                      <img 
                        src={img} 
                        alt={`Portfolio ${idx}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'sobre' && (
                <div className="space-y-8 text-zinc-600 leading-relaxed">
                  <p className="text-lg text-zinc-900 font-serif italic">"Capturando a essência do amor através de lentes apaixonadas."</p>
                  <p>
                    O Studio Lumière nasceu da paixão por contar histórias. Com mais de 10 anos de experiência no mercado de casamentos de luxo, nossa equipe é especializada em capturar momentos espontâneos e emocionantes, transformando-os em memórias eternas.
                  </p>
                  <p>
                    Nossa abordagem é discreta e artística. Acreditamos que as melhores fotos são aquelas que acontecem naturalmente, sem poses forçadas. Buscamos a luz perfeita, o ângulo ideal e, acima de tudo, a emoção verdadeira.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900">Segurança</h4>
                        <p className="text-sm">Contrato e garantia de entrega.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900">Agilidade</h4>
                        <p className="text-sm">Entrega prévia em 48 horas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'serviços' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Cobertura Completa', desc: 'Making of, cerimônia e festa sem limite de horas.' },
                    { title: 'Ensaio Pré-Wedding', desc: 'Sessão de fotos romântica antes do grande dia.' },
                    { title: 'Álbum de Luxo', desc: 'Impressão em papel fotográfico de alta qualidade.' },
                    { title: 'Drones & Vídeo', desc: 'Imagens aéreas e vídeo cinematográfico em 4K.' },
                    { title: 'Same Day Edit', desc: 'Vídeo editado e exibido durante a festa.' },
                    { title: 'Trash the Dress', desc: 'Ensaio pós-casamento em locações incríveis.' },
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-zinc-100 hover:border-gold transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <h4 className="font-bold text-zinc-900">{service.title}</h4>
                      </div>
                      <p className="text-sm text-zinc-500">{service.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'avaliações' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-5xl font-serif font-bold text-zinc-900">4.9</p>
                        <div className="flex items-center gap-1 my-2">
                          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-gold fill-gold" />)}
                        </div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest">128 avaliações</p>
                      </div>
                      <div className="space-y-2 hidden md:block">
                        {[5, 4, 3, 2, 1].map(s => (
                          <div key={s} className="flex items-center gap-4">
                            <span className="text-xs font-bold w-4">{s}</span>
                            <div className="w-48 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gold" style={{ width: `${s === 5 ? 85 : s === 4 ? 12 : 3}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="px-6 py-3 rounded-xl border border-zinc-200 text-sm font-bold text-zinc-700 hover:border-gold hover:text-gold transition-all">
                      Escrever Avaliação
                    </button>
                  </div>

                  <div className="space-y-12">
                    {REVIEWS.map(review => (
                      <div key={review.id} className="flex gap-6">
                        <img src={review.avatar} alt={review.user} className="w-14 h-14 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-zinc-900">{review.user}</h4>
                              <p className="text-xs text-zinc-400">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-0.5">
                              {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-gold fill-gold" />)}
                            </div>
                          </div>
                          <p className="text-zinc-600 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 sticky top-28">
              <h3 className="font-serif text-2xl mb-6">Solicitar Orçamento</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Seu Nome</label>
                  <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-gold focus:border-gold" placeholder="Ex: Maria Silva" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">E-mail</label>
                  <input type="email" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-gold focus:border-gold" placeholder="maria@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Data do Casamento</label>
                  <div className="relative">
                    <input type="date" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-gold focus:border-gold" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Mensagem</label>
                  <textarea rows={4} className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:ring-gold focus:border-gold" placeholder="Conte um pouco sobre o seu sonho..."></textarea>
                </div>
                <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                  <span>Enviar Mensagem</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-zinc-200 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Redes Sociais</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-gold hover:border-gold transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-gold hover:border-gold transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-gold hover:border-gold transition-all">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
