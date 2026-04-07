import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Camera, Music, Utensils, Scissors, Cake, Heart, Star, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const CATEGORIES = [
  { icon: Camera, name: 'Fotografia', count: 1240 },
  { icon: Utensils, name: 'Buffet', count: 850 },
  { icon: Scissors, name: 'Vestidos', count: 620 },
  { icon: Music, name: 'Música', count: 430 },
  { icon: Cake, name: 'Bolos', count: 310 },
  { icon: Heart, name: 'Decoração', count: 980 },
];

const PLANS = [
  {
    name: 'Básico',
    price: 'Grátis',
    description: 'Para quem está começando a divulgar seus serviços.',
    features: ['Perfil básico', 'Até 5 fotos no portfólio', 'Receba mensagens diretas', 'Listagem em 1 categoria'],
    buttonText: 'Começar Agora',
    highlight: false,
  },
  {
    name: 'Premium',
    price: 'R$ 149,90',
    period: '/mês',
    description: 'Aumente sua visibilidade e conquiste mais noivas.',
    features: ['Destaque nas buscas', 'Fotos ilimitadas', 'Vídeos no perfil', 'Link para redes sociais', 'Relatórios mensais', 'Listagem em 3 categorias'],
    buttonText: 'Assinar Premium',
    highlight: true,
  },
  {
    name: 'Elite',
    price: 'R$ 299,90',
    period: '/mês',
    description: 'Para os melhores fornecedores do mercado de luxo.',
    features: ['Topo das buscas', 'Selo de Verificação Elite', 'Suporte prioritário', 'Consultoria de marketing', 'Destaque no blog e redes sociais', 'Categorias ilimitadas'],
    buttonText: 'Seja Elite',
    highlight: false,
  },
];

export const LandingPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
            alt="Wedding Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-sm mb-4 block">O seu grande dia começa aqui</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Encontre os melhores fornecedores para o seu casamento
            </h1>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-zinc-100">
                <Search className="w-5 h-5 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="O que você procura? (ex: Fotógrafo)" 
                  className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <MapPin className="w-5 h-5 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Onde? (ex: São Paulo, SP)" 
                  className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <Link to="/search" className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                <span>Buscar</span>
                <Search className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Explore por Categorias</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Tudo o que você precisa para planejar o seu casamento em um só lugar.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl border border-zinc-100 text-center hover:border-gold hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-lg mb-1">{cat.name}</h3>
                <span className="text-xs text-zinc-400 uppercase tracking-wider">{cat.count} Fornecedores</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" 
                alt="Wedding Planning" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">Fornecedor Verificado</p>
                    <p className="text-sm text-zinc-500">Qualidade garantida</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-serif leading-tight">Como a Vitrine Noivas ajuda você a planejar o seu sonho</h2>
              <div className="space-y-6">
                {[
                  { title: 'Busque e Filtre', desc: 'Encontre fornecedores por categoria, localização e faixa de preço.' },
                  { title: 'Analise Portfólios', desc: 'Veja fotos, vídeos e avaliações reais de outros casais.' },
                  { title: 'Solicite Orçamentos', desc: 'Fale diretamente com os fornecedores e receba propostas personalizadas.' },
                  { title: 'Contrate com Segurança', desc: 'Escolha os melhores profissionais para o seu grande dia.' },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/search" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-zinc-800 transition-all">
                <span>Explorar Fornecedores</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Planos para Fornecedores</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Escolha o plano ideal para destacar o seu trabalho e conquistar mais clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-10 rounded-3xl border transition-all",
                  plan.highlight 
                    ? "bg-white text-zinc-900 border-gold scale-105 shadow-2xl z-10" 
                    : "bg-zinc-900 text-white border-zinc-800 hover:border-zinc-700"
                )}
              >
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-sm opacity-60">{plan.period}</span>}
                </div>
                <p className={cn("text-sm mb-8", plan.highlight ? "text-zinc-500" : "text-zinc-400")}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className={cn("w-4 h-4", plan.highlight ? "text-gold" : "text-gold")} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/login"
                  className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all text-center block",
                    plan.highlight 
                      ? "bg-gold text-white hover:bg-gold-dark" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
