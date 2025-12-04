import React from 'react';
import { MessageSquareWarning, ExternalLink } from 'lucide-react';
import { COMPLAINT_FORM_URL } from '../constants';

const Complaint: React.FC = () => {
  return (
    <section id="pengaduan" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start md:items-center gap-5">
              <div className="bg-orange-100 p-4 rounded-full text-orange-600 shadow-sm flex-shrink-0">
                <MessageSquareWarning size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Layanan Pengaduan Masyarakat
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-lg">
                  Memiliki kritik, saran, atau ingin melaporkan masalah di lingkungan Desa Tangkas? Sampaikan aspirasi Anda secara langsung melalui formulir pengaduan resmi kami.
                </p>
              </div>
            </div>
            <a 
              href={COMPLAINT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex-shrink-0 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform active:scale-95"
            >
              Isi Formulir Pengaduan
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complaint;