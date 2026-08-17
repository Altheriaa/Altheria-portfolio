import { motion } from 'framer-motion'

const specs = [
  { key: 'ROLE', val: 'Full Stack Web Developer' },
  { key: 'FRAMEWORK', val: 'React · Laravel · Next.js' },
  { key: 'LANGUAGES', val: 'PHP · JS · TypeScript' },
  { key: 'DATABASE', val: 'MySQL · PostgreSQL' },
  { key: 'TOOLS', val: 'Git · Vite' },
  { key: 'STATUS', val: 'Open to Work' },
]

const stats = [
  { value: '2', label: 'YEARS EXP' },
  { value: '10', label: 'PROJECTS' },
  { value: '3', label: 'FRAMEWORKS' },
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
          <span className="mono">VERIFIED // RECORDS</span>
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
            Saya adalah seorang Full Stack Web Developer dengan passion dalam membangun
            sistem digital yang skalabel, efisien, dan berdampak nyata.
          </p>
          <p>
            Dengan pengalaman lebih dari 3 tahun di industri, saya telah mengerjakan
            berbagai proyek mulai dari sistem manajemen inventory, aplikasi kasir,
            hingga platform web modern berbasis React dan Laravel.
          </p>
          <p>
            Saya percaya bahwa kode yang baik bukan hanya tentang fungsi — ia tentang
            keterbacaan, maintainability, dan pengalaman pengguna yang mulus.
            Clean code bukan pilihan, itu standar.
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
          <div className="about__specs-title">SYSTEM_SPECS // DEV_CONFIG</div>
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
