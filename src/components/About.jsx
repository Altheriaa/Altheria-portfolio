import { motion } from 'framer-motion'

const specs = [
  { key: 'FULL_NAME', val: 'Muhammad Daffa Alfharijy' },
  { key: 'ROLE', val: 'Backend & Web Developer' },
  { key: 'LOCATION', val: 'Lamlagang, Banda Aceh, Aceh' },
  { key: 'EDUCATION', val: 'S1 Sistem Informasi — Univ. Abulyatama' },
  { key: 'PREVIOUS_EDU', val: 'SMK Negeri 5 Telkom Banda Aceh (RPL)' },
  { key: 'CORE_STACK', val: 'Laravel · FilamentPHP · Vue/Inertia · Midtrans' },
  { key: 'SERVER_MGMT', val: 'Ubuntu Linux · Nginx · MySQL' },
  { key: 'STATUS', val: 'Available // Open to Work' },
]

const stats = [
  { value: '4+', label: 'YEARS IN TECH' },
  { value: '10+', label: 'SYSTEMS BUILT' },
  { value: '2', label: 'INTERNATIONAL AWARDS' },
  { value: '100%', label: 'COMMITTED' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <div>
          <span className="section-label">ABOUT // 02</span>
          <motion.h2
            className="about__title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            THE DEVELOPER<br />BEHIND THE CODE.
          </motion.h2>
        </div>
        <div className="about__nav-hint">
          <span className="mono">VERIFIED // RESUME_DATA</span>
        </div>
      </div>

      <div className="about__grid">
        <motion.div
          className="about__bio"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p>
            Saya adalah seorang Web Developer berusia 22 tahun berbasis di Banda Aceh,
            dengan fokus mendalam pada pengembangan sistem backend menggunakan framework Laravel.
          </p>
          <p>
            Berpengalaman dalam merancang dan mengembangkan berbagai ekosistem aplikasi web skala produksi,
            seperti <strong>Sistem Informasi KKN Terpadu Unaya</strong> (RESTful API SIAKAD & Midtrans), sistem informasi reservasi <strong>Marko Barbershop</strong> dengan WhatsApp Gateway & QR Code, platform e-learning <strong>E-Plant Unaya (eplant-unaya.bio)</strong> berbasis Inertia & Vue, platform e-commerce <strong>Bay Coffee (baycoffee.shop)</strong> dengan payment gateway Midtrans, website resmi Fakultas Teknik Universitas Abulyatama, Sistem Informasi MBKM,
            aplikasi Bank Sampah (sampah.shop), hingga CMS administrasi desa dan sistem pemerintahan.
          </p>
          <p>
            Selain backend engineering, saya memiliki keahlian dalam integrasi payment gateway, Inertia.js & Vue.js, administrasi server Linux (Ubuntu),
            manajemen basis data terintegrasi, konfigurasi panel admin Filament, serta komputasi awan.
            Saya berkomitmen membangun sistem yang aman, efisien, dan berdampak nyata bagi operasional bisnis dan komunitas.
          </p>

          <div className="about__stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="about__stat"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="about__stat-value">{s.value}</div>
                <div className="about__stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about__specs"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="about__specs-title">SYSTEM_SPECS // PROFILE_DATA</div>
          {specs.map((s, i) => (
            <motion.div
              key={s.key}
              className="about__spec-row"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="about__spec-key">{s.key}</span>
              <span className="about__spec-val">{s.val}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
