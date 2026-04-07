import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { motion } from 'motion/react';
import { Camera, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      setError('Erro ao entrar com Google. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError('E-mail ou senha incorretos.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-zinc-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[32px] shadow-xl border border-zinc-100 p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-zinc-900 mb-2">Área do Expositor</h1>
          <p className="text-zinc-500 text-sm">Entre para gerenciar seu perfil e leads.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Senha</label>
              <button type="button" className="text-xs font-bold text-gold hover:underline">Esqueceu?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A1A1A] text-white py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar na Conta'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
            <span className="bg-white px-4 text-zinc-400">Ou continue com</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white border border-zinc-200 text-zinc-900 py-4 rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          <span>Entrar com Google</span>
        </button>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Ainda não é um expositor? {' '}
          <Link to="/" className="text-gold font-bold hover:underline">Saiba mais</Link>
        </p>
      </motion.div>
    </div>
  );
};
