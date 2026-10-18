// Kunci = id mata kuliah (subjects.js). Dokumen: { title, type: 'Materi'|'Rangkuman'|'Latihan Soal', url, description }
// url: tautan Google Drive (…/file/d/ID/view) atau PDF publik. Drive harus diset "Siapa saja yang memiliki link: Viewer".
// url kosong => tampil "Belum tersedia".

const materials = {
  's1-kalkulus1': [
    { title: 'Fungsi', type: 'Materi', url: 'materi/semester1/kalkulus/Fungsi.pdf', description: '' },
    { title: 'Fungsi Trigonometri', type: 'Materi', url: 'materi/semester1/kalkulus/Fungsi_Trigonometri.pdf', description: '' },
    { title: 'Limit Bahan Ajar', type: 'Materi', url: 'materi/semester1/kalkulus/Limit_Bahan_Ajar.pdf', description: '' },
    { title: 'Limit Trigono', type: 'Materi', url: 'materi/semester1/kalkulus/LIMIT_TRIGONO.pdf', description: '' },
    { title: 'Turunan', type: 'Materi', url: 'materi/semester1/kalkulus/Turunan.pdf', description: '' },
    { title: 'Turunan kalkulus', type: 'Latihan Soal', url: 'soal/semester1/kalkulus/Turunan_Kalkulus.pdf', description: '' },
  ],
  's1-bahasa-inggris': [
  ],
  's1-Fisika-1': [
     { title: 'Besaran dan Satuan', type: 'Materi', url: 'materi/semester1/fisika1/besaran_dan_satuan.pdf', description: '' },
     { title: 'Pengukuran, Besaran, Satuan dan Kinematika', type: 'Materi', url: 'materi/semester1/fisika1/Pengukuran,_Besaran,_Satuan_dan_Kinematika.pdf', description: '' },
     { title: 'Gerak Linier & Nonlinier', type: 'Materi', url: 'materi/semester1/fisika1/Gerak_linier_dan_Nonlinier.pdf', description: '' },
     { title: 'Gerak Satu Dimensi', type: 'Materi', url: 'materi/semester1/fisika1/Gerak_Satu_Dimensi.pdf', description: '' },
  ],
  's1-manajemendanorganisasi': [
     { title: 'Pengantar Manajemen dan Organisasi', type: 'Materi', url: 'materi/semester1/mdo/Pengantar_Manajemen_dan_Organisasi.pdf', description: '' },
     { title: 'Proses Manajemen Perencanaan', type: 'Materi', url: 'materi/semester1/mdo/Proses_Manajemen_Perencanaan.pdf', description: '' },
     { title: 'Proses Bisnis', type: 'Materi', url: 'materi/semester1/mdo/Proses_bisnis.pdf', description: '' },
     { title: 'Komponen Pembentuk Proses Bisnis', type: 'Materi', url: 'materi/semester1/mdo/Komponen_Pembentuk_Proses_Bisnis.pdf', description: '' },
     { title: 'BPMN', type: 'Materi', url: 'materi/semester1/mdo/BPMN.pdf', description: '' },
  ],
  's1-KSI': [
     { title: 'Konsep Dasar Sistem Informasi 01', type: 'Materi', url: 'materi/semester1/ksi/Konsep_Dasar_Sistem_Informasi01.pdf', description: '' },
     { title: 'Konsep Dasar Sistem Informasi 02', type: 'Materi', url: 'materi/semester1/ksi/Konsep_Dasar_Sistem_Informasi02.pdf', description: '' },
     { title: 'Manajemen Sistem Informasi', type: 'Materi', url: 'materi/semester1/ksi/Manajemen_Sistem_Informasi.pdf', description: '' },
  ],
  's1-Daspro': [
  ],
  
  's1-pancasila': [
  ],

  's1-b.indo': [
  ],

// Semester 2
  's2-kalkulus2': [
   { title: 'Integral Lipat', type: 'Materi', url: 'materi/semester2/kalkulus2/Integral_Lipat.pdf', description: '' },
   { title: 'Kekonvergenan Barisan', type: 'Materi', url: 'materi/semester2/kalkulus2/Kekonvergenan_Barisan.pdf', description: '' },
   { title: 'Deret Takhingga', type: 'Materi', url: 'materi/semester2/kalkulus2/Deret_Takhingga.pdf', description: '' },
  ],

  's2-lti': [
    { title: 'Pengertian Komputer dan TIK', type: 'Materi', url: 'materi/semester2/LTI/Pengertian_Komputer_dan_TIK.pdf', description: '' },
    { title: 'Internet', type: 'Materi', url: 'materi/semester2/LTI/Internet.pdf', description: '' },
    { title: 'Perangkat Lunak', type: 'Materi', url: 'materi/semester2/LTI/Perangkat_Lunak.pdf', description: '' },
  ],

  's2-kwu': [
  ],
  's2-fisika2': [
  ],
  's2-sbd': [
   { title: 'Modul Praktikum Basis Data', type: 'Materi', url: 'materi/semester2/sbd/Modul_Praktikum_Basis_Data.pdf', description: '' },
  ],

  's2-ldsd': [
   { title: 'Pengantar Bahasa C', type: 'Materi', url: 'materi/semester2/ldsd/Pengantar_Bahasa_C.pdf', description: '' },
   { title: 'Mesin Abstrak', type: 'Materi', url: 'materi/semester2/ldsd/Mesin_Abstrak.pdf', description: '' },
   { title: 'Struktur Data STACK', type: 'Materi', url: 'materi/semester2/ldsd/Struktur_Data_STACK.pdf', description: '' },
   { title: 'ADT Queue', type: 'Materi', url: 'materi/semester2/ldsd/ADT_Queue.pdf', description: '' },
   { title: 'Struktur Data Queue', type: 'Materi', url: 'materi/semester2/ldsd/Struktur_Data_Queue.pdf', description: '' },
   { title: 'Kasus List Linier', type: 'Materi', url: 'materi/semester2/ldsd/Kasus_List_Linier.pdf', description: '' },
   { title: 'Struktur Data Linked List', type: 'Materi', url: 'materi/semester2/ldsd/Struktur_Data_Linked_List.pdf', description: '' },
   { title: 'Struktur Data Tree', type: 'Materi', url: 'materi/semester2/ldsd/Struktur_Data_Tree.pdf', description: '' },
   { title: 'Struktur Data Graph', type: 'Materi', url: 'materi/semester2/ldsd/Struktur_Data_Graph.pdf', description: '' },
  ],

  's2-kewarganegaraan': [
  ],
  's2-agama': [
  ],

//   Semester 3
  's3-statistik': [
    { title: 'Konsep Data Statistika', type: 'Materi', url: 'materi/semester3/statistik/Konsep_Data_Statistika.pdf', description: '' },
    { title: 'Konsep Probabilitas', type: 'Materi', url: 'materi/semester3/statistik/Konsep_Probabilitas.pdf', description: '' },
    { title: 'Daftar Distribusi Frekuensi', type: 'Materi', url: 'materi/semester3/statistik/Daftar_Distribusi_Frekuensi.pdf', description: '' },
    { title: 'Estimasi', type: 'Materi', url: 'materi/semester3/statistik/Estimasi.pdf', description: '' },
    { title: 'Regresi Linier', type: 'Materi', url: 'materi/semester3/statistik/Regresi_Linier.pdf', description: '' },
  ],

  's3-pak': [
     { title: 'Pengertian Korupsi', type: 'Materi', url: 'materi/semester3/pak/Pengertian_Korupsi.pdf', description: '' },
     { title: 'Bentuk Korupsi', type: 'Materi', url: 'materi/semester3/pak/Bentuk_Korupsi.pdf', description: '' },
     { title: 'Dampak Masif Korupsi di Indonesia', type: 'Materi', url: 'materi/semester3/pak/Dampak_Masif_Korupsi_di_Indonesia.pdf', description: '' },
     { title: 'Digital Integrity Blueprint', type: 'Materi', url: 'materi/semester3/pak/Digital_Integrity_Blueprint.pdf', description: '' },
  ],

  's3-pemweb': [
    { title: 'Pengenalan HTML', type: 'Materi', url: 'materi/semester3/pemweb/Pengenalan_HTML.pdf', description: '' },
    { title: 'Pengenalan CSS', type: 'Materi', url: 'materi/semester3/pemweb/Pengenalan_CSS.pdf', description: '' },
    { title: 'Pengenalan PHP', type: 'Materi', url: 'materi/semester3/pemweb/Pengenalan_PHP.pdf', description: '' },
    { title: 'Operator', type: 'Materi', url: 'materi/semester3/pemweb/Operator.pdf', description: '' },
  ],

  's3-sim': [
    { title: 'Soft Systems Methodology', type: 'Materi', url: 'materi/semester3/sim/SSM.pdf', description: '' },
  ],

  's3-rkpl': [
    { title: 'Pengantar RKPL', type: 'Materi', url: 'materi/semester3/rkpl/Pengantar_RKPL.pdf', description: '' },
    { title: 'Requirement Engineering', type: 'Materi', url: 'materi/semester3/rkpl/Requirement_Engineering.pdf', description: '' },
    { title: 'Requirement Elicitation and Analysis', type: 'Materi', url: 'materi/semester3/rkpl/Requirement_Elicitation_and_Analysis.pdf', description: '' },
    { title: 'Requirement Specification', type: 'Materi', url: 'materi/semester3/rkpl/Requirement_Specification.pdf', description: '' },
    { title: 'Metode Pengembangan Software', type: 'Materi', url: 'materi/semester3/rkpl/Metode_Pengembangan_Software.pdf', description: '' },
  ],

  's3-manprobis': [
      {title: 'Pengantar Manajemen Proses Bisnis', type: 'Materi', url: 'materi/semester3/manprobis/Pengantar_Manajemen_Proses_Bisnis.pdf', description: '' },
  ],

  's3-mbd': [
    {title: 'Modul Praktikum Basis Data', type: 'Materi', url: 'materi/semester3/mbd/Modul_Praktikum_Basis_Data.pdf', description: '' },
  ],

  's3-so': [
     {title: 'Manajemen Proses - Konkurensi Parbegin-parend', type: 'Materi', url: 'materi/semester3/so/Manajemen_Proses-Konkurensi_Parbegin-parend.pdf', description: '' },
  ],

  's3-kombis': [
     { title: 'Motivasi', type: 'Materi', url: 'materi/semester3/kombis/Motivasi.pdf', description: '' },
     { title: 'Negosiasi', type: 'Materi', url: 'materi/semester3/kombis/Negosiasi.pdf', description: '' },
     { title: 'Power dan Politik', type: 'Materi', url: 'materi/semester3/kombis/Power_dan_Politik.pdf', description: '' },
  ],
}