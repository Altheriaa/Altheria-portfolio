export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__name">DEV.</span>
        <span className="footer__sub">FULL STACK WEB DEVELOPER // INDONESIA</span>
      </div>

      <div className="footer__center">
        <span className="mono">© {year} · BUILT WITH REACT + VITE</span>
      </div>

      <div className="footer__status">
        <div className="footer__status-dot" />
        <span>SYS [ONLINE]</span>
      </div>
    </footer>
  )
}
