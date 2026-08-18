import { motion } from 'framer-motion'

const specs = [
  { key: 'FULL_NAME', val: 'Muhammad Daffa Alfharijy, S.Kom' },
  { key: 'ROLE', val: 'Fullstack & Backend Web Developer' },
  { key: 'EDUCATION', val: 'Bachelor of Information Systems — Universitas Abulyatama' },
  { key: 'PREVIOUS_EDU', val: 'SMK Negeri 5 Telkom (Software Engineering)' },
  { key: 'MAIN_STACK', val: 'Laravel · Vue / Inertia · Filament · MySQL · PostgreSQL' },
  // { key: 'INTEGRATIONS', val: 'Midtrans Payment Gateway · WhatsApp API · Webhooks' },
  { key: 'ENVIRONMENT', val: 'MacOS · Linux Ubuntu · Nginx · Apache2 · Git' },
  { key: 'STATUS', val: 'Open for Opportunities' },
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
          <span className="mono">PROFILE</span>
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
            I am a Software Engineer and Fullstack Web Developer holding a <strong>Bachelor of Information Systems from Universitas Abulyatama</strong>, built on a strong vocational foundation in <strong>Software Engineering from SMK Negeri 5 Telkom</strong>. I specialize in engineering high-performance web applications—from foundational database schemas and scalable backend logic to sleek, interactive user interfaces.
          </p>
          <p>
            Over the years, I have architected and deployed robust production systems, including the <strong>UNAYA Integrated KKN Information System</strong>, <strong>Aceh Education Department's E-Helpdesk IT Support Platform</strong>, the <strong>Edugenzi Project-Based Learning LMS</strong>, real-time barber reservation platforms, and full-scale e-commerce solutions.
          </p>
          <p>
            My core focus is on crafting clean, resilient, and enterprise-grade software. I bring deep hands-on expertise in integrating complex third-party services, such as payment gateways (Midtrans), WhatsApp Business APIs, event-driven webhooks, and streamlined admin control panels.
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
          <div className="about__specs-title">PROFILE SPECIFICATIONS</div>
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
