import React, { useEffect, useState } from 'react';
import { Search, User, Menu, X, Heart, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-gold fill-gold" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight leading-none uppercase">Vitrine Noivas</span>
                <span className="text-[10px] font-sans tracking-[0.2em] text-zinc-500 uppercase">Brasil</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/search" className="text-sm font-medium text-zinc-600 hover:text-gold transition-colors">Fornecedores</Link>
            <Link to="#" className="text-sm font-medium text-zinc-600 hover:text-gold transition-colors">Inspiração</Link>
            <Link to="#" className="text-sm font-medium text-zinc-600 hover:text-gold transition-colors">Blog</Link>
            <Link to="#" className="text-sm font-medium text-zinc-600 hover:text-gold transition-colors">Planos</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-zinc-600 hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-sm font-medium text-zinc-700 hover:border-gold hover:text-gold transition-all">
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                  title="Sair"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] text-sm font-medium text-white hover:bg-zinc-800 transition-all">
                <User className="w-4 h-4" />
                <span>Área do Expositor</span>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/search" className="block px-3 py-4 text-base font-medium text-zinc-700 hover:bg-zinc-50">Fornecedores</Link>
            <Link to="#" className="block px-3 py-4 text-base font-medium text-zinc-700 hover:bg-zinc-50">Inspiração</Link>
            <Link to="#" className="block px-3 py-4 text-base font-medium text-zinc-700 hover:bg-zinc-50">Blog</Link>
            <Link to="#" className="block px-3 py-4 text-base font-medium text-zinc-700 hover:bg-zinc-50">Planos</Link>
            <div className="pt-4 border-t border-zinc-100">
              {user ? (
                <>
                  <Link to="/dashboard" className="flex items-center gap-2 px-3 py-4 text-base font-medium text-gold">
                    <User className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-3 py-4 text-base font-medium text-red-500"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sair</span>
                  </button>
                </>
              ) : (
                <Link to="/login" className="flex items-center gap-2 px-3 py-4 text-base font-medium text-gold">
                  <User className="w-5 h-5" />
                  <span>Área do Expositor</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
