import { useState } from 'react'
import { motion } from 'framer-motion'
import { LuSend, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { FaGithub, FaInstagram } from 'react-icons/fa6'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Simulate send
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <span className="section-label">CONNECT // 05</span>
        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          LET'S BUILD<br />TOGETHER.
        </motion.h2>
        <p className="contact__subtitle">
          GOT A PROJECT OR OPPORTUNITY? LET'S TALK. /// OPEN TO FULL-TIME & FREELANCE
        </p>
      </div>

      <div className="contact__grid">
        {/* Form */}
        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="contact__row">
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">NAME</label>
              <input
                id="name"
                name="name"
                className="contact__input"
                placeholder="Nama Anda..."
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label className="contact__label" htmlFor="email">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                className="contact__input"
                placeholder="email@anda.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="subject">SUBJECT</label>
            <input
              id="subject"
              name="subject"
              className="contact__input"
              placeholder="Topik proyek / tawaran kerjasama..."
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              className="contact__textarea"
              placeholder="Ceritakan tentang proyek atau kebutuhan sistem Anda..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="btn-primary"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            style={{ alignSelf: 'flex-start' }}
          >
            <span>{sent ? 'MESSAGE_SENT ✓' : 'SEND MESSAGE ///'}</span>
            {!sent && <LuSend size={15} style={{ position: 'relative', zIndex: 1 }} />}
          </motion.button>
        </motion.form>

        {/* Info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="contact__info-item">
            <span className="contact__info-label">
              <LuMail size={14} />
              EMAIL
            </span>
            <a href="mailto:daffaalfharizy265@gmail.com" className="contact__info-value">
              daffaalfharizy265@gmail.com
            </a>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-label">
              <LuPhone size={14} />
              PHONE / WHATSAPP
            </span>
            <a href="https://wa.me/628974688919" target="_blank" rel="noreferrer" className="contact__info-value">
              +62 897-4688-919
            </a>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-label">
              <LuMapPin size={14} />
              LOCATION &amp; WORKSPACE
            </span>
            <span className="contact__info-value">Indonesia (Available for Remote / Hybrid / Relocation)</span>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-label">AVAILABILITY</span>
            <span className="contact__info-value" style={{ color: 'var(--highlight)' }}>
              ● OPEN TO WORK // FULL-TIME, CONTRACT &amp; FREELANCE
            </span>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-label">SOCIAL</span>
            <div className="contact__socials">
              <a href="https://github.com/altheriaa" target="_blank" rel="noreferrer" className="contact__social-link">
                <FaGithub size={16} />
                GITHUB
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact__social-link">
                <FaInstagram size={16} />
                INSTAGRAM
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
