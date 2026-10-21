// status 'Perlu verifikasi' = cek langsung di situs resmi. Jangan ubah menjadi "Dibuka" sebelum dicek.
const bootcampCategories = ['Web Development', 'Data Analytics', 'UI/UX Design', 'Cybersecurity', 'Cloud Computing', 'Software Engineering', 'Digital Business']
const bootcamps = [
  { org: 'Dicoding', program: 'Kelas & program Dicoding', category: 'Software Engineering', focus: 'Pemrograman, web, mobile, data', costType: 'Perlu verifikasi', status: 'Perlu verifikasi', url: 'https://www.dicoding.com' },
  { org: 'Hacktiv8', program: 'Bootcamp Hacktiv8', category: 'Web Development', focus: 'Full-stack web, data', costType: 'Perlu verifikasi', status: 'Perlu verifikasi', url: 'https://www.hacktiv8.com' },
  { org: 'Purwadhika', program: 'Bootcamp Purwadhika', category: 'Web Development', focus: 'Full-stack, data, digital marketing', costType: 'Perlu verifikasi', status: 'Perlu verifikasi', url: 'https://purwadhika.com' },
  { org: 'Google Career Certificates', program: 'Data Analytics / UX Design / Cybersecurity', category: 'Data Analytics', focus: 'Keterampilan tingkat pemula', costType: 'Perlu verifikasi', status: 'Perlu verifikasi', url: 'https://grow.google/certificates/' },
  { org: 'Cisco Networking Academy', program: 'Kursus Cybersecurity & Networking', category: 'Cybersecurity', focus: 'Keamanan jaringan', costType: 'Freemium', status: 'Kursus mandiri (selalu tersedia)', url: 'https://www.netacad.com' },
  { org: 'AWS Skill Builder', program: 'Learning plan Cloud', category: 'Cloud Computing', focus: 'AWS Cloud', costType: 'Freemium', status: 'Selalu tersedia', url: 'https://skillbuilder.aws' },
]
const portals = [
  { name: 'LinkedIn Jobs', desc: 'Lowongan magang dan kerja, plus jejaring profesional.', type: 'Magang & kerja', req: 'Profil LinkedIn, CV', url: 'https://www.linkedin.com/jobs/' },
  { name: 'Jobstreet', desc: 'Portal lowongan kerja di Indonesia.', type: 'Magang & kerja', req: 'CV, akun', url: 'https://www.jobstreet.co.id' },
  { name: 'Glints', desc: 'Lowongan kerja dan magang untuk talenta muda.', type: 'Magang & kerja', req: 'CV, akun', url: 'https://glints.com/id' },
  { name: 'Kalibrr', desc: 'Lowongan dan asesmen kandidat.', type: 'Magang & kerja', req: 'CV, akun', url: 'https://www.kalibrr.com' },
  { name: 'Dealls', desc: 'Lowongan magang dan kerja untuk fresh graduate.', type: 'Magang & kerja', req: 'CV, akun', url: 'https://dealls.com' },
]
// Pengumuman hanya dari sumber resmi: { title, openDate:'YYYY-MM-DD', closeDate:'YYYY-MM-DD', source:'https://…' }
const announcements = []
const checklist = [
  { phase: '3–6 bulan sebelum melamar', items: ['Tentukan bidang minat', 'Pelajari keterampilan dasar bidang itu', 'Buat akun GitHub dan mulai proyek kecil'] },
  { phase: '2–3 bulan sebelum melamar', items: ['Susun CV ATS-friendly', 'Rapikan profil LinkedIn', 'Siapkan 2–3 proyek portofolio'] },
  { phase: '1–2 bulan sebelum melamar', items: ['Cari lowongan di portal resmi', 'Sesuaikan CV tiap lowongan', 'Kirim lamaran dan catat statusnya'] },
  { phase: 'Selama proses seleksi', items: ['Latihan tes teknis dan psikotes', 'Latihan wawancara HR dan teknis', 'Kirim email follow-up bila perlu'] },
  { phase: 'Setelah diterima', items: ['Siapkan dokumen administrasi', 'Baca ketentuan program dengan teliti'] },
]
const guides = [
  { title: 'CV ATS-friendly', body: ['Gunakan satu kolom, font standar, dan judul umum (Pendidikan, Pengalaman, Proyek, Keterampilan).', 'Hindari tabel dan gambar. Cocokkan kata kunci dengan lowongan secara jujur; simpan sebagai PDF kecuali diminta lain.'] },
  { title: 'Portofolio mahasiswa', body: ['Pilih 2–3 proyek terbaik; jelaskan masalah, peranmu, teknologi, dan hasilnya.', 'Sertakan tautan GitHub/demo dan README yang jelas. Proyek tugas kuliah boleh dipakai, cantumkan kontribusi pribadimu.'] },
  { title: 'Profil LinkedIn', body: ['Foto sopan dan headline spesifik, mis. "Mahasiswa Sistem Informasi | minat Data Analytics".', 'Isi About, Proyek, dan Keterampilan; terhubung dengan dosen, alumni, dan rekruter.'] },
  { title: 'Wawancara HR & metode STAR', body: ['STAR: Situation (konteks), Task (tugasmu), Action (tindakanmu), Result (hasilnya).', 'Contoh yang bisa disesuaikan: "Di tugas basis data (S), saya merancang ERD (T), mengumpulkan kebutuhan anggota dan merevisi dua kali (A), hasilnya desain disetujui (R)."', 'Contoh pertanyaan: "Ceritakan tentang dirimu", "Mengapa magang di sini?", "Ceritakan kegagalan dan pelajarannya."'] },
  { title: 'Wawancara teknis & psikotes', body: ['Ulas dasar bidang yang dilamar (SQL, algoritma dasar, jaringan) dan latih menjelaskan proyekmu secara runtut.', 'Jika belum tahu, katakan jujur lalu jelaskan cara berpikirmu. Untuk psikotes, latih soal logika dan numerik. Ini panduan, bukan jaminan lolos.'] },
  { title: 'Email lamaran & etika komunikasi', body: ['Subjek jelas: "Lamaran Magang [Posisi] — Nama Lengkap". Isi singkat: perkenalan, alasan tertarik, lampiran CV/portofolio.', 'Follow-up sopan setelah 5–7 hari kerja, gunakan bahasa formal, balas pesan tepat waktu.'] },
]
