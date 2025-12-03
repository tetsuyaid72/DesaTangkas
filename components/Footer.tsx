import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Logo Desa Banjar" className="h-10" />
              <div>
                <h3 className="font-bold text-slate-800 leading-none">Desa Tangkas</h3>
                <p className="text-xs text-tangkas-primary font-medium">KABUPATEN BANJAR</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Sistem pelayanan publik digital untuk mempermudah administrasi kependudukan masyarakat Desa Tangkas secara transparan dan akuntabel.
            </p>
          </div>

          <div className="md:text-right space-y-4">
            <h4 className="font-bold text-slate-800">Tautan Cepat</h4>
            <div className="flex flex-col md:items-end gap-2 text-sm text-slate-600">
              <a href="#beranda" className="hover:text-tangkas-primary transition-colors">Beranda</a>
              <a href="#layanan" className="hover:text-tangkas-primary transition-colors">Layanan Publik</a>
              <a href="#tentang" className="hover:text-tangkas-primary transition-colors">Tentang Desa</a>
              <a href="#kontak" className="hover:text-tangkas-primary transition-colors">Kontak</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pemerintah Desa Tangkas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;