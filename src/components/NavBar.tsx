import { motion } from 'framer-motion';
import { Anchor, BookOpen, HeartHandshake, Home, MessageSquare } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' }
];

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-aqua/15 text-aqua shadow-soft">
            <HeartHandshake className="h-5 w-5" />
          </div>
          Dra. Fabi Cristine
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5521999999999?text=Olá%20Dra.%20Fabi%20Cristine%2C%20gostaria%20de%20agendar%20uma%20consulta"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-slate-800"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </motion.header>
  );
}
