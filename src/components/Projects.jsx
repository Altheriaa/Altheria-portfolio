import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuExternalLink, LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa6'

const allProjects = [
  {
    id: 'proj-001',
    tag: 'INVENTORY_SYS',
    name: 'STOK FIFO SYSTEM',
    desc: 'SISTEM MANAJEMEN STOK · FIFO METHOD & INVENTORY FLOW',
    year: '2026',
    stack: ['LARAVEL', 'MYSQL', 'BLADE'],
    category: 'BACKEND',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&grayscale',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'proj-002',
    tag: 'POS_SYSTEM',
    name: 'KASIR APP',
    desc: 'POINT OF SALE · BARCODE SCANNER & REALTIME TRANSACTIONS',
    year: '2026',
    stack: ['LARAVEL', 'ALPINE.JS', 'TAILWIND'],
    category: 'FULLSTACK',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&grayscale',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'proj-003',
    tag: 'INVENTORY_ROP',
    name: 'INVENTARIS ROP/FEFO',
    desc: 'RE-ORDER POINT ALGORITHM · FEFO EXPIRATION TRACKING',
    year: '2026',
    stack: ['LARAVEL', 'LIVEWIRE', 'MYSQL'],
    category: 'BACKEND',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&grayscale',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'proj-004',
    tag: 'FRONTEND_SYS',
    name: 'DARK PORTFOLIO V2',
    desc: 'PERSONAL PORTFOLIO · MODERN TECHNICAL EDITORIAL UI',
    year: '2026',
    stack: ['REACT', 'VITE', 'FRAMER MOTION'],
    category: 'FRONTEND',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&grayscale',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'proj-005',
    tag: 'ANALYTICS_PANEL',
    name: 'ADMIN DASHBOARD',
    desc: 'BUSINESS ANALYTICS · METRICS VISUALIZATION & CHART ENGINE',
    year: '2025',
    stack: ['REACT', 'CHART.JS', 'LARAVEL API'],
    category: 'FULLSTACK',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&grayscale',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'proj-006',
    tag: 'ECOMMERCE_WEB',
    name: 'STORE PLATFORM',
    desc: 'MODERN CHECKOUT SYSTEM · PAYMENT GATEWAY & CART ENGINE',
    year: '2025',
    stack: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA'],
    category: 'FRONTEND',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80&grayscale',
    github: 'https://github.com',
    live: '#',
  },
]

const filters = ['ALL', 'FULLSTACK', 'BACKEND', 'FRONTEND']

export default function Projects() {
  const [filter, setFilter] = useState('ALL')
  const [startIndex, setStartIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const filtered = filter === 'ALL' ? allProjects : allProjects.filter(p => p.category === filter)
  const total = filtered.length

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

  // Get exactly 3 circular items for desktop display
  const visibleProjects = [0, 1, 2].map(offset => {
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
            SELECTED<br />PROJECTS.
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

      {/* Infinite Loop 3-Card Carousel Container */}
      <div className="carousel-wrapper">
        <button className="carousel-side-nav carousel-side-prev" onClick={prevSlide} aria-label="Previous">
          <LuChevronLeft size={24} />
        </button>

        <div className="carousel-grid-container">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={`${filter}-${startIndex}`}
              className="carousel-cards-row"
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {visibleProjects.map((proj, i) => (
                <div key={`${proj.id}-${i}`} className="carousel-card-col">
                  <div className="project-card">
                    <div className="project-card__img">
                      <img src={proj.img} alt={proj.name} loading="lazy" />
                      <div className="project-card__tag">{proj.tag}</div>
                    </div>

                    <div className="project-card__body">
                      <div className="project-card__index">
                        ARCHIVE-{String(proj.displayIndex + 1).padStart(2, '0')}
                      </div>
                      <div className="project-card__name">{proj.name}</div>
                      <div className="project-card__desc">{proj.desc}</div>
                      
                      <div className="project-card__meta">
                        <div className="project-card__meta-left">YR: {proj.year}</div>
                        <div className="project-card__tech">
                          {proj.stack.map(t => <span key={t}>{t}</span>)}
                        </div>
                      </div>

                      <div className="project-card__actions">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card__action"
                        >
                          <span>SOURCE CODE</span>
                          <FaGithub size={14} />
                        </a>
                        <a
                          href={proj.live}
                          className="project-card__action"
                        >
                          <span>OPEN PROJECT</span>
                          <LuExternalLink size={14} />
                        </a>
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
    </section>
  )
}
