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
    icon: MapPin,
    requirements: [
      "Foto KTP Asli (Suami & Istri jika berkeluarga)",
      "Foto Kartu Keluarga (KK) Asli",
      "Alamat Lengkap Tujuan Pindah (RT/RW, Desa, Kecamatan)",
      "Pas Foto 3x4 berwarna (2 lembar)",
      "Alasan Kepindahan"
    ]
  },
  {
    id: 'nikah',
    title: 'Surat Pengantar Nikah',
    description: 'Persyaratan administrasi awal untuk pendaftaran pernikahan.',
    icon: HeartHandshake,
    requirements: [
      "Foto KTP Calon Suami & Istri",
      "Foto KTP Saksi Masing-Masing Calon Pengantin",
      "Foto KK Calon Suami & Istri",
      "Foto Akta Kelahiran",
      "Foto Ijazah Terakhir",
      "Pas Foto 2x3 & 4x6 4 Lembar (Background Biru)",
      "Surat Pernyataan Belum Pernah Menikah (Materai)",
      "Fotokopi KTP Orang Tua (Ayah & Ibu)",
      "Materai 10000 2 Lembar"
    ]
  },
  {
    id: 'ktp',
    title: 'Surat Pengantar Pembuatan KTP',
    description: 'Surat rekomendasi untuk pembuatan Kartu Tanda Penduduk baru.',
    icon: CreditCard,
    requirements: [
      "Foto Kartu Keluarga (KK) Terbaru",
      "Foto Akta Kelahiran / Ijazah",
      "Surat Kehilangan dari Polisi (Jika KTP Hilang)",
      "KTP Lama (Jika Rusak/Perubahan Data)"
    ]
  },
  {
    id: 'skck',
    title: 'Surat Pengantar Pembuatan SKCK',
    description: 'Dokumen syarat penerbitan Surat Keterangan Catatan Kepolisian.',
    icon: ShieldCheck,
    requirements: [
      "Foto KTP Asli",
      "Foto Kartu Keluarga (KK)",
      "Foto Akta Kelahiran",
      "Pas Foto 4x6 latar merah (4 lembar)",
      "Keterangan Keperluan Pembuatan SKCK"
    ]
  },
  {
    id: 'akta-lahir',
    title: 'Surat Permohonan Perubahan Akta Kelahiran',
    description: 'Permohonan koreksi atau perubahan data pada Akta Kelahiran.',
    icon: FileEdit,
    requirements: [
      "Foto KTP Pelapor",
      "Foto Kartu Keluarga (KK)",
      "Akta Kelahiran Asli yang ingin diubah",
      "Bukti Pendukung Perubahan (Ijazah/Buku Nikah)"
    ]
  },
  {
    id: 'usaha',
    title: 'Surat Keterangan Tempat Usaha',
    description: 'Surat keterangan legalitas lokasi usaha untuk perizinan.',
    icon: Store,
    requirements: [
      "Foto KTP Pemilik Usaha",
      "Foto Kartu Keluarga (KK)",
      "Bukti Lunas PBB Tahun Terakhir",
      "Foto Lokasi Usaha",
      "Jenis dan Nama Usaha"
    ]
  },
  {
    id: 'sktm',
    title: 'Surat Keterangan Tidak Mampu',
    description: 'Surat keterangan kondisi ekonomi untuk bantuan atau beasiswa.',
    icon: HandCoins,
    requirements: [
      "Foto KTP Asli",
      "Foto Kartu Keluarga (KK)",
      "Foto Rumah (Tampak Depan, Samping, Dalam)",
      "Surat Pernyataan Tidak Mampu bermaterai (Opsional)"
    ]
  },
  {
    id: 'hilang',
    title: 'Surat Keterangan Hilang',
    description: 'Keterangan resmi atas kehilangan dokumen penting kependudukan.',
    icon: FileQuestion,
    requirements: [
      "Foto KTP / Identitas Pelapor",
      "Foto Kartu Keluarga (KK)",
      "Surat Kehilangan dari Kepolisian (Opsional/Jika ada)",
      "Informasi detail dokumen yang hilang"
    ]
  },
  {
    id: 'belum-nikah',
    title: 'Surat Keterangan Tidak Pernah Menikah',
    description: 'Pernyataan status belum kawin untuk keperluan administrasi.',
    icon: UserX,
    requirements: [
      "Foto KTP Asli",
      "Foto Kartu Keluarga (KK)",
      "Surat Pernyataan Belum Pernah Menikah (Materai 10.000)",
      "Saksi 2 Orang (KTP Saksi)"
    ]
  },
  {
    id: 'belum-rumah',
    title: 'Surat Keterangan Belum Memiliki Rumah',
    description: 'Syarat pengajuan KPR subsidi atau bantuan perumahan.',
    icon: Home,
    requirements: [
      "Foto KTP Pemohon",
      "Foto Kartu Keluarga (KK)",
      "Formulir Permohonan dari Bank/Instansi (Jika ada)",
      "Surat Pernyataan Bermaterai"
    ]
  },
  {
    id: 'cerai',
    title: 'Surat Keterangan Cerai/Rujuk',
    description: 'Keterangan status perceraian atau rujuk secara administratif.',
    icon: HeartCrack,
    requirements: [
      "Foto KTP",
      "Foto Kartu Keluarga",
      "Akta Cerai dari Pengadilan Agama",
      "Surat Putusan Pengadilan"
    ]
  },
  {
    id: 'domisili',
    title: 'Surat Keterangan Domisili',
    description: 'Bukti tempat tinggal sementara atau menetap di desa.',
    icon: MapPin,
    requirements: [
      "Foto KTP Asli",
      "Foto Kartu Keluarga (KK)",
      "Surat Pengantar RT/RW (Jika ada)",
      "Alamat Lengkap Domisili Sekarang"
    ]
  },
  {
    id: 'ket-nikah',
    title: 'Surat Keterangan Menikah',
    description: 'Bukti pencatatan pernikahan yang sah secara administrasi desa.',
    icon: Heart,
    requirements: [
      "Foto KTP Suami & Istri",
      "Foto KK Terbaru",
      "Foto Buku Nikah / Akta Perkawinan"
    ]
  },
  {
    id: 'ket-lahir',
    title: 'Surat Keterangan Lahir',
    description: 'Dokumen sementara sebelum terbitnya Akta Kelahiran resmi.',
    icon: Baby,
    requirements: [
      "Foto KTP Ayah & Ibu",
      "Foto Kartu Keluarga (KK)",
      "Surat Keterangan Lahir dari Bidan/RS/Puskesmas",
      "Foto KTP 2 Orang Saksi",
      "Nama Bayi"
    ]
  },
  {
    id: 'kematian',
    title: 'Surat Keterangan Kematian',
    description: 'Bukti legal kematian warga untuk urusan waris atau asuransi.',
    icon: UserMinus,
    requirements: [
      "Foto KTP Almarhum/Almarhumah",
      "Foto KK Almarhum/Almarhumah",
      "Foto KTP Pelapor",
      "Surat Keterangan Kematian dari RS (Jika ada)",
      "Waktu dan Tempat Meninggal"
    ]
  },
  {
    id: 'waris',
    title: 'Surat Keterangan Ahli Waris',
    description: 'Penetapan pihak yang berhak menerima warisan secara sah.',
    icon: Users,
    requirements: [
      "Foto KTP Semua Ahli Waris",
      "Foto KK Almarhum & Ahli Waris",
      "Surat Keterangan Kematian",
      "Buku Nikah Almarhum",
      "Surat Pernyataan Ahli Waris (Materai)"
    ]
  },
  {
    id: 'janda',
    title: 'Surat Keterangan Janda',
    description: 'Keterangan status janda untuk keperluan tunjangan pensiun.',
    icon: User,
    requirements: [
      "Foto KTP Pemohon",
      "Foto KK Pemohon",
      "Surat Kematian Suami atau Akta Cerai",
      "Pas Foto 3x4 (2 lembar)"
    ]
  },
  {
    id: 'penghasilan',
    title: 'Surat Keterangan Penghasilan Kerja',
    description: 'Keterangan pendapatan bagi pekerja sektor informal.',
    icon: Banknote,
    requirements: [
      "Foto KTP Pemohon",
      "Foto Kartu Keluarga (KK)",
      "Informasi Jenis Pekerjaan",
      "Estimasi Penghasilan Rata-rata per Bulan"
    ]
  },
  {
    id: 'baik',
    title: 'Surat Keterangan Berkelakuan Baik',
    description: 'Rekomendasi perilaku baik dari desa untuk melamar kerja.',
    icon: Award,
    requirements: [
      "Foto KTP Asli",
      "Foto Kartu Keluarga (KK)",
      "Surat Pengantar RT/RW",
      "Keterangan Keperluan (Melamar Kerja/Sekolah)"
    ]
  },
  {
    id: 'lapor-mati',
    title: 'Surat Formulir Pelaporan Kematian',
    description: 'Formulir resmi pelaporan warga meninggal ke Disdukcapil.',
    icon: FileText,
    requirements: [
      "Foto KTP & KK Almarhum (Asli)",
      "Foto KTP Pelapor",
      "Surat Keterangan Kematian dari Dokter/RS/Desa",
      "KTP Saksi-saksi"
    ]
  },
  {
    id: 'keramaian',
    title: 'Surat Rekomendasi Mengumpulkan Orang Banyak',
    description: 'Izin kegiatan keramaian masyarakat di lingkungan desa.',
    icon: Megaphone,
    requirements: [
      "Foto KTP Penanggung Jawab",
      "Proposal Kegiatan / Susunan Acara",
      "Izin Lokasi Kegiatan",
      "Waktu dan Tanggal Kegiatan"
    ]
  }
];