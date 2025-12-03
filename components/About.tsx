import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image / Visual Column */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl z-0"></div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl z-0"></div>
             
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-500">
                {/* Use a high quality placeholder for gov office or village activity */}
                <img 
                  src="/images/dronedesa.png" 
                  alt="Kantor Desa Tangkas" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Kantor Desa Tangkas</p>
                    <p className="text-sm opacity-90">Pusat Pelayanan Masyarakat</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-tangkas-primary font-bold tracking-wide uppercase text-sm mb-2">Tentang Kami</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Mewujudkan Birokrasi Digital yang Melayani
              </h3>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Pemerintah Desa Tangkas berkomitmen menghadirkan transformasi pelayanan publik yang adaptif dan modern. Melalui sistem ini, kami memangkas birokrasi berbelit menjadi layanan yang cepat, tepat, dan transparan bagi seluruh warga.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Pelayanan Cepat & Responsif",
                "Prosedur Jelas & Transparan",
                "Terhubung 24/7 via WhatsApp",
                "Dokumen Resmi & Valid"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-tangkas-primary">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-600 italic text-sm">
                "Seluruh pelayanan administrasi kini dapat diajukan dari rumah. Cukup siapkan berkas, kirim via WhatsApp, dan ambil dokumen fisik saat sudah jadi."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;