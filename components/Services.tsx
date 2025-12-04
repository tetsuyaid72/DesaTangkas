import React, { useState } from 'react';
import { Search, ArrowRight, X, FileCheck, AlertCircle } from 'lucide-react';
import { SERVICES_LIST, WHATSAPP_NUMBER } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_LIST.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="layanan" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Layanan Publik Digital
          </h2>
          <p className="text-slate-600 text-lg">
            Pilih layanan yang Anda butuhkan, lihat persyaratannya, lalu ajukan via WhatsApp.
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
              onOpenModal={handleOpenModal} 
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Layanan tidak ditemukan. Coba kata kunci lain.</p>
          </div>
        )}
      </div>

      {/* Requirements Modal */}
      {selectedService && (
        <RequirementsModal 
          service={selectedService} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

const ServiceCard: React.FC<{ 
  service: ServiceItem; 
  index: number;
  onOpenModal: (service: ServiceItem) => void;
}> = ({ service, index, onOpenModal }) => {
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

      <button
        onClick={() => onOpenModal(service)}
        className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-tangkas-primary text-tangkas-primary font-semibold text-sm hover:bg-tangkas-primary hover:text-white transition-all duration-300 active:scale-95"
      >
        Lihat Persyaratan
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

const RequirementsModal: React.FC<{
  service: ServiceItem;
  onClose: () => void;
}> = ({ service, onClose }) => {
  const getWhatsappLink = () => {
    const text = `Halo Admin Desa, saya ingin mengurus ${service.title}. Saya sudah memahami persyaratannya. Mohon dibantu prosesnya.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-tangkas-primary px-6 py-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
             <div className="bg-white/20 p-2 rounded-lg">
               <service.icon size={24} />
             </div>
             <h3 className="font-bold text-lg leading-tight">{service.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6 bg-orange-50 border border-orange-100 p-4 rounded-xl flex gap-3">
            <AlertCircle className="text-orange-600 flex-shrink-0" size={20} />
            <p className="text-sm text-orange-800">
              Mohon siapkan dokumen berikut dalam bentuk foto yang jelas sebelum menghubungi admin.
            </p>
          </div>

          <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <FileCheck size={20} className="text-tangkas-primary" />
            Daftar Persyaratan:
          </h4>
          
          <ul className="space-y-3 mb-8">
            {service.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                <span className="w-5 h-5 rounded-full bg-teal-50 text-tangkas-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col-reverse md:flex-row gap-3">
            <button 
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
            >
              Tutup
            </button>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-tangkas-primary text-white font-semibold hover:bg-tangkas-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-200"
            >
              Ajukan via WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;