import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiLivewire,
  SiFilament,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiLinux,
  SiRedis
} from 'react-icons/si'

const categories = [
  {
    title: 'FRONTEND',
    items: [
      { name: 'REACT', Icon: SiReact, level: 90 },
      { name: 'NEXT.JS', Icon: SiNextdotjs, level: 75 },
      { name: 'VITE', Icon: SiVite, level: 85 },
      { name: 'TYPESCRIPT', Icon: SiTypescript, level: 70 },
      { name: 'TAILWIND', Icon: SiTailwindcss, level: 88 },
      { name: 'FRAMER', Icon: SiFramer, level: 72 },
    ]
  },
  {
    title: 'BACKEND',
    items: [
      { name: 'LARAVEL', Icon: SiLaravel, level: 92 },
      { name: 'PHP', Icon: SiPhp, level: 88 },
      { name: 'NODE.JS', Icon: SiNodedotjs, level: 70 },
      { name: 'EXPRESS', Icon: SiExpress, level: 65 },
      { name: 'LIVEWIRE', Icon: SiLivewire, level: 80 },
      { name: 'FILAMENT', Icon: SiFilament, level: 75 },
    ]
  },
  {
    title: 'DATABASE & TOOLS',
    items: [
      { name: 'MYSQL', Icon: SiMysql, level: 85 },
      { name: 'POSTGRESQL', Icon: SiPostgresql, level: 72 },
      { name: 'GIT', Icon: SiGit, level: 90 },
      { name: 'DOCKER', Icon: SiDocker, level: 65 },
      { name: 'LINUX', Icon: SiLinux, level: 70 },
      { name: 'REDIS', Icon: SiRedis, level: 60 },
    ]
  }
]

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="stack__header">
        <div>
          <span className="section-label">TECH_STACK // 04</span>
          <motion.h2
            className="stack__title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            TOOLS &<br />TECHNOLOGIES.
          </motion.h2>
        </div>
      </div>

      <div className="stack__categories">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="stack__category-title">{cat.title}</div>
            <div className="stack__items">
              {cat.items.map((item, ii) => (
                <StackItem key={item.name} item={item} delay={ci * 0.05 + ii * 0.04} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function StackItem({ item, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const { Icon } = item

  return (
    <motion.div
      ref={ref}
      className="stack__item"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
    >
      <span className="stack__item-icon">
        <Icon size={28} />
      </span>
      <span className="stack__item-name">{item.name}</span>
      <div className="stack__item-level">
        <div
          className="stack__item-level-fill"
          style={{ width: inView ? `${item.level}%` : '0%' }}
        />
      </div>
    </motion.div>
  )
}
