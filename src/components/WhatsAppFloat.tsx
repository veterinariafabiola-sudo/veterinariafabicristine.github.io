import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5521999999999?text=Olá%20Dra.%20Fabi%20Cristine%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20atendimento%20domiciliar."
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] hover:bg-slate-800"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft">
        <MessageSquare className="h-5 w-5" />
      </span>
      Fale agora
    </motion.a>
  );
}
