/* SI-Corner — logika halaman. Data ada di js/data/*.js */
const $ = (s) => document.querySelector(s);
const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const badge = (t, tone = '') => `<span class="badge ${tone}">${esc(t)}</span>`;
const costTone = (c) => (c === 'Gratis' ? 'green' : c === 'Freemium' ? 'blue' : 'amber');
const btn = (href, label, cls = '', ext = false) => `<a class="btn ${cls}" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)}${ext ? ' ↗' : ''}</a>`;
const empty = (t) => `<div class="empty">${t}</div>`;
const crumb = (items) => `<nav class="crumb" aria-label="Breadcrumb"><a href="#/">Beranda</a>${items.map((i) => `<span aria-hidden="true">›</span>${i.to ? `<a href="#${i.to}">${esc(i.label)}</a>` : `<span aria-current="page">${esc(i.label)}</span>`}`).join('')}</nav>`;
const phead = (title, sub, items) => `<div class="phead"><div class="wrap"><div id="crumb">${crumb(items || [{ label: title }])}</div><h1>${esc(title)}</h1>${sub ? `<p>${esc(sub)}</p>` : ''}</div></div>`;
const section = (title, sub, body) => `<section class="section"><div class="wrap"><h2>${esc(title)}</h2>${sub ? `<p class="lead">${esc(sub)}</p>` : ''}<div class="body">${body}</div></div></section>`;
const searchBox = (key, ph) => `<label><span class="sr">${esc(ph)}</span><input type="search" data-s="${key}" placeholder="${esc(ph)}"></label>`;
const select = (key, label, opts) => `<label><span class="sr">${esc(label)}</span><select data-s="${key}"><option value="">${esc(label)}</option>${opts.map((o) => `<option value="${esc(o.v ?? o)}">${esc(o.l ?? o)}</option>`).join('')}</select></label>`;

const S = { bank: { q: '', sem: '', type: '' }, learn: { q: '', cat: '', lvl: '' }, sw: { q: '', cat: '' }, bc: { cat: '' } };
const has = (txt, q) => String(txt).toLowerCase().includes(q.toLowerCase());

/* ---------- BERANDA ---------- */
function pageHome() {
  const cats = [['/bank-soal', '📚', 'Bank Soal', 'Materi, dan latihan soal per semester.'], ['/belajar-gratis', '🎓', 'Belajar Gratis', 'Platform belajar dengan materi gratis atau freemium.'], ['/karier', '💼', 'Karier & Magang', 'Portal magang, bootcamp, checklist, dan persiapan interview.'], ['/software', '💻', 'Software', 'Tautan unduhan resmi dan panduan instalasi.']];
  const mini = (arr, f) => `<div class="grid g3">${arr.map((x) => `<div class="card"><h3>${esc(x.name)}</h3><p>${esc(f(x))}</p></div>`).join('')}</div>`;
  return `<div class="hero"><div class="wrap"><p class="tag">${esc(site.tagline)}</p><h1>Temukan Semua Kebutuhan Akademikmu di Satu Tempat.</h1><p class="sub">${esc(site.description)} SI-Corner menyediakan materi kuliah, latihan soal, sumber belajar, software, dan informasi karier.</p><div class="row">${btn('#/bank-soal', 'Jelajahi Materi', 'light')}${btn('#/karier', 'Mulai Persiapan Karier', 'ghost')}</div></div></div>`
    + section('Mau cari apa?', '', `<div class="grid g4">${cats.map((c) => `<a class="card" href="#${c[0]}"><span class="ico" aria-hidden="true">${c[1]}</span><h3>${c[2]}</h3><p>${c[3]}</p></a>`).join('')}</div>`)
    + section('Materi unggulan', 'Materi ditambahkan oleh pengelola. Belum ada materi unggulan yang dipublikasikan.', btn('#/bank-soal', 'Buka Bank Soal', 'outline'))
    + section('Rekomendasi platform belajar', '', mini(learningPlatforms.slice(0, 3), (p) => p.desc) + `<div class="row">${btn('#/belajar-gratis', 'Lihat semua platform', 'outline')}</div>`)
    + section('Software untuk mahasiswa', '', mini(software.slice(2, 5), (s) => s.use) + `<div class="row">${btn('#/software', 'Lihat semua software', 'outline')}</div>`)
    + section('Terus belajar, terus berkembang', 'Mulai dari satu langkah kecil: pilih satu keterampilan dan pelajari secara rutin.', btn('#/belajar-gratis', 'Mulai belajar'));
}

 
/* ===== BANK SOAL (BAGIAN YANG DIGANTI) — mulai dari sini sampai "BELAJAR GRATIS" ===== */
const driveId = (u) => (u.match(/drive\.google\.com\/file\/d\/([^/?#]+)/) || [])[1];
const dlUrl = (u) => (driveId(u) ? `https://drive.google.com/uc?export=download&id=${driveId(u)}` : u);
const isSoal = (d) => d.type === 'Latihan Soal';
const avail = (d) => !!d.url;
const docsOf = (id) => materials[id] || [];
const MISS = { 'Materi': 'Materi untuk mata kuliah ini belum tersedia. Silakan cek kembali nanti.', 'Latihan Soal': 'Latihan untuk mata kuliah ini belum tersedia. Silakan cek kembali nanti.' };
 
/* Level 1: daftar mata kuliah (ringkas, per semester) */
function pageBank() {
  return phead('Bank Soal & Materi Kuliah', 'Pilih mata kuliah, lalu buka materi atau latihan soalnya.', [{ label: 'Bank Soal' }])
    + `<div class="wrap section"><div class="toolbar">${searchBox('bank.q', 'Cari mata kuliah atau materi')}${select('bank.sem', 'Semua semester', Array.from({ length: 3 }, (_, i) => ({ v: i + 1, l: `Semester ${i + 1}` })))}${select('bank.type', 'Semua jenis dokumen', ['Materi', 'Latihan Soal'])}</div><div id="list" style="margin-top:18px" aria-live="polite"></div></div>`;
}
function subjectCard(s) {
  const d = docsOf(s.id).filter(avail), m = d.filter((x) => !isSoal(x)).length, l = d.filter(isSoal).length;
  return `<a class="card subj" href="#/bank-soal/${encodeURIComponent(s.id)}"><div class="subj-t"><h3>${esc(s.name)}</h3><span class="chev" aria-hidden="true">›</span></div><p class="cnt">${m || l ? `<span>📄 ${m} materi</span><span>📝 ${l} soal</span>` : badge('Belum tersedia', 'amber')}</p></a>`;
}
function listBank() {
  const { q, sem, type } = S.bank;
  const rows = subjects.filter((s) => !sem || s.semester === +sem).filter((s) => {
    const docs = docsOf(s.id);
    if (type && !docs.some((d) => avail(d) && (type === 'Latihan Soal' ? isSoal(d) : !isSoal(d)))) return false;
    return has(s.name, q) || docs.some((d) => has(d.title, q));
  });
  $('#list').innerHTML = rows.length
    ? [...new Set(rows.map((s) => s.semester))].sort((a, b) => a - b).map((n) => `<h2 class="semh">Semester ${n}</h2><div class="grid g3">${rows.filter((s) => s.semester === n).map(subjectCard).join('')}</div>`).join('')
    : empty(emptyBank(q, sem, type));
}
/* DITAMBAH: pesan kosong yang menyebut semester / jenis dokumen yang dipilih */
function emptyBank(q, sem, type) {
  if (!sem && !type) return q ? `Tidak ditemukan mata kuliah atau materi dengan kata kunci “${esc(q)}”.` : 'Belum ada mata kuliah yang tersedia.';
  const what = type === 'Latihan Soal' ? 'latihan soal' : type === 'Materi' ? 'materi' : 'materi maupun latihan soal';
  return `Belum ada ${what}${sem ? ` untuk <b>Semester ${esc(sem)}</b>` : ''}${q ? ` dengan kata kunci “${esc(q)}”` : ''}.`;
}
 
/* Level 2: halaman satu mata kuliah (tab Materi / Latihan Soal) */
function pageSubject(id) {
  const s = subjects.find((x) => x.id === id);
  if (!s) return phead('Mata kuliah tidak ditemukan', '', [{ label: 'Bank Soal', to: '/bank-soal' }]) + `<div class="wrap section">${empty('Mata kuliah tidak ditemukan.')}<div class="row">${btn('#/bank-soal', 'Kembali ke Bank Soal')}</div></div>`;
  S.tab = S.bank.type || 'Materi';
  return phead(s.name, s.description, [{ label: 'Bank Soal', to: '/bank-soal' }, { label: `Semester ${s.semester}` }, { label: s.name }])
    + `<div class="wrap section"><div style="margin-bottom:14px">${btn('#/bank-soal', '← Kembali ke daftar', 'outline sm')}</div><div id="tabs" class="tabs" role="tablist" aria-label="Jenis dokumen"></div><div id="list" aria-live="polite"></div></div>`;
}
function docRow(d) {
  const ok = avail(d);
  const dl = /^https?:/.test(d.url) ? btn(dlUrl(d.url), 'Unduh PDF', 'outline sm') : `<a class="btn outline sm" href="${esc(d.url)}" download>Unduh PDF</a>`;
  return `<div class="doc"><div class="dinfo"><span class="t">📄 ${esc(d.title)}</span> ${badge(ok ? 'Tersedia' : 'Belum tersedia', ok ? 'green' : 'amber')}${d.description ? `<p>${esc(d.description)}</p>` : ''}</div>${ok ? `<div class="dbtn">${btn(d.url, 'Lihat PDF', 'sm', true)}${dl}</div>` : ''}</div>`;
}
function listSubject(id) {
  const docs = docsOf(id), mat = docs.filter((d) => !isSoal(d)), soal = docs.filter(isSoal);
  $('#tabs').innerHTML = [['Materi', mat], ['Latihan Soal', soal]].map(([t, a]) => `<button role="tab" class="tab" aria-selected="${S.tab === t}" data-tab="${t}">${t} <span class="tc">${a.filter(avail).length}</span></button>`).join('');
  const cur = S.tab === 'Latihan Soal' ? soal : mat;
  $('#list').innerHTML = cur.length ? `<div class="dlist">${cur.map(docRow).join('')}</div>` : `<div class="empty">${MISS[S.tab]}</div>`;
}
/* ===== AKHIR BAGIAN BANK SOAL ===== */

/* ---------- BELAJAR GRATIS ---------- */
function pageLearn() {
  return phead('Belajar Gratis', 'Platform belajar dengan materi gratis atau freemium. Baca catatan biaya sebelum mendaftar.')
    + `<div class="wrap section"><div class="toolbar">${searchBox('learn.q', 'Cari platform atau keterampilan')}${select('learn.cat', 'Semua kategori', learnCategories)}${select('learn.lvl', 'Semua tingkat', ['Pemula', 'Menengah', 'Lanjutan'])}</div><div id="list" class="grid g3" style="margin-top:20px" aria-live="polite"></div></div>`;
}
function listLearn() {
  const { q, cat, lvl } = S.learn;
  const match = (p, c, l) => (!c || p.category === c) && (!l || p.level === l) && has(`${p.name} ${p.desc} ${p.skills.join(' ')}`, q);
  const r = learningPlatforms.filter((p) => match(p, cat, lvl));
  /* DIGANTI: pesan kosong yang menyebut filter yang dipilih */
  const parts = [];
  if (cat) parts.push(`kategori <b>${esc(cat)}</b>`);
  if (lvl) parts.push(`tingkat <b>${esc(lvl)}</b>`);
  if (q) parts.push(`kata kunci “${esc(q)}”`);
  const msg = parts.length ? `Belum ada platform untuk ${parts.join(' dengan ')}.` : 'Belum ada platform yang tersedia.';
  $('#list').innerHTML = r.length ? r.map((p) => `<div class="card"><div>${badge(p.category, 'blue')}${badge(p.cost, costTone(p.cost))}${badge(p.level)}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><p><b>Belajar:</b> ${esc(p.skills.join(', '))}</p><p><b>Biaya:</b> ${esc(p.note)}</p><div class="push">${btn(p.url, 'Kunjungi Platform', '', true)}</div></div>`).join('') : empty(msg);
}

/* ---------- SOFTWARE ---------- */
function pageSoftware() {
  return phead('Software & Tools Mahasiswa', 'Semua tautan unduhan mengarah ke situs resmi pengembang.')
    + `<div class="wrap section"><div class="toolbar two">${searchBox('sw.q', 'Cari software')}${select('sw.cat', 'Semua kategori', softwareCategories)}</div><div id="list" class="grid g3" style="margin-top:20px" aria-live="polite"></div></div>`;
}
function listSoftware() {
  const { q, cat } = S.sw;
  const r = software.map((s, i) => ({ s, i })).filter(({ s }) => (!cat || s.category === cat) && has(`${s.name} ${s.use}`, q));
  $('#list').innerHTML = r.length ? r.map(({ s, i }) => `<div class="card">${badge(s.category, 'blue')}<h3>${esc(s.name)}</h3><p>${esc(s.use)}</p><p><b>OS:</b> ${esc(s.os)}</p><p><b>Lisensi:</b> ${esc(s.license)}</p><p style="color:var(--green);font-size:.82rem">🛡 Unduh hanya dari situs resmi; hindari crack atau mirror.</p><div class="push row" style="margin-top:0">${btn(s.download, 'Download Resmi', '', true)}<button class="btn outline" data-guide="${i}">Panduan Instalasi</button></div></div>`).join('') : empty('Software tidak ditemukan.');
}
function openGuide(i) {
  const s = software[i];
  const steps = [['Persiapan', ['Pastikan ruang penyimpanan cukup dan koneksi stabil.', `Sistem operasi yang didukung: ${s.os}.`, 'Gunakan akun Administrator di Windows bila diminta.']], ['Unduh installer', [`Buka situs resmi: ${s.download}`, 'Pilih versi sesuai sistem operasi (Windows 64-bit pada kebanyakan laptop).', 'Jangan mengunduh dari situs tidak resmi atau mirror.']], ['Jalankan installer', ['Klik dua kali file unduhan; izinkan jika muncul User Account Control.', 'Ikuti petunjuk di layar (Next).']], ['Opsi yang perlu diperhatikan', s.options], ['Selesaikan & uji', [s.test]], ['Masalah umum', s.troubleshoot]];
  $('#modal').innerHTML = `<div class="modal-bg" data-close><div class="modal" role="dialog" aria-modal="true" aria-label="Panduan instalasi ${esc(s.name)}"><h2>Panduan instalasi: ${esc(s.name)}</h2><div class="note">Langkah dan tampilan dapat berbeda antarversi. Panduan mengutamakan Windows; cocokkan dengan dokumentasi resmi.</div>${steps.map(([t, it]) => `<h3>${esc(t)}</h3><ul>${it.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`).join('')}<div class="row">${btn(s.download, 'Download Resmi', '', true)}${btn(s.docs, 'Dokumentasi resmi', 'outline', true)}<button class="btn outline" data-close>Tutup</button></div></div></div>`;
  $('#modal .btn.outline:last-child').focus();
}

/* ---------- KARIER ---------- */
const CK = 'si-corner-checklist';
const getDone = () => { try { return JSON.parse(localStorage.getItem(CK)) || {}; } catch { return {}; } };
const setDone = (d) => { try { localStorage.setItem(CK, JSON.stringify(d)); } catch {} };
function pageCareer() {
  const done = getDone();
  const total = checklist.reduce((n, p) => n + p.items.length, 0), count = Object.values(done).filter(Boolean).length;
  return phead('Karier, Bootcamp & Magang', 'Persiapan karier sejak dini. Info pendaftaran selalu perlu dicek di situs resmi.')
    + section('Informasi bootcamp', "Biaya dan status berubah-ubah. Yang bertanda 'Perlu verifikasi' belum dipastikan aktif.", `<div class="sel-one" style="margin-bottom:14px">${select('bc.cat', 'Semua kategori', bootcampCategories)}</div><div id="list" class="grid g3" aria-live="polite"></div>`)
    + section('Portal magang & lowongan', '', `<div class="grid g3">${portals.map((p) => `<div class="card"><div>${badge(p.type)}${p.status ? badge(p.status, 'amber') : ''}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><p><b>Umumnya:</b> ${esc(p.req)}</p><div class="push">${btn(p.url, 'Cari Peluang', '', true)}</div></div>`).join('')}</div><h3 style="margin-top:28px;color:var(--navy)">Pengumuman pendaftaran</h3><div class="grid">${announcements.length ? announcements.map((a) => `<div class="card"><h3>${esc(a.title)}</h3><p>${esc(a.openDate)} s.d. ${esc(a.closeDate)}</p><div>${btn(a.source, 'Sumber resmi', 'outline', true)}</div></div>`).join('') : empty('Belum ada pengumuman terverifikasi. Cek portal resmi di atas.')}</div>`)
    + section('Timeline & checklist persiapan magang', 'Ini panduan umum, bukan jadwal resmi semua program.', `<p id="prog-text" aria-live="polite">Selesai ${count} dari ${total} langkah</p><div class="progress"><div id="prog" style="width:${(count / total) * 100}%"></div></div><div class="grid g2">${checklist.map((p, pi) => `<div class="card"><h3>${esc(p.phase)}</h3>${p.items.map((it, ii) => { const id = `${pi}-${ii}`; return `<label class="check"><input type="checkbox" data-ck="${id}" ${done[id] ? 'checked' : ''}><span>${esc(it)}</span></label>`; }).join('')}</div>`).join('')}</div><div class="row"><button class="btn outline" id="resetCk">Reset checklist</button></div>`)
    + section('Persiapan interview & karier', 'Contoh bersifat edukatif dan perlu disesuaikan dengan pengalamanmu. Tidak ada jaminan lolos seleksi.', guides.map((g) => `<details><summary>${esc(g.title)}</summary>${g.body.map((t) => `<p>${esc(t)}</p>`).join('')}</details>`).join('') + `<div class="row">${btn('#/belajar-gratis', 'Belajar keterampilan', 'outline')}</div>`);
}
function listBootcamp() {
  const r = bootcamps.filter((b) => !S.bc.cat || b.category === S.bc.cat);
  $('#list').innerHTML = r.length ? r.map((b) => `<div class="card">${badge(b.category, 'blue')}<h3>${esc(b.program)}</h3><p>${esc(b.org)} · ${esc(b.focus)}</p><p><b>Biaya:</b> ${esc(b.costType)}</p><p><b>Status:</b> ${esc(b.status)}</p><div class="push">${btn(b.url, 'Lihat di situs resmi', '', true)}</div></div>`).join('') : empty('Belum ada program pada kategori ini.');
}
function updateProgress() {
  const d = getDone(), total = checklist.reduce((n, p) => n + p.items.length, 0), c = Object.values(d).filter(Boolean).length;
  $('#prog').style.width = `${(c / total) * 100}%`; $('#prog-text').textContent = `Selesai ${c} dari ${total} langkah`;
}

/* ---------- TENTANG ---------- */
function pageAbout() {
  const c = site.contact, any = c.email || c.instagram || c.whatsapp;
  return phead('Tentang SI-Corner', site.description)
    + section('Latar belakang & tujuan', '', '<p>SI-Corner dibuat agar mahasiswa Sistem Informasi tidak perlu mencari materi, sumber belajar, software, dan info karier di banyak tempat. Website ini membantu mahasiswa lintas angkatan menemukan materi sesuai semester, memilih platform belajar, mempersiapkan magang, dan memasang software perkuliahan dari sumber resmi.</p>')
    + section('Cara menggunakan', '', `<div class="grid g3">${[['Cari materi', 'Buka Bank Soal, pilih semester dan jenis dokumen, lalu klik Lihat PDF.'], ['Belajar & karier', 'Pilih platform belajar atau portal magang, lalu kunjungi situs resminya.'], ['Pasang software', 'Buka halaman Software, unduh dari tautan resmi, dan ikuti panduan instalasi.']].map(([t, d]) => `<div class="card"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`)
    + section('Kontak pengelola', '', any ? `<ul>${c.email ? `<li>Email: ${esc(c.email)}</li>` : ''}${c.instagram ? `<li>Instagram: ${esc(c.instagram)}</li>` : ''}${c.whatsapp ? `<li>WhatsApp: ${esc(c.whatsapp)}</li>` : ''}</ul>` : '<p>Kontak belum diisi. Edit di js/data/site.js.</p>');
}

/* ---------- ROUTER & EVENTS ---------- */
const routes = { '/': [pageHome, 'Beranda'], '/bank-soal': [pageBank, 'Bank Soal', listBank], '/belajar-gratis': [pageLearn, 'Belajar Gratis', listLearn], '/karier': [pageCareer, 'Karier & Magang', listBootcamp], '/software': [pageSoftware, 'Software', listSoftware], '/tentang': [pageAbout, 'Tentang'] };
let currentList = null;
function render() {
  const path = location.hash.replace(/^#/, '') || '/';
  const sub = path.match(/^\/bank-soal\/(.+)$/);
  let page, title, list;
  if (sub) { const id = decodeURIComponent(sub[1]); page = () => pageSubject(id); title = 'Bank Soal'; list = () => listSubject(id); }
  else [page, title, list] = routes[path] || routes['/'];
  $('#nav').innerHTML = nav.map((n) => `<a href="#${n.to}" ${(n.to === '/' ? path === '/' : path.startsWith(n.to)) ? 'aria-current="page"' : ''}>${esc(n.label)}</a>`).join('');
  $('#nav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false');
  $('#main').innerHTML = page();
  document.querySelectorAll('[data-s]').forEach((el) => { const [g, k] = el.dataset.s.split('.'); el.value = S[g][k]; });
  document.title = `${title}`;
  currentList = list || null; if (list) list();
  window.scrollTo(0, 0);
}
function renderFooter() {
  const c = site.contact, any = c.email || c.instagram || c.whatsapp;
  $('#footer').innerHTML = `<div class="wrap cols"><div><h3>${esc(site.name)}</h3><p>${esc(site.tagline)}</p><p>${esc(site.organisasi)}</p></div><nav aria-label="Navigasi footer"><h3>Navigasi</h3><ul>${nav.map((n) => `<li><a href="#${n.to}">${esc(n.label)}</a></li>`).join('')}</ul></nav><div><h3>Kontak pengelola</h3>${any ? `<ul>${c.email ? `<li>${esc(c.email)}</li>` : ''}${c.instagram ? `<li>${esc(c.instagram)}</li>` : ''}${c.whatsapp ? `<li>${esc(c.whatsapp)}</li>` : ''}</ul>` : '<p>Kontak belum diisi pengelola.</p>'}<p>Sumber informasi: situs resmi masing-masing penyedia. Cek kembali info biaya dan pendaftaran di sumbernya.</p></div></div>`;
}
function setState(el) { const [g, k] = el.dataset.s.split('.'); S[g][k] = el.value; if (currentList) currentList(); }
document.addEventListener('input', (e) => { if (e.target.dataset.s) setState(e.target); if (e.target.dataset.ck) { const d = getDone(); d[e.target.dataset.ck] = e.target.checked; setDone(d); updateProgress(); } });
document.addEventListener('change', (e) => { if (e.target.dataset.s && e.target.tagName === 'SELECT') setState(e.target); });
document.addEventListener('click', (e) => {
  const tb = e.target.closest('[data-tab]'); if (tb) { S.tab = tb.dataset.tab; if (currentList) currentList(); return; } /* DITAMBAH: pindah tab */
  const g = e.target.closest('[data-guide]'); if (g) return openGuide(+g.dataset.guide);
  const c = e.target.closest('[data-close]'); if (c && (e.target === c || c.tagName === 'BUTTON')) $('#modal').innerHTML = '';
  if (e.target.id === 'resetCk') { setDone({}); render(); }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') $('#modal').innerHTML = ''; });
$('#menuBtn').addEventListener('click', () => { const o = $('#nav').classList.toggle('open'); $('#menuBtn').setAttribute('aria-expanded', o); });
window.addEventListener('hashchange', render);
renderFooter(); render();

