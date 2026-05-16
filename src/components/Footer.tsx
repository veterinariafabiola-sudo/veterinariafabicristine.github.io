import { Instagram, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Dra. Fabi Cristine Veterinária</p>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Atendimento domiciliar, vacinação e acompanhamento veterinário para cães e gatos no Rio de Janeiro.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">WhatsApp</p>
            <a href="https://wa.me/5521999999999" className="flex items-center gap-2 hover:text-slate-900">
              <Phone className="h-4 w-4" /> (21) 99999-9999
            </a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Localização</p>
            <p>Rio de Janeiro, RJ</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-900">Redes sociais</p>
            <div className="flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-slate-900"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Dra. Fabi Cristine Veterinária. Todos os direitos reservados.
      </div>
    </footer>
  );
}
