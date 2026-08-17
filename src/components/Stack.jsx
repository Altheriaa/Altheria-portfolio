import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiLaravel,
  SiPhp,
  SiCodeigniter,
  SiMysql,
  SiGit,
  SiUbuntu,
  SiLinux,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiPostman,
  SiVuedotjs,
  SiInertia,
  SiWhatsapp
} from 'react-icons/si'
import { LuServer, LuLayers, LuCreditCard, LuShoppingBag } from 'react-icons/lu'

const categories = [
  {
    title: 'BACKEND & FRAMEWORKS',
    items: [
      { name: 'LARAVEL', Icon: SiLaravel, level: 95 },
      { name: 'FILAMENT PHP', Icon: LuLayers, level: 92 },
      { name: 'INERTIA.JS', Icon: SiInertia, level: 88 },
      { name: 'PHP NATIVE', Icon: SiPhp, level: 90 },
      { name: 'REST API', Icon: SiPostman, level: 90 },
      { name: 'CODEIGNITER', Icon: SiCodeigniter, level: 75 },
    ]
  },
  {
    title: 'GATEWAYS & DEV TOOLS',
    items: [
      { name: 'MIDTRANS PG', Icon: LuCreditCard, level: 92 },
      { name: 'WHATSAPP API', Icon: SiWhatsapp, level: 90 },
      { name: 'GIT & GITHUB', Icon: SiGit, level: 88 },
      { name: 'POSTMAN API', Icon: SiPostman, level: 86 },
    ]
  },
  {
    title: 'DATABASE & SERVER INFRASTRUCTURE',
    items: [
      { name: 'MYSQL', Icon: SiMysql, level: 90 },
      { name: 'UBUNTU SERVER', Icon: SiUbuntu, level: 85 },
      { name: 'LINUX ADMIN', Icon: SiLinux, level: 82 },
      { name: 'CI/CD', Icon: LuServer, level: 80 },
    ]
  },
  {
    title: 'FRONTEND & INTERFACE',
    items: [
      { name: 'VUE.JS', Icon: SiVuedotjs, level: 86 },
      { name: 'TAILWIND CSS', Icon: SiTailwindcss, level: 88 },
      { name: 'BOOTSTRAP', Icon: SiBootstrap, level: 90 },
      { name: 'JAVASCRIPT', Icon: SiJavascript, level: 82 },
      { name: 'HTML5 / CSS3', Icon: SiHtml5, level: 92 },
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
            TECH <br />STACK.
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
