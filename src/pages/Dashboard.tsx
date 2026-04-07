import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Plus, 
  ChevronRight, 
  Eye, 
  MousePointer2, 
  Mail, 
  CheckCircle2, 
  AlertCircle,
  Camera,
  Heart
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { auth } from '../lib/firebase';
import { signOut, User as FirebaseUser } from 'firebase/auth';

const STATS = [
  { label: 'Visualizações', value: '1.240', change: '+12%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Cliques', value: '450', change: '+8%', icon: MousePointer2, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Leads', value: '32', change: '+24%', icon: Mail, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Avaliações', value: '4.9', change: '0%', icon: Star, color: 'text-gold', bg: 'bg-gold-light' },
];

const RECENT_LEADS = [
  { id: 1, name: 'Mariana Silva', date: 'Hoje, 10:30', status: 'Novo', message: 'Gostaria de um orçamento para meu casamento em Outubro/2026.' },
  { id: 2, name: 'Pedro Santos', date: 'Ontem, 15:45', status: 'Lido', message: 'Vocês têm disponibilidade para o dia 12/06?' },
  { id: 3, name: 'Juliana Costa', date: '22 Mar, 09:15', status: 'Respondido', message: 'Obrigada pelo retorno, vamos agendar uma reunião.' },
];

export const Dashboard = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser);
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
    <div className="pt-20 min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-100 hidden lg:flex flex-col sticky top-20 h-[calc(100vh-80px)]">
        <div className="p-6 flex-1 space-y-8">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center overflow-hidden">
              {user?.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
              ) : (
                <Camera className="w-5 h-5 text-gold" />
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 truncate max-w-[120px]">
                {user?.displayName || user?.email?.split('@')[0] || 'Expositor'}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Plano Premium</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { icon: BarChart3, label: 'Dashboard', active: true },
              { icon: MessageSquare, label: 'Mensagens', count: 5 },
              { icon: Users, label: 'Leads', count: 12 },
              { icon: Star, label: 'Avaliações' },
              { icon: Calendar, label: 'Agenda' },
              { icon: Settings, label: 'Configurações' },
            ].map((item, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  item.active ? "bg-[#D4AF37] text-white shadow-lg shadow-gold/20" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.count && (
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold",
                    item.active ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-600"
                  )}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-zinc-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#FF4444] hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair da Conta</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-zinc-900">
                Bem-vindo de volta, {user?.displayName?.split(' ')[0] || 'Expositor'}!
              </h1>
              <p className="text-zinc-500 text-sm">Aqui está o que aconteceu com o seu perfil nos últimos 30 dias.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Novo Portfólio</span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-[32px] border border-zinc-200 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", stat.bg)}>
                    <stat.icon className={cn("w-6 h-6", stat.color)} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-1 rounded-lg",
                    stat.change.startsWith('+') ? "text-green-600 bg-green-50" : "text-zinc-400 bg-zinc-50"
                  )}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-zinc-900">{stat.value}</h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Completion */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-xl font-bold text-zinc-900">Completar Perfil</h3>
                  <span className="text-sm font-bold text-[#D4AF37]">85% Completo</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-[#D4AF37]" style={{ width: '85%' }}></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Informações Básicas', done: true },
                    { label: 'Portfólio (Mín. 10 fotos)', done: true },
                    { label: 'Vídeo de Apresentação', done: false },
                    { label: 'Redes Sociais Conectadas', done: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <div className="flex items-center gap-3">
                        {item.done ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <AlertCircle className="w-5 h-5 text-zinc-300" />}
                        <span className={cn("text-sm font-medium", item.done ? "text-zinc-900" : "text-zinc-400")}>{item.label}</span>
                      </div>
                      {!item.done && <button className="text-xs font-bold text-[#D4AF37] hover:underline">Adicionar</button>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Leads */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-xl font-bold text-zinc-900">Leads Recentes</h3>
                  <button className="text-sm font-bold text-gold hover:underline flex items-center gap-1">
                    <span>Ver todos</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {RECENT_LEADS.map(lead => (
                    <div key={lead.id} className="p-6 rounded-2xl border border-zinc-100 hover:border-gold transition-all group cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-600">
                            {lead.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900">{lead.name}</h4>
                            <p className="text-xs text-zinc-400">{lead.date}</p>
                          </div>
                        </div>
                        <span className={cn(
                          "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg",
                          lead.status === 'Novo' ? "bg-blue-50 text-blue-600" : 
                          lead.status === 'Lido' ? "bg-zinc-50 text-zinc-400" : "bg-green-50 text-green-600"
                        )}>
                          {lead.status}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 line-clamp-1">{lead.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions & Tips */}
            <div className="space-y-8">
              <div className="bg-[#0A0A0A] text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-serif text-xl mb-4">Dica do Especialista</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Perfis com vídeo de apresentação recebem até <span className="text-[#D4AF37] font-bold">3x mais leads</span>. Que tal gravar um hoje?
                  </p>
                  <button className="w-full bg-[#D4AF37] text-white py-3 rounded-xl font-bold hover:bg-gold-dark transition-all">
                    Gravar Vídeo
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <TrendingUp className="w-40 h-40" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-zinc-900 mb-6">Ações Rápidas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Editar Perfil', icon: Settings },
                    { icon: Heart, label: 'Favoritos' },
                    { icon: MessageSquare, label: 'Chat' },
                    { icon: Search, label: 'Ver Perfil' },
                  ].map((action, idx) => (
                    <button key={idx} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-gold hover:bg-white transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-gold group-hover:text-white transition-all">
                        <action.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-zinc-600">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
