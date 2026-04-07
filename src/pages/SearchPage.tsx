import React from 'react';
import { Search, MapPin, Filter, Star, Heart, Camera, Music, Utensils, Scissors, Cake, ChevronDown, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const SUPPLIERS = [
  {
    id: 1,
    name: 'Studio Lumière',
    category: 'Fotografia',
    location: 'São Paulo, SP',
    rating: 4.9,
    reviews: 128,
    price: '$$$',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    name: 'Buffet Elegance',
    category: 'Buffet',
    location: 'Rio de Janeiro, RJ',
    rating: 4.8,
    reviews: 95,
    price: '$$$$',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 3,
    name: 'Atelier das Noivas',
    category: 'Vestidos',
    location: 'Curitiba, PR',
    rating: 5.0,
    reviews: 64,
    price: '$$$',
    image: 'https://images.unsplash.com/photo-1594553939348-c00268f4984c?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 4,
    name: 'Harmonia Musical',
    category: 'Música',
    location: 'Belo Horizonte, MG',
    rating: 4.7,
    reviews: 42,
    price: '$$',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 5,
    name: 'Doce Encanto',
    category: 'Bolos & Doces',
    location: 'Porto Alegre, RS',
    rating: 4.9,
    reviews: 87,
    price: '$$',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    id: 6,
    name: 'Requinte Decorações',
    category: 'Decoração',
    location: 'Brasília, DF',
    rating: 4.8,
    reviews: 112,
    price: '$$$$',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
];

export const SearchPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-zinc-50">
      {/* Search Header */}
      <div className="bg-white border-b border-zinc-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full bg-zinc-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-zinc-100 focus-within:border-gold transition-all">
              <Search className="w-5 h-5 text-zinc-400" />
              <input 
                type="text" 
                placeholder="O que você procura?" 
                className="w-full bg-transparent border-none focus:ring-0 text-zinc-900"
              />
            </div>
            <div className="flex-1 w-full bg-zinc-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-zinc-100 focus-within:border-gold transition-all">
              <MapPin className="w-5 h-5 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Onde?" 
                className="w-full bg-transparent border-none focus:ring-0 text-zinc-900"
              />
            </div>
            <button className="w-full md:w-auto bg-gold text-white px-8 py-3 rounded-xl font-medium hover:bg-gold-dark transition-all">
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-serif text-xl mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-3 uppercase tracking-wider">Categorias</label>
                  <div className="space-y-2">
                    {['Fotografia', 'Buffet', 'Vestidos', 'Música', 'Bolos', 'Decoração'].map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-gold focus:ring-gold" />
                        <span className="text-sm text-zinc-600 group-hover:text-gold transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-3 uppercase tracking-wider">Preço</label>
                  <div className="flex gap-2">
                    {['$', '$$', '$$$', '$$$$'].map(p => (
                      <button key={p} className="flex-1 py-2 rounded-lg border border-zinc-200 text-sm hover:border-gold hover:text-gold transition-all">
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-3 uppercase tracking-wider">Avaliação</label>
                  <div className="space-y-2">
                    {[5, 4, 3].map(s => (
                      <label key={s} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-gold focus:ring-gold" />
                        <div className="flex items-center gap-1">
                          {[...Array(s)].map((_, i) => <Star key={i} className="w-3 h-3 text-gold fill-gold" />)}
                          <span className="text-xs text-zinc-400 ml-1">ou mais</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Area */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-zinc-500 text-sm">Mostrando <span className="font-bold text-zinc-900">124</span> fornecedores encontrados</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-lg p-1">
                  <button className="p-1.5 rounded bg-zinc-100 text-zinc-900"><Grid className="w-4 h-4" /></button>
                  <button className="p-1.5 rounded text-zinc-400 hover:text-zinc-600"><List className="w-4 h-4" /></button>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-zinc-700 border border-zinc-200 rounded-lg px-4 py-2 hover:border-gold hover:text-gold transition-all">
                  <span>Ordenar por</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SUPPLIERS.map((supplier, idx) => (
                <motion.div
                  key={supplier.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all"
                >
                  <Link to={`/supplier/${supplier.id}`} className="block relative h-56 overflow-hidden">
                    <img 
                      src={supplier.image} 
                      alt={supplier.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    {supplier.featured && (
                      <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        Destaque
                      </div>
                    )}
                  </Link>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-gold font-bold">{supplier.category}</span>
                        <Link to={`/supplier/${supplier.id}`} className="block text-lg font-serif font-bold text-zinc-900 hover:text-gold transition-colors">{supplier.name}</Link>
                      </div>
                      <div className="flex items-center gap-1 bg-zinc-50 px-2 py-1 rounded-lg">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-xs font-bold">{supplier.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-6">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{supplier.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{supplier.reviews} avaliações</span>
                      </div>
                      <span className="font-bold text-zinc-900">{supplier.price}</span>
                    </div>
                    <Link to={`/supplier/${supplier.id}`} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-200 text-sm font-bold text-zinc-700 group-hover:bg-gold group-hover:border-gold group-hover:text-white transition-all">
                      Ver Perfil
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 rounded-xl border border-zinc-200 text-sm font-bold text-zinc-700 hover:border-gold hover:text-gold transition-all">
                Carregar mais fornecedores
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
