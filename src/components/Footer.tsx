import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-gold fill-gold" />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight leading-none uppercase text-white">Vitrine Noivas</span>
              <span className="text-[10px] font-sans tracking-[0.2em] text-zinc-500 uppercase">Brasil</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            A maior e mais luxuosa vitrine de fornecedores de casamento do Brasil. Conectando sonhos aos melhores profissionais.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Explorar</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/search" className="hover:text-gold transition-colors">Encontrar Fornecedores</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Inspiração & Ideias</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Blog de Casamento</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Planos para Fornecedores</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Anuncie Conosco</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Suporte</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="#" className="hover:text-gold transition-colors">Central de Ajuda</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Termos de Uso</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Política de Privacidade</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Contato</Link></li>
            <li><Link to="#" className="hover:text-gold transition-colors">Trabalhe Conosco</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-serif text-lg mb-6">Contato</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <span>+55 (11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <span>contato@vitrinenoivas.com.br</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>© 2026 Vitrine Noivas Brasil. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ para o seu grande dia.</p>
      </div>
    </footer>
  );
};
