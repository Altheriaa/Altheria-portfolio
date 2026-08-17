export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__name">MUHAMMAD DAFFA ALFHARIJY</span>
        <span className="footer__sub">SOFTWARE ENGINEER // FULLSTACK &amp; BACKEND DEVELOPER</span>
      </div>

      <div className="footer__center">
        <span className="mono">© {year} · DESIGNED &amp; DEVELOPED BY MUHAMMAD DAFFA A. (S.Kom)</span>
      </div>

      <div className="footer__status">
        <div className="footer__status-dot" />
        <span>SYS [ONLINE]</span>
      </div>
    </footer>
  )
}
