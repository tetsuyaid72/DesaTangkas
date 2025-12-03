import {
  MapPin,
  HeartHandshake,
  CreditCard,
  ShieldCheck,
  FileEdit,
  Store,
  HandCoins,
  FileQuestion,
  UserX,
  Home,
  HeartCrack,
  Heart,
  Baby,
  UserMinus,
  Users,
  User,
  Banknote,
  Award,
  FileText,
  Megaphone,
  FileBadge
} from 'lucide-react';
import { ServiceItem } from './types';

export const WHATSAPP_NUMBER = "6289691268646";
export const COMPLAINT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfxenFgmx5NX8urvdG5kSObecFaKnXxIrrRAwD9sDrfP-Mozw/viewform";

export const LOGO_URL = "https://i.ibb.co/VWYSJZjJ/LOGO-KAB-BANJAR.png"; 

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'pindah',
    title: 'Surat Pengantar Pindah',
    description: 'Dokumen pengantar untuk proses pindah domisili antar wilayah.',
    icon: MapPin
  },
  {
    id: 'nikah',
    title: 'Surat Pengantar Nikah',
    description: 'Persyaratan administrasi awal untuk pendaftaran pernikahan.',
    icon: HeartHandshake
  },
  {
    id: 'ktp',
    title: 'Surat Pengantar Pembuatan KTP',
    description: 'Surat rekomendasi untuk pembuatan Kartu Tanda Penduduk baru.',
    icon: CreditCard
  },
  {
    id: 'skck',
    title: 'Surat Pengantar Pembuatan SKCK',
    description: 'Dokumen syarat penerbitan Surat Keterangan Catatan Kepolisian.',
    icon: ShieldCheck
  },
  {
    id: 'akta-lahir',
    title: 'Surat Permohonan Perubahan Akta Kelahiran',
    description: 'Permohonan koreksi atau perubahan data pada Akta Kelahiran.',
    icon: FileEdit
  },
  {
    id: 'usaha',
    title: 'Surat Keterangan Tempat Usaha',
    description: 'Surat keterangan legalitas lokasi usaha untuk perizinan.',
    icon: Store
  },
  {
    id: 'sktm',
    title: 'Surat Keterangan Tidak Mampu',
    description: 'Surat keterangan kondisi ekonomi untuk bantuan atau beasiswa.',
    icon: HandCoins
  },
  {
    id: 'hilang',
    title: 'Surat Keterangan Hilang',
    description: 'Keterangan resmi atas kehilangan dokumen penting kependudukan.',
    icon: FileQuestion
  },
  {
    id: 'belum-nikah',
    title: 'Surat Keterangan Tidak Pernah Menikah',
    description: 'Pernyataan status belum kawin untuk keperluan administrasi.',
    icon: UserX
  },
  {
    id: 'belum-rumah',
    title: 'Surat Keterangan Belum Memiliki Rumah',
    description: 'Syarat pengajuan KPR subsidi atau bantuan perumahan.',
    icon: Home
  },
  {
    id: 'cerai',
    title: 'Surat Keterangan Cerai/Rujuk',
    description: 'Keterangan status perceraian atau rujuk secara administratif.',
    icon: HeartCrack
  },
  {
    id: 'domisili',
    title: 'Surat Keterangan Domisili',
    description: 'Bukti tempat tinggal sementara atau menetap di desa.',
    icon: MapPin
  },
  {
    id: 'ket-nikah',
    title: 'Surat Keterangan Menikah',
    description: 'Bukti pencatatan pernikahan yang sah secara administrasi desa.',
    icon: Heart
  },
  {
    id: 'ket-lahir',
    title: 'Surat Keterangan Lahir',
    description: 'Dokumen sementara sebelum terbitnya Akta Kelahiran resmi.',
    icon: Baby
  },
  {
    id: 'kematian',
    title: 'Surat Keterangan Kematian',
    description: 'Bukti legal kematian warga untuk urusan waris atau asuransi.',
    icon: UserMinus
  },
  {
    id: 'waris',
    title: 'Surat Keterangan Ahli Waris',
    description: 'Penetapan pihak yang berhak menerima warisan secara sah.',
    icon: Users
  },
  {
    id: 'janda',
    title: 'Surat Keterangan Janda',
    description: 'Keterangan status janda untuk keperluan tunjangan pensiun.',
    icon: User
  },
  {
    id: 'penghasilan',
    title: 'Surat Keterangan Penghasilan Kerja',
    description: 'Keterangan pendapatan bagi pekerja sektor informal.',
    icon: Banknote
  },
  {
    id: 'baik',
    title: 'Surat Keterangan Berkelakuan Baik',
    description: 'Rekomendasi perilaku baik dari desa untuk melamar kerja.',
    icon: Award
  },
  {
    id: 'lapor-mati',
    title: 'Surat Formulir Pelaporan Kematian',
    description: 'Formulir resmi pelaporan warga meninggal ke Disdukcapil.',
    icon: FileText
  },
  {
    id: 'keramaian',
    title: 'Surat Rekomendasi Mengumpulkan Orang Banyak',
    description: 'Izin kegiatan keramaian masyarakat di lingkungan desa.',
    icon: Megaphone
  }
];