import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, WHATSAPP_NUMBER } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES_LIST.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWhatsappLink = (serviceName: string) => {
    const text = `Halo Admin Desa, saya ingin mengurus ${serviceName}. Mohon informasi syaratnya.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="layanan" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Layanan Publik Digital
          </h2>
          <p className="text-slate-600 text-lg">
            Pilih layanan yang Anda butuhkan, kami siap membantu prosesnya secara cepat.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-tangkas-primary transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-tangkas-primary/50 focus:border-tangkas-primary shadow-sm transition-all"
              placeholder="Cari layanan surat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              getLink={getWhatsappLink} 
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Layanan tidak ditemukan. Coba kata kunci lain.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ 
  service: ServiceItem; 
  index: number;
  getLink: (name: string) => string;
}> = ({ service, index, getLink }) => {
  return (
    <div 
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-tangkas-light/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="mb-6 inline-flex p-3 rounded-xl bg-slate-50 text-tangkas-primary group-hover:bg-tangkas-primary group-hover:text-white transition-colors duration-300 w-fit">
        <service.icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-tangkas-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      <a
        href={getLink(service.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-tangkas-primary text-tangkas-primary font-semibold text-sm hover:bg-tangkas-primary hover:text-white transition-all duration-300 active:scale-95"
      >
        Ajukan via WhatsApp
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default Services;