import { motion } from 'framer-motion'

const specs = [
  { key: 'FULL_NAME', val: 'Muhammad Daffa Alfharijy, S.Kom' },
  { key: 'ROLE', val: 'Fullstack & Backend Web Developer' },
  { key: 'EDUCATION', val: 'S1 Sistem Informasi — Universitas Abulyatama' },
  { key: 'PREVIOUS_EDU', val: 'SMK Negeri 5 Telkom (RPL)' },
  { key: 'MAIN_STACK', val: 'Laravel · Vue / Inertia · Filament · MySQL' },
  { key: 'INTEGRATIONS', val: 'Midtrans Payment Gateway · WhatsApp API · Webhook' },
  { key: 'ENVIRONMENT', val: 'Linux Ubuntu · Nginx · Git' },
  { key: 'STATUS', val: 'Available for Work' },
]

const stats = [
  { value: '4+', label: 'YEARS IN TECH' },
  { value: '10+', label: 'PROJECTS BUILT' },
  { value: '2', label: 'AWARDS WON' },
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
            Saya seorang Web Developer lulusan <strong>S1 Sistem Informasi Universitas Abulyatama</strong> dengan latar belakang pendidikan vokasi di <strong>SMK Negeri 5 Telkom (Rekayasa Perangkat Lunak)</strong>. Terbiasa membangun aplikasi web dari perancangan database, backend logic, hingga integrasi antarmuka.
          </p>
          <p>
            Telah mengembangkan berbagai proyek web seperti <strong>Sistem Informasi KKN Terpadu UNAYA</strong>, sistem <strong>E-Helpdesk IT Support Disdik</strong>, platform <strong>Edugenzi (E-Learning PBL)</strong>, platform reservasi barbershop, dan aplikasi e-commerce.
          </p>
          <p>
            Fokus saya adalah membangun sistem yang fungsional, terstruktur, dan mudah digunakan, dengan pengalaman integrasi seperti payment gateway (Midtrans), WhatsApp Gateway API, webhook, dan panel admin.
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
