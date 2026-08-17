import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMenu, LuX, LuSun, LuMoon } from 'react-icons/lu'

const navItems = ['HOME', 'ABOUT', 'WORK', 'STACK', 'CONTACT']

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Navbar({ theme, toggleTheme }) {
  const [time, setTime] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('HOME')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      // If scrolled near the bottom, highlight CONTACT
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActive('CONTACT')
        return
      }

      // Check sections from bottom to top
      const sectionElements = navItems
        .map(item => ({
          id: item,
          el: document.getElementById(item.toLowerCase())
        }))
        .filter(item => item.el !== null)

      const triggerPosition = scrollY + 200

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i]
        if (triggerPosition >= el.offsetTop) {
          setActive(id)
          return
        }
      }

      setActive('HOME')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ borderBottomColor: scrolled ? 'var(--border)' : 'transparent' }}
      >
        <div className="navbar__logo" onClick={() => scrollTo('HOME')}>
          <span className="navbar__logo-name">ALTHERIA.</span>
          <span className="navbar__logo-sub">SYS // 2026</span>
        </div>

        <nav className="navbar__nav">
          {navItems.map((item, i) => (
            <motion.span
              key={item}
              className={`navbar__link ${active === item ? 'active' : ''}`}
              onClick={() => scrollTo(item)}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {item}
            </motion.span>
          ))}
        </nav>

        <div className="navbar__right">
          <span className="navbar__clock">{time}</span>
          <div className="navbar__divider" />
          <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <LuSun size={18} /> : <LuMoon size={18} />}
          </button>
          <button
            className="navbar__menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0,
              background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)',
              zIndex: 99, padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '20px'
            }}
          >
            {navItems.map(item => (
              <span
                key={item}
                className="navbar__link"
                onClick={() => scrollTo(item)}
                style={{ fontSize: '14px' }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
