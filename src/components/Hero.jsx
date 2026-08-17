import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram } from 'react-icons/fa6'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Hero() {
  const scanRef = useRef(null)

  useEffect(() => {
    let pos = 0
    let dir = 1
    const scan = () => {
      if (!scanRef.current) return
      pos += dir * 0.5
      if (pos >= 100) dir = -1
      if (pos <= 0) dir = 1
      scanRef.current.style.top = `${pos}%`
    }
    const id = setInterval(scan, 16)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Meta bar */}
      <div className="hero__meta-bar">
        <span>
          &lt; <strong>SYS_INIT</strong> &gt; OPT.CLARITY &lt; <strong>BACKEND // LARAVEL</strong> &gt;
        </span>
        <span>FORMAT: FULLSTACK // WEB &nbsp;&nbsp;&nbsp; LOCATION: BANDA ACEH / 01</span>
      </div>

      {/* Main 3-column grid */}
      <div className="hero__content">
        {/* ── Left column ── */}
        <div className="hero__left">
          <motion.div className="hero__signal" custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="hero__signal-bars">
              {[...Array(8)].map((_, i) => <span key={i} />)}
            </div>
            <div className="hero__status-dot" />
            <span className="hero__status-text">SYS_ONLINE // AVAILABLE FOR WORK</span>
          </motion.div>

          <motion.h1 className="hero__title" custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <span>BUILDING</span>
            <span>STRUCTURED</span>
            <span>SYSTEMS.</span>
            <span className="dim">FOR THE WEB.</span>
          </motion.h1>

          <motion.div className="hero__tagline" custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <p>***TURNING REQUIREMENTS INTO SECURE CODE____</p>
            <p>____SPECIALIZED IN LARAVEL, FILAMENT & MYSQL.</p>
            <p>EFFICIENT. SECURE. SCALABLE. STRUCTURED.////</p>
          </motion.div>

          <motion.div className="hero__cta" custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>VIEW PROJECTS ///</span>
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              CONNECT
            </button>
          </motion.div>
        </div>

        {/* ── Center column — photo ── */}
        <motion.div
          className="hero__center"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero__photo-frame">
            {/* Corner frame */}
            <div className="hero__photo-corners">
              <div className="hero__corner-br" />
            </div>

            {/* Scan line */}
            <div
              ref={scanRef}
              style={{
                position: 'absolute',
                left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(224,255,0,0.7), transparent)',
                pointerEvents: 'none',
                zIndex: 10,
                top: '0%',
              }}
            />

            <img src="/avatar.jpg" alt="Muhammad Daffa Alfharijy" className="hero__photo" />
          </div>

          <div className="hero__photo-label">
            <span>DAFFA // 2026</span>
            <span>BACKEND_DEV</span>
          </div>
        </motion.div>

        {/* ── Right column — info ── */}
        <motion.div
          className="hero__right"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero__info-block">
            <span className="hero__info-label">STATUS</span>
            <span className="hero__info-value">OPEN TO WORK // FULLSTACK</span>
          </div>
          <div className="hero__info-block">
            <span className="hero__info-label">LOCATION</span>
            <span className="hero__info-value">BANDA ACEH, ID</span>
          </div>
          <div className="hero__info-block">
            <span className="hero__info-label">SPECIALTY</span>
            <span className="hero__info-value">LARAVEL · FILAMENT · CMS</span>
          </div>

          <div className="hero__focus-box">
            <div className="hero__focus-title">CORE_COMPETENCY.</div>
            <div className="hero__focus-text">
              DATABASE ARCHITECTURE.<br />
              SERVER ADMINISTRATION.<br />
              REST API & AUTH FLOW.
            </div>
          </div>

          <div className="hero__social-connect">
            <span className="hero__social-label">CONNECT // NETWORK</span>
            <div className="hero__social-links">
              <a href="https://github.com/altheriaa" target="_blank" rel="noreferrer" className="hero__social-btn" title="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hero__social-btn" title="Instagram">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Status bar */}
      <div className="hero__statusbar">
        <div className="hero__statusbar-item">
          <div className="dot" />
          <span>SYS [ONLINE]</span>
        </div>
        <div className="hero__statusbar-item">
          <span>STACK: LARAVEL + FILAMENT + MYSQL</span>
        </div>
        <div className="hero__statusbar-item">
          <span>BASE: BANDA ACEH // 2026</span>
        </div>
      </div>
    </section>
  )
}
