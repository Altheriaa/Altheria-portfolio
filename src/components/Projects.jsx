import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LuExternalLink, LuChevronLeft, LuChevronRight, LuX, LuLayers, LuServer, LuCalendar, LuGlobe } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa6'

// Automatically import and bundle all project images for production builds
const projectImages = import.meta.glob('../assets/Project/**/*.{jpeg,jpg,png,webp,svg,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

const getProjectImg = (path) => {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('/assets/')) return path
  const normalizedKey = path.replace(/^src\//, '../')
  return projectImages[normalizedKey] || path
}

const allProjects = [
  {
    id: 'proj-012',
    tag: 'ELEARNING_PBL',
    name: 'EDUGENZI — PROJECT BASED LEARNING (PBL) LMS',
    desc: 'PLATFORM E-LEARNING PROJECT BASED LEARNING · MULTI-ROLE (ADMIN, MENTOR, PESERTA), ENROLLMENT & SERTIFIKASI',
    fullDesc: 'Platform e-learning berbasis Project Based Learning untuk Edugenzi Banda Aceh. Dibangun dengan Laravel, sistem ini mengelola pelatihan keahlian digital (coding, AI, desain grafis) dengan sistem multi-role, manajemen enrollment, penugasan proyek, dan penerbitan sertifikat digital.',
    year: '2025 - PRESENT',
    role: 'Fullstack Developer & System Architect',
    client: 'Edugenzi Banda Aceh',
    stack: ['LARAVEL', 'MYSQL', 'MULTI-ROLE RBAC', 'PBL ENGINE', 'TAILWIND CSS'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Edugenzi/2.jpeg',
    gallery: [
      'src/assets/Project/Edugenzi/2.jpeg',
      'src/assets/Project/Edugenzi/4.jpeg',
      'src/assets/Project/Edugenzi/3.jpeg',
      'src/assets/Project/Edugenzi/5.jpeg',
      'src/assets/Project/Edugenzi/1.jpeg'
    ],
    features: [
      'Multi-Role RBAC: Super Admin, Mentor, dan Peserta Didik dengan hak akses berbeda',
      'Penugasan proyek riil (Coding, AI, Desain 3D), submission, dan evaluasi hasil kerja',
      'Manajemen enrollment, durasi kelas, dan pemantauan status pembelajaran',
      'Penerbitan sertifikat digital dengan validasi dari mentor'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://edugenzi.my.id',
  },
  {
    id: 'proj-011',
    tag: 'GOV_HELPDESK',
    name: 'E-HELPDESK IT SUPPORT — DINAS PENDIDIKAN ACEH',
    desc: 'SISTEM MANAJEMEN TIKET IT SUPPORT INSTANSI · FILAMENT PHP, REALTIME CHAT, WEBHOOK & NOTIFIKASI FONNTE WA',
    fullDesc: 'Sistem E-Helpdesk & IT Support untuk Dinas Pendidikan Aceh. Dibangun dengan Laravel & Filament PHP, mencakup manajemen tiket berbasis Kanban, live chat antara pegawai dan teknisi, serta notifikasi WhatsApp otomatis via Fonnte Gateway.',
    year: '2025 - PRESENT',
    role: 'Fullstack Developer & System Architect',
    client: 'Dinas Pendidikan Aceh',
    stack: ['LARAVEL', 'FILAMENT PHP', 'FONNTE WA API', 'WEBHOOKS', 'REALTIME CHAT', 'MYSQL'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Helpdesk/2.jpeg',
    gallery: [
      'src/assets/Project/Helpdesk/2.jpeg',
      'src/assets/Project/Helpdesk/3.jpeg',
      'src/assets/Project/Helpdesk/4.jpeg',
      'src/assets/Project/Helpdesk/1.jpeg'
    ],
    features: [
      'Manajemen tiket dengan Kanban board, tracking status (Baru, Diproses, Selesai)',
      'Notifikasi WhatsApp otomatis via Fonnte Gateway & Webhook untuk update status tiket',
      'Live chat antara pegawai dan teknisi IT untuk koordinasi troubleshooting',
      'Dashboard analitik dan rekapitulasi laporan tiket dengan fitur Export PDF'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://itsupportaceh.my.id',
  },
  {
    id: 'proj-010',
    tag: 'ACADEMIC_PORTAL',
    name: 'SISTEM INFORMASI KKN TERPADU UNIVERSITAS ABULYATAMA',
    desc: 'PORTAL AKADEMIK KKN TERPADU · INTEGRASI RESTFUL API SIAKAD, PAYMENT GATEWAY MIDTRANS & PLOTTING KELOMPOK',
    fullDesc: 'Sistem Informasi KKN Terpadu Universitas Abulyatama berbasis Laravel, Inertia.js, dan Vue.js. Terintegrasi dengan API SIAKAD untuk verifikasi data mahasiswa, payment gateway Midtrans untuk pembayaran pendaftaran, serta fitur plotting kelompok dan penugasan Dosen Pembimbing Lapangan (DPL).',
    year: '2025 - PRESENT',
    role: 'Fullstack Developer & System Architect',
    client: 'Universitas Abulyatama',
    stack: ['LARAVEL', 'INERTIA.JS', 'VUE.JS', 'MIDTRANS', 'REST API SIAKAD', 'MYSQL'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Sistem KKN/1.jpeg',
    gallery: [
      'src/assets/Project/Sistem KKN/1.jpeg',
      'src/assets/Project/Sistem KKN/2.jpeg',
      'src/assets/Project/Sistem KKN/3.jpeg',
      'src/assets/Project/Sistem KKN/4.jpeg',
      'src/assets/Project/Sistem KKN/5.jpeg',
      'src/assets/Project/Sistem KKN/6.jpeg'
    ],
    features: [
      'Integrasi API SIAKAD untuk validasi syarat SKS dan data mahasiswa aktif',
      'Payment gateway Midtrans (QRIS, VA Bank, E-Wallet) untuk pembayaran pendaftaran KKN',
      'Plotting kelompok mahasiswa, wilayah pengabdian, dan penugasan Dosen Pembimbing (DPL)',
      'Arsitektur SPA dengan Laravel, Inertia.js, dan Vue.js'
    ],
    github: 'https://github.com/altheriaa',
    live: '#',
  },
  {
    id: 'proj-009',
    tag: 'BARBERSHOP_SIM',
    name: 'MARKO BARBERSHOP — SIM & RESERVATION',
    desc: 'SISTEM INFORMASI MANAJEMEN BARBERSHOP · RESERVASI ONLINE, CHECK-IN QR CODE & NOTIFIKASI WHATSAPP GATEWAY',
    fullDesc: 'Sistem Informasi Manajemen dan reservasi online untuk Marko Barbershop. Dibangun dengan Laravel & Blade, memungkinkan pelanggan booking jadwal, check-in via QR Code, dan menerima notifikasi antrian langsung ke WhatsApp via WhatsApp Gateway API.',
    year: '2024 - 2025',
    role: 'Fullstack Developer',
    client: 'Marko Barbershop',
    stack: ['LARAVEL', 'BLADE', 'MYSQL', 'WA GATEWAY API', 'QR CODE', 'TAILWIND'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Marko Barber/1.jpeg',
    gallery: [
      'src/assets/Project/Marko Barber/1.jpeg',
      'src/assets/Project/Marko Barber/2.jpeg',
      'src/assets/Project/Marko Barber/3.jpeg',
      'src/assets/Project/Marko Barber/4.jpeg',
      'src/assets/Project/Marko Barber/5.jpeg',
      'src/assets/Project/Marko Barber/6.jpeg',
      'src/assets/Project/Marko Barber/7.jpeg',
      'src/assets/Project/Marko Barber/8.jpeg'
    ],
    features: [
      'Booking jadwal online dengan pilihan kapster dan jenis layanan',
      'Check-in mandiri di lokasi menggunakan QR Code',
      'Notifikasi WhatsApp otomatis untuk konfirmasi booking dan pengingat antrian',
      'Dashboard admin untuk data pelanggan, performa kapster, dan rekapitulasi omset harian'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://markobarber.shop',
  },
  {
    id: 'proj-008',
    tag: 'ELEARNING_APP',
    name: 'E-PLANT UNAYA E-LEARNING',
    desc: 'PLATFORM E-LEARNING BERBASIS WEB · LARAVEL INERTIA VUE JS & MANAJEMEN MATERI PEMBELAJARAN',
    fullDesc: 'Platform e-learning web E-Plant Universitas Abulyatama untuk mahasiswa biologi dan sains pertanian. Dibangun dengan Laravel, Inertia.js, dan Vue.js, mencakup modul materi perkuliahan, kuis evaluasi, dan pelacakan progres belajar.',
    year: '2024 - PRESENT',
    role: 'Fullstack Developer',
    client: 'Universitas Abulyatama',
    stack: ['LARAVEL', 'INERTIA.JS', 'VUE.JS', 'TAILWIND CSS', 'MYSQL'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/E-Plans/Plans 1.jpeg',
    gallery: [
      'src/assets/Project/E-Plans/Plans 1.jpeg',
      'src/assets/Project/E-Plans/Plans 2.jpeg',
      'src/assets/Project/E-Plans/Plans 3.jpeg',
      'src/assets/Project/E-Plans/Plans 4.jpeg',
      'src/assets/Project/E-Plans/Plans 5.jpeg'
    ],
    features: [
      'Arsitektur SPA dengan Laravel, Inertia.js, dan Vue.js',
      'Manajemen materi pembelajaran dengan fitur unduh dan baca langsung',
      'Kuis dan latihan interaktif untuk evaluasi mahasiswa',
      'Dashboard progres belajar dan manajemen autentikasi pengguna'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://eplant-unaya.bio/',
  },
  {
    id: 'proj-007',
    tag: 'ECOMMERCE_PAYMENT',
    name: 'BAY COFFEE E-COMMERCE',
    desc: 'PLATFORM E-COMMERCE KOPI SPESIALTI · PAYMENT GATEWAY MIDTRANS, INERTIA VUE & CMS FILAMENT',
    fullDesc: 'Platform e-commerce Bay Coffee untuk penjualan kopi spesialti online. Terintegrasi dengan Midtrans (QRIS, E-Wallet, VA Bank) dengan notifikasi webhook, frontend SPA berbasis Laravel Inertia.js & Vue.js, dan panel admin Filament PHP.',
    year: '2024 - 2025',
    role: 'Fullstack Developer',
    client: 'Bay Coffee Specialty',
    stack: ['LARAVEL', 'INERTIA.JS', 'VUE.JS', 'FILAMENT PHP', 'MIDTRANS', 'MYSQL'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Bay Coffee/Kopi 1.jpeg',
    gallery: [
      'src/assets/Project/Bay Coffee/Kopi 1.jpeg',
      'src/assets/Project/Bay Coffee/Kopi 2.jpeg',
      'src/assets/Project/Bay Coffee/Kopi 3.jpeg',
      'src/assets/Project/Bay Coffee/Kopi 4.jpeg'
    ],
    features: [
      'Payment gateway Midtrans (QRIS, Virtual Account, GoPay/ShopeePay) dengan webhook otomatis',
      'Frontend SPA dengan Inertia.js dan Vue.js',
      'Panel Admin Filament PHP untuk manajemen katalog, stok, dan status pesanan',
      'Keranjang belanja, kalkulator pesanan, dan invoice digital'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://baycoffee.shop',
  },
  {
    id: 'proj-001',
    tag: 'PRODUCTION_WEB',
    name: 'WEBSITE FAKULTAS TEKNIK UNIVERSITAS ABULYATAMA',
    desc: 'WEBSITE RESMI FAKULTAS TEKNIK UNIVERSITAS ABULYATAMA · CMS FILAMENT & SERVER ADMIN',
    fullDesc: 'Website resmi Fakultas Teknik Universitas Abulyatama dengan frontend React dan backend CMS berbasis Filament PHP. Digunakan untuk publikasi berita, profil program studi, akreditasi, data kemahasiswaan, dan kerja sama instansi.',
    year: '2024 - PRESENT',
    role: 'Fullstack Developer & Server Administrator',
    client: 'Fakultas Teknik Universitas Abulyatama',
    stack: ['REACT', 'FILAMENT PHP', 'LARAVEL', 'MYSQL', 'UBUNTU'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Website Teknik/Teknik 1.jpeg',
    gallery: [
      'src/assets/Project/Website Teknik/Teknik 1.jpeg',
      'src/assets/Project/Website Teknik/Teknik 2.jpeg',
      'src/assets/Project/Website Teknik/Teknik 3.jpeg'
    ],
    features: [
      'Frontend responsif berbasis React & Tailwind CSS',
      'Panel Admin Filament PHP untuk manajemen berita, artikel, dan konten fakultas',
      'Database MySQL dengan performa kueri yang optimal',
      'Deployment server produksi Linux Ubuntu + Nginx',
      'Pelacak statistik kunjungan website harian'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://teknik.unaya.ac.id',
  },
  {
    id: 'proj-003',
    tag: 'STARTUP_AWARD',
    name: 'SAMPAH.SHOP — BANK SAMPAH INDUK SADAR MANDIRI',
    desc: 'PLATFORM DIGITAL STARTUP PENGELOLAAN BANK SAMPAH · FILAMENT CMS, BLADE & DILOMBAKAN DI ICOMPEX 2025',
    fullDesc: 'Aplikasi web Bank Sampah Sadar Induk Mandiri Banda Aceh (sampah.shop) untuk digitalisasi pencatatan tabungan sampah, konversi nilai ekonomi limbah, dan monitoring setoran daur ulang. Dibangun dengan Laravel, Filament PHP, dan Blade. Dilombakan di iCompEx 2025, Kedah, Malaysia.',
    year: '2024 - 2025',
    role: 'Fullstack Developer',
    client: 'Bank Sampah Sadar Induk Mandiri Banda Aceh',
    stack: ['LARAVEL', 'FILAMENT PHP', 'BLADE', 'MYSQL', 'TAILWIND'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/Sampah Shop/Sampah 1.jpeg',
    gallery: [
      'src/assets/Project/Sampah Shop/Sampah 1.jpeg',
      'src/assets/Project/Sampah Shop/Sampah 2.jpeg',
      'src/assets/Project/Sampah Shop/Sampah 3.jpeg'
    ],
    features: [
      'Kalkulator nilai setoran sampah berdasarkan bobot, kategori, dan jenis material',
      'Panel Admin Filament PHP untuk data nasabah dan manajemen buku kas',
      'Pelacakan saldo tabungan dan histori penarikan dana nasabah',
      'Dilombakan di kompetisi inovasi internasional iCompEx 2025, Kedah, Malaysia'
    ],
    github: 'https://github.com/altheriaa',
    live: 'https://sampah.shop',
  },
  {
    id: 'proj-005',
    tag: 'VILLAGE_CMS',
    name: 'WEBSITE DESA AJE PAGAR AIR ACEH BESAR',
    desc: 'SISTEM INFORMASI DESA BERBASIS CMS FILAMENT · PENGELOLAAN ANGGARAN & LAPORAN KEGIATAN',
    fullDesc: 'Website dan sistem informasi Desa Aje Pagar Air untuk digitalisasi layanan gampong, publikasi transparansi anggaran dana desa, dan arsip kegiatan masyarakat.',
    year: '2025 - PRESENT',
    role: 'Backend Developer',
    client: 'Pemerintah Desa Aje Pagar Air',
    stack: ['LARAVEL', 'FILAMENT', 'MYSQL', 'TAILWIND'],
    category: 'BACKEND',
    img: 'src/assets/Project/Desa Aje/Aje 1.jpeg',
    gallery: [
      'src/assets/Project/Desa Aje/Aje 1.jpeg',
      'src/assets/Project/Desa Aje/Aje 2.jpeg',
      'src/assets/Project/Desa Aje/Aje 3.jpeg'
    ],
    features: [
      'Panel CMS Filament yang intuitif untuk admin desa',
      'Modul laporan transparansi anggaran & program kerja desa',
      'Antarmuka ramah pengguna bagi warga masyarakat'
    ],
    github: '-',
    live: 'https://desaajedigital.id/',
  },
  {
    id: 'proj-006',
    tag: 'INTERNATIONAL_AWARD',
    name: 'ECO-FRIENDLY SYSTEM — ICOMPEX 2025',
    desc: 'WEB APP RISET LIMBAH KACA · 2ND PLACE ICOMPEX 2025 MALAYSIA & BEST POSTER AWARD',
    fullDesc: 'Web application pendukung riset ubin lantai ramah lingkungan dari daur ulang limbah kaca sebagai substitusi pasir. Meraih Juara 2 (CLASS B - Construction & Materials) di iCompEx 2025 Polimas Kedah, Malaysia, dan Best Poster Award 2025.',
    year: '2025',
    role: 'Fullstack Developer & Speaker',
    client: 'Research & Innovation Team',
    stack: ['LARAVEL', 'MYSQL', 'DATA COLLECTION', 'CHART ENGINE', 'BLADE'],
    category: 'FULLSTACK',
    img: 'src/assets/Project/iCompex/iCompex 1.jpeg',
    gallery: [
      'src/assets/Project/iCompex/iCompex 1.jpeg',
      'src/assets/Project/iCompex/iCompex 2.jpeg',
      'src/assets/Project/iCompex/iCompex 3.jpeg',
      'src/assets/Project/iCompex/iCompex 4.jpeg',
      'src/assets/Project/iCompex/iCompex 5.jpeg'
    ],
    features: [
      'Juara 2 (CLASS B - Construction & Materials) di iCompEx 2025, Polimas Kedah, Malaysia',
      'Best Poster Award — Seminar Serantau Isu-Isu Komuniti 2025',
      'Modul pengumpulan data riset dan kalkulasi substitusi material ramah lingkungan',
      'Visualisasi grafik dan statistik reduksi limbah kaca'
    ],
    github: 'https://teknik.unaya.ac.id/berita/fakultas-teknik-abulyatama-raih-juara-2-icompex-2025-di-malaysia',
    live: '',
  },
]

const filters = ['ALL', 'FULLSTACK', 'BACKEND']

export default function Projects() {
  const [filter, setFilter] = useState('ALL')
  const [startIndex, setStartIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const filtered = filter === 'ALL' ? allProjects : allProjects.filter(p => p.category === filter)
  const total = filtered.length

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1120) {
        setCardsToShow(2)
      } else {
        setCardsToShow(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      setActiveGalleryIdx(0)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  // Circular next / prev
  const nextSlide = () => {
    setDirection(1)
    setStartIndex(prev => (prev + 1) % total)
  }

  const prevSlide = () => {
    setDirection(-1)
    setStartIndex(prev => (prev - 1 + total) % total)
  }

  const handleFilter = (f) => {
    setFilter(f)
    setStartIndex(0)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) {
      nextSlide()
    } else if (distance < -50) {
      prevSlide()
    }
  }

  // Get dynamic number of circular items based on screen size
  const count = Math.min(cardsToShow, total)
  const visibleProjects = Array.from({ length: count }, (_, offset) => {
    const idx = (startIndex + offset) % total
    return { ...filtered[idx], displayIndex: (startIndex + offset) % total }
  })

  return (
    <section id="work" className="projects">
      <div className="projects__header">
        <div>
          <span className="section-label">WORK_ARCHIVE // 03</span>
          <motion.h2
            className="projects__title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            EXPERIENCE & <br />PROJECTS.
          </motion.h2>
        </div>

        <div className="projects__header-right">
          <span className="projects__count">
            LOOP [ {String(startIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} ]
          </span>
          <div className="projects__nav-arrows">
            <button className="carousel-btn" onClick={prevSlide} aria-label="Previous Project">
              <LuChevronLeft size={20} />
            </button>
            <button className="carousel-btn" onClick={nextSlide} aria-label="Next Project">
              <LuChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="projects__filter">
        {filters.map(f => (
          <button
            key={f}
            className={`projects__filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => handleFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Infinite Loop Responsive Carousel Container */}
      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-side-nav carousel-side-prev" onClick={prevSlide} aria-label="Previous">
          <LuChevronLeft size={24} />
        </button>

        <div className="carousel-grid-container">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={`${filter}-${startIndex}-${cardsToShow}`}
              className="carousel-cards-row"
              style={{ gridTemplateColumns: `repeat(${visibleProjects.length}, minmax(0, 1fr))` }}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {visibleProjects.map((proj, i) => (
                <div key={`${proj.id}-${i}`} className="carousel-card-col">
                  <div
                    className="project-card"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <div className="project-card__img">
                      <img src={getProjectImg(proj.img)} alt={proj.name} loading="lazy" decoding="async" />
                      <div className="project-card__tag">{proj.tag}</div>
                      <div className="project-card__hover-overlay">
                        <span>OPEN DETAILS ◈</span>
                      </div>
                    </div>

                    <div className="project-card__body">
                      <div className="project-card__info">
                        <div className="project-card__index">
                          ARCHIVE-{String(proj.displayIndex + 1).padStart(2, '0')}
                        </div>
                        <div className="project-card__name">{proj.name}</div>
                        <div className="project-card__desc">{proj.desc}</div>
                      </div>

                      <div className="project-card__bottom">
                        <div className="project-card__meta">
                          <div className="project-card__meta-left">YR: {proj.year}</div>
                          <div className="project-card__tech">
                            {proj.stack.map(t => <span key={t}>{t}</span>)}
                          </div>
                        </div>

                        <div className="project-card__actions" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            className="project-card__action"
                            onClick={() => setSelectedProject(proj)}
                          >
                            <span>VIEW DETAILS</span>
                            <LuExternalLink size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="carousel-side-nav carousel-side-next" onClick={nextSlide} aria-label="Next">
          <LuChevronRight size={24} />
        </button>
      </div>

      {/* Progress Dots Indicator */}
      <div className="carousel-pagination">
        {filtered.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${startIndex === idx ? 'active' : ''}`}
            onClick={() => {
              setDirection(idx > startIndex ? 1 : -1)
              setStartIndex(idx)
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          PROJECT DETAIL MODAL & GALLERY
      ═══════════════════════════════════════════════════════════════════════ */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
              <motion.div
                className="project-modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Modal Top Bar */}
                <div className="project-modal__header">
                  <div className="project-modal__header-left">
                    <span className="mono">PROJECT_DETAILS // {selectedProject.tag}</span>
                    <h3 className="project-modal__title">{selectedProject.name}</h3>
                  </div>
                  <button
                    className="project-modal__close-btn"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                  >
                    <LuX size={20} />
                  </button>
                </div>

                {/* Modal Body Grid */}
                <div className="project-modal__body">
                  {/* Left: Interactive Image Gallery */}
                  <div className="project-modal__gallery">
                    <div className="project-modal__main-image-frame">
                      <img
                        src={getProjectImg(selectedProject.gallery ? selectedProject.gallery[activeGalleryIdx] : selectedProject.img)}
                        alt={selectedProject.name}
                        className="project-modal__main-image"
                        decoding="async"
                      />
                      <div className="project-modal__image-badge">
                        PHOTO {activeGalleryIdx + 1} / {selectedProject.gallery ? selectedProject.gallery.length : 1}
                      </div>
                    </div>

                    {/* Thumbnail Row */}
                    {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                      <div className="project-modal__thumbnails">
                        {selectedProject.gallery.map((imgUrl, tIdx) => (
                          <div
                            key={tIdx}
                            className={`project-modal__thumb ${activeGalleryIdx === tIdx ? 'active' : ''}`}
                            onClick={() => setActiveGalleryIdx(tIdx)}
                          >
                            <img src={getProjectImg(imgUrl)} alt={`Thumbnail ${tIdx + 1}`} loading="lazy" decoding="async" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Specifications & Description */}
                  <div className="project-modal__details">
                    <div className="project-modal__meta-box">
                      <div className="project-modal__meta-item">
                        <span className="project-modal__meta-key">
                          <LuCalendar size={13} /> TIMELINE
                        </span>
                        <span className="project-modal__meta-val">{selectedProject.year}</span>
                      </div>
                      <div className="project-modal__meta-item">
                        <span className="project-modal__meta-key">
                          <LuServer size={13} /> ROLE
                        </span>
                        <span className="project-modal__meta-val">{selectedProject.role || 'Fullstack Developer'}</span>
                      </div>
                      <div className="project-modal__meta-item">
                        <span className="project-modal__meta-key">
                          <LuLayers size={13} /> CLIENT / ORG
                        </span>
                        <span className="project-modal__meta-val">{selectedProject.client || 'Internal Project'}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="project-modal__tech-section">
                      <div className="project-modal__section-heading">TECH STACK</div>
                      <div className="project-modal__tech-tags">
                        {selectedProject.stack.map(tech => (
                          <span key={tech} className="project-modal__tech-pill">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="project-modal__desc-section">
                      <div className="project-modal__section-heading">OVERVIEW</div>
                      <p className="project-modal__desc-text">
                        {selectedProject.fullDesc || selectedProject.desc}
                      </p>
                    </div>

                    {/* Key Features */}
                    {selectedProject.features && (
                      <div className="project-modal__features-section">
                        <div className="project-modal__section-heading">KEY IMPLEMENTATION</div>
                        <ul className="project-modal__features-list">
                          {selectedProject.features.map((feat, fIdx) => (
                            <li key={fIdx}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="project-modal__actions">
                      {selectedProject.live !== '#' && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                          style={{ flex: 1, justifyContent: 'center' }}
                        >
                          <span>VISIT LIVE WEBSITE</span>
                          <LuGlobe size={15} style={{ position: 'relative', zIndex: 1 }} />
                        </a>
                      )}
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline"
                        style={{ flex: 1, justifyContent: 'center' }}
                      >
                        <span>VIEW GITHUB REPO</span>
                        <FaGithub size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
